// js/guard.js
import { auth, db, FB } from './firebase.js';

export function requireAuth(onAuthenticated) {
    FB.onAuthStateChanged(auth, async (user) => {
        if (!user) {
            window.location.href = 'index.html';
        } else {
            try {
                // Fetch permissions from root /users/{email} collection
                const userDocRef = FB.doc(db, 'users', user.email.toLowerCase());
                const userSnap = await FB.getDoc(userDocRef);

                if (userSnap.exists()) {
                    const userData = userSnap.data();
                    user.role = userData.role || 'client';
                    user.assignedBranch = userData.branch || 'UNASSIGNED';
                } else {
                    // Auto-create basic client profile if they don't exist yet
                    user.role = 'client';
                    user.assignedBranch = 'UNASSIGNED';
                    await FB.setDoc(userDocRef, { role: 'client', branch: 'UNASSIGNED' });
                }
                
                onAuthenticated(user);
            } catch (error) {
                console.error("Permission check failed:", error);
                window.location.href = 'index.html';
            }
        }
    });
}
