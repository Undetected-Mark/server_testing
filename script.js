document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const username = loginForm.username.value;
        const password = loginForm.password.value;

        // Simulate login process
        if (username === 'user' && password === 'password') {
            window.location.href = 'main.html';
        } else {
            window.location.href = `error.html?code=401`;
        }
    });

    // Handle 404 errors
    const urlParams = new URLSearchParams(window.location.search);
    const errorCode = urlParams.get('code');
    if (errorCode === '404') {
        window.location.href = '404.html';
    }
});
