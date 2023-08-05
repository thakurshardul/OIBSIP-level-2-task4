document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('login-form');
  const registerForm = document.getElementById('register-form');
  let users = [
    { username: 'shardul', password: 'pass123' },
    { username: 'shiva', password: 'pass456' },
    { username: 'harsh', password: 'pass789' }
  ];

  loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
      window.location.href = 'secure.html'; // Redirect to secure page
    } else {
      alert('Invalid username or password');
    }
  });

  registerForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const newUsername = document.getElementById('new-username').value;
    const newPassword = document.getElementById('new-password').value;

    // Check if the new username is already taken
    const isTaken = users.some(user => user.username === newUsername);

    if (!isTaken) {
      users.push({ username: newUsername, password: newPassword });
      alert('Registration successful! You can now log in.');
    } else {
      alert('Username is already taken. Please choose a different username.');
    }
  });
});
