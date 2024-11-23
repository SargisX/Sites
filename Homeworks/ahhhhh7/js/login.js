document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
  
    const users = getFromLocalStorage('users') || [];
    const user = users.find(user => user.username === username && user.password === password);
  
    if (user) {
      saveToLocalStorage('currentUser', user);
      window.location.href = 'games.html';
    } else {
      alert('Invalid username or password!');
    }
  });
  