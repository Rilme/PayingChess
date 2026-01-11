$(document).ready(function() {
    const apiUrl = 'http://localhost:8000'; // Your backend URL

    var board = Chessboard('board', 'start');

    // Show login or dashboard based on token
    if (localStorage.getItem('accessToken')) {
        $('#login-section').addClass('hidden');
        $('#register-section').addClass('hidden');
        $('#dashboard-section').removeClass('hidden');
        $('#game-section').removeClass('hidden');
        // You would typically fetch user data here
    }

    // Registration
    $('#register-form').on('submit', function(e) {
        e.preventDefault();
        const userData = {
            username: $('#reg-username').val(),
            email: $('#reg-email').val(),
            password: $('#reg-password').val(),
            dob: $('#reg-dob').val()
        };
        // This is a placeholder for the actual API call
        console.log('Registering user:', userData);
        alert('Registration functionality not implemented in this example.');
    });

    // Login
    $('#login-form').on('submit', function(e) {
        e.preventDefault();
        const loginData = {
            username: $('#login-username').val(),
            password: $('#login-password').val(),
            otp: $('#login-otp').val()
        };
        // This is a placeholder for the actual API call
        console.log('Logging in with:', loginData);
        alert('Login functionality not implemented in this example. Simulating successful login.');
        
        // Simulate a successful login
        localStorage.setItem('accessToken', 'fake-token');
        $('#login-section').addClass('hidden');
        $('#register-section').addClass('hidden');
        $('#dashboard-section').removeClass('hidden');
        $('#game-section').removeClass('hidden');
    });

    // Logout
    $('#logout-btn').on('click', function() {
        localStorage.removeItem('accessToken');
        location.reload();
    });

    // Start Match
    $('#start-match-btn').on('click', function() {
        // Placeholder for WebSocket connection or match request
        alert('Matchmaking not implemented in this example.');
    });

});
