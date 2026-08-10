<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Login - CM ADMIN</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="manifest" href="manifest.json">
  <meta name="theme-color" content="#312e81">
</head>
<body class="bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center min-h-screen p-4 font-sans text-slate-800">

  <div class="w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100">
     <div class="bg-indigo-600 p-8 text-center text-white relative">
        <img src="assets/logo.png" alt="Logo" class="w-16 h-16 mx-auto rounded-2xl mb-4 shadow-md bg-white p-1" onerror="this.style.display='none'" />
        <h2 class="text-2xl font-extrabold tracking-tight">Client Hub CRM</h2>
        <p class="text-indigo-200 text-sm font-medium mt-1">Corporate Edition</p>
     </div>
     
     <div class="p-8">
        <div id="error-box" class="hidden bg-rose-50 text-rose-600 text-xs font-bold p-3 rounded-lg border border-rose-100 mb-5 text-center"></div>
        
        <form id="login-form" class="space-y-4">
           <div>
             <label class="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">Email Address</label>
             <input type="email" id="email" required class="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:bg-white text-sm" placeholder="admin@example.com" />
           </div>
           <div>
             <div class="flex justify-between items-center mb-1.5">
                <label class="block text-[10px] font-bold text-slate-500 uppercase tracking-wider">Password</label>
             </div>
             <input type="password" id="password" required class="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:bg-white text-sm" placeholder="••••••••" />
           </div>
           <button type="submit" id="submit-btn" class="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3.5 rounded-xl shadow-md transition-colors mt-2">Secure Login</button>
        </form>

        <div class="my-6 flex items-center">
           <div class="flex-grow border-t border-slate-200"></div>
           <span class="flex-shrink-0 px-4 text-slate-400 text-xs font-bold uppercase">Or Client Access</span>
           <div class="flex-grow border-t border-slate-200"></div>
        </div>

        <button id="google-btn" class="w-full bg-white border border-slate-200 text-slate-700 font-bold py-3.5 rounded-xl shadow-sm hover:bg-slate-50 transition-colors flex justify-center items-center gap-3">
           <svg class="w-5 h-5" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
           Sign in with Google
        </button>
     </div>
  </div>

  <script type="module">
    import { auth, FB } from './js/firebase.js';

    // Auto-redirect if already logged in
    FB.onAuthStateChanged(auth, (user) => {
        if (user) window.location.href = 'admin.html';
    });

    const showError = (msg) => {
        const box = document.getElementById('error-box');
        box.textContent = msg;
        box.classList.remove('hidden');
    };

    document.getElementById('login-form').addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const pass = document.getElementById('password').value;
        document.getElementById('submit-btn').textContent = "Authenticating...";
        try {
            await FB.signInWithEmailAndPassword(auth, email, pass);
            window.location.href = 'admin.html';
        } catch (err) {
            showError(err.message.replace("Firebase: ", ""));
            document.getElementById('submit-btn').textContent = "Secure Login";
        }
    });

    document.getElementById('google-btn').addEventListener('click', async () => {
        try {
            const provider = new FB.GoogleAuthProvider();
            await FB.signInWithPopup(auth, provider);
            window.location.href = 'admin.html';
        } catch (err) {
            showError(err.message);
        }
    });
  </script>
</body>
</html>
