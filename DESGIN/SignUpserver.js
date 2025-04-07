document.getElementById('signupForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    let username = document.getElementById('username').value.trim();
    let email = document.getElementById('email').value.trim();
    let password = document.getElementById('password').value.trim();
    let errorMessage = document.getElementById('errorMessage');

    if (username === '' || email === '' || password === '') {
        errorMessage.textContent = 'All fields are required!';
        return;
    }

    try {
        let response = await fetch('http://localhost:5000/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, email, password })
        });

        let data = await response.json();

        if (response.ok) {
            alert('Signup successful!');
            errorMessage.textContent = '';
        } else {
            errorMessage.textContent = data.message;
        }
    } catch (error) {
        console.error('Error:', error);
        errorMessage.textContent = 'Server error. Try again later.';
    }
});
