// Import the necessary Firebase SDK modules
const firebase = require("firebase/app");
require("firebase/auth");

// Initialize Firebase with your project credentials
const firebaseConfig = {
  
};

firebase.initializeApp(firebaseConfig);

// Function to handle user registration
function handleRegistration(event) {
  event.preventDefault();

  const firstNameInput = document.querySelector('#firstName');
  const lastNameInput = document.querySelector('#lastName');

  const emailInput = document.querySelector('#email');
  const passwordInput = document.querySelector('#password');

  const firstName = firstNameInput.value;
  const lastName = lastNameInput.value;
  const email = emailInput.value;
  const password = passwordInput.value;

  // Register a new user with Firebase
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // User registration successful
      const user = userCredential.user;
      console.log('User registered:', user);
      // Additional registration logic or redirects can be added here

      // Clear the form inputs
      firstNameInput.value = '';
      lastNameInput.value = '';
      emailInput.value = '';
      passwordInput.value = '';
    })
    .catch((error) => {
      // User registration failed
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error('Registration error:', errorCode, errorMessage);
    });
}

// Function to handle user login
function handleLogin(event) {
  event.preventDefault();

  const emailInput = document.querySelector('#email');
  const passwordInput = document.querySelector('#password');

  const email = emailInput.value;
  const password = passwordInput.value;

  // Login the user with Firebase
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // User login successful
      const user = userCredential.user;
      console.log('User logged in:', user);
      // Additional login logic or redirects can be added here

      // Clear the form inputs
      emailInput.value = '';
      passwordInput.value = '';
    })
    .catch((error) => {
      // User login failed
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error('Login error:', errorCode, errorMessage);
    });
}

// Function to handle user logout
function handleLogout() {
  // Logout the current user with Firebase
  firebase.auth().signOut()
    .then(() => {
      // User logout successful
      console.log('User logged out');
      // Additional logout logic or redirects can be added here
    })
    .catch((error) => {
      // User logout failed
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error('Logout error:', errorCode, errorMessage);
    });
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
