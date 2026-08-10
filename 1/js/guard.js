// js/guard.js
import { auth, FB } from './firebase.js';

// Define Corporate Admins here
const ADMIN_EMAILS = ['admin@cmfilings.com', 'demo@cmfilings.com'];

export function requireAuth(onAuthenticated) {
    FB.onAuthStateChanged(auth, (user) => {
        if (!user) {
            // Not logged in -> Kick to index
            window.location.href = 'index.html';
        } else {
            // Assign roles
            const isAdmin = ADMIN_EMAILS.includes(user.email?.toLowerCase());
            user.role = isAdmin ? 'admin' : 'client';
            user.assignedBranch = 'HQ'; // Fetch dynamically if needed later
            
            // Allow page render
            onAuthenticated(user);
        }
    });
}
