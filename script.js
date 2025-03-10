document.addEventListener('DOMContentLoaded', () => {
    const loginButton = document.getElementById('login-button');
    const tasksButton = document.getElementById('tasks-button');
    const achievementsButton = document.getElementById('achievements-button');
    const mentalHealthButton = document.getElementById('mental-health-button');
    const physicalHealthButton = document.getElementById('physical-health-button');
    const routine = document.getElementById('routine');
  
    loginButton.addEventListener('click', () => {
      window.location.href = './login/index.html';
    });
  
    tasksButton.addEventListener('click', () => {
      window.location.href = './tasks/index.html';
    });
  
    achievementsButton.addEventListener('click', () => {
      window.location.href = './acheivements/index.html';
    });
  
    mentalHealthButton.addEventListener('click', () => {
      window.location.href = './mentalfitness/index.html';
    });
  
    physicalHealthButton.addEventListener('click', () => {
      window.location.href = './physicalhealth/index.html';
    });

    document.getElementById("routine").addEventListener("click", () => {
      window.location.href = "./routine/index.html";
  });
  
  
  });