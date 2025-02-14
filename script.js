document.addEventListener('DOMContentLoaded', () => {
    const loginButton = document.getElementById('login-button');
    const tasksButton = document.getElementById('tasks-button');
    const achievementsButton = document.getElementById('achievements-button');
    const mentalHealthButton = document.getElementById('mental-health-button');
    const physicalHealthButton = document.getElementById('physical-health-button');
  
    loginButton.addEventListener('click', () => {
      window.location.href = './login/index.html';
    });
  
    tasksButton.addEventListener('click', () => {
      alert('Tasks button clicked'); // Change this to desired functionality
    });
  
    achievementsButton.addEventListener('click', () => {
      alert('Achievements button clicked'); // Change this to desired functionality
    });
  
    mentalHealthButton.addEventListener('click', () => {
      window.location.href = './mentalhealth/index.html';
    });
  
    physicalHealthButton.addEventListener('click', () => {
      window.location.href = './physicalhealth/index.html';
    });
  });