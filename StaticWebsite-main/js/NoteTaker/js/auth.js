// Initialize Supabase client
const supabaseUrl = localStorage.getItem('SUPABASE_URL');
const supabaseKey = localStorage.getItem('SUPABASE_ANON_KEY');

if (!supabaseUrl || !supabaseKey) {
    alert('Please set your Supabase credentials in the .env file');
}

const supabase = supabase.createClient(supabaseUrl, supabaseKey);

// Check if user is authenticated
async function checkAuth() {
    const { data: { user }, error } = await supabase.auth.getUser();
    if (error || !user) {
        // If not on the sign-in page, redirect to it
        if (!window.location.href.includes('signin.html')) {
            window.location.href = '/auth/signin.html';
        }
    } else {
        // If on an auth page, redirect to dashboard
        if (window.location.href.includes('/auth/')) {
            window.location.href = '/dashboard/';
        }
    }
    return user;
}

// Sign Up
const signupForm = document.getElementById('signup-form');
if (signupForm) {
    signupForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;
        const errorMessage = document.getElementById('error-message');
        const successMessage = document.getElementById('success-message');

        if (password !== confirmPassword) {
            errorMessage.textContent = 'Passwords do not match';
            return;
        }

        const { data, error } = await supabase.auth.signUp({
            email,
            password
        });

        if (error) {
            errorMessage.textContent = error.message;
        } else {
            successMessage.textContent = 'Please check your email for verification link';
            signupForm.reset();
        }
    });
}

// Sign In
const signinForm = document.getElementById('signin-form');
if (signinForm) {
    signinForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const errorMessage = document.getElementById('error-message');

        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password
        });

        if (error) {
            errorMessage.textContent = error.message;
        } else {
            window.location.href = '/dashboard/';
        }
    });
}

// Reset Password
const resetPasswordForm = document.getElementById('reset-password-form');
if (resetPasswordForm) {
    resetPasswordForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const errorMessage = document.getElementById('error-message');
        const successMessage = document.getElementById('success-message');

        const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
            redirectTo: window.location.origin + '/auth/update-password.html',
        });

        if (error) {
            errorMessage.textContent = error.message;
        } else {
            successMessage.textContent = 'Password reset link sent to your email';
            resetPasswordForm.reset();
        }
    });
}

// Sign Out
const logoutBtn = document.getElementById('logout-btn');
if (logoutBtn) {
    logoutBtn.addEventListener('click', async () => {
        const { error } = await supabase.auth.signOut();
        if (!error) {
            window.location.href = '/';
        }
    });
}

// Initialize auth state
if (document.getElementById('user-email')) {
    checkAuth().then(user => {
        if (user) {
            document.getElementById('user-email').textContent = user.email;
        }
    });
} else {
    checkAuth();
}

// Initialize Supabase client
const supabase = createClient(
    'https://brulwzjoscuzdzarmbwr.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJydWx3empvc2N1emR6YXJtYndyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg1MTE4NDAsImV4cCI6MjA1NDA4Nzg0MH0.VAVtkS9CVSTv3M_pHWxaMbffpiJaTOgyezNeSGU9IC8'
);