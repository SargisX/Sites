document.getElementById('signupForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
  
    const users = getFromLocalStorage('users') || [];
    if (users.find(user => user.username === username)) {
      alert('Username already exists!');
      return;
    }
  
    users.push({ username, password });
    saveToLocalStorage('users', users);
    alert('Signup successful!');
    window.location.href = 'login.html';
  });
  