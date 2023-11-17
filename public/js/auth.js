// auth.js - 
//ZACK: USE FIREBASE FOR AUTH. functionality for user registration, login, and logout


// Initialize Firebase**(ZACK: USE FIREBASE FOR AUTH)
//npm install`firebase`

//remember to add the firebase script to the html file, and also read documentation on how to set up firebase!**



// Function to handle user registration
function handleRegistration(event) {
    event.preventDefault();
  
    const nameInput = document.querySelector('#name');
    const emailInput = document.querySelector('#email');
    const passwordInput = document.querySelector('#password');
  
    const name = nameInput.value;
    const email = emailInput.value;
    const password = passwordInput.value;
  
    // Perform registration logic using the name, email, and password
    // ...
  
    // Clear the form inputs
    nameInput.value = '';
    emailInput.value = '';
    passwordInput.value = '';
  }
  
  // Function to handle user login
  function handleLogin(event) {
    event.preventDefault();
  
    const emailInput = document.querySelector('#email');
    const passwordInput = document.querySelector('#password');
  
    const email = emailInput.value;
    const password = passwordInput.value;
  
    // Perform login logic using the email and password
    // ...
  
    // Clear the form inputs
    emailInput.value = '';
    passwordInput.value = '';
  }
  
  // Function to handle user logout
  function handleLogout() {
    // Perform logout logic
    // ...
  }
  
  // Event Listeners
  document.addEventListener('DOMContentLoaded', function() {
    // Registration form submission event
    const registrationForm = document.querySelector('.registration-form');
    registrationForm.addEventListener('submit', handleRegistration);
  
    // Login form submission event
    const loginForm = document.querySelector('.login-form');
    loginForm.addEventListener('submit', handleLogin);
  
    // Logout button click event
    const logoutButton = document.querySelector('.logout-button');
    logoutButton.addEventListener('click', handleLogout);
  });