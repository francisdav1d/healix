document.addEventListener('DOMContentLoaded', () => {
    // Add event listeners for buttons
    document.querySelector('.learn-more').addEventListener('click', handleLearnMore);
    document.querySelector('.login-button').addEventListener('click', handleLogin);
    document.querySelector('.start-routine-button').addEventListener('click', handleStartRoutine);
    document.querySelector('.chatbot-button').addEventListener('click', handleChatbot);
  });
  
  function handleLearnMore() {
    alert("Welcome to Healix! Explore our services to start your journey towards a healthier life.");
  }
  
  function handleLogin() {
    alert("Login functionality is currently unavailable. Please check back later.");
  }
  
  function handleChatbot() {
    alert("Chatbot is currently unavailable. Please check back later.");
  }
  
  function handleStartRoutine() {
    alert("Let's start your new routine!");
  }

  function navigate(page) {
    if (page === 'login') {
        window.location.href = './login/index.html'; // Corrected the path
    } else {
        alert('Navigating to ' + page);
    }
}
