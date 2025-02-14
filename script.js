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
      window.location.href = './tasks/index.html';
    });
  
    achievementsButton.addEventListener('click', () => {
      alert('Achievements button clicked'); // Change this to desired functionality
    });
  
    mentalHealthButton.addEventListener('click', () => {
      window.location.href = './mentalfitness/index.html';
    });
  
    physicalHealthButton.addEventListener('click', () => {
      window.location.href = './physicalfitness/index.html';
    });
  });