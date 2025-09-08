// 🌗 Part 1: Light/Dark Mode Toggle
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// 🔢 Part 2: Counter Game
let count = 0;
const counter = document.getElementById('counter');
const increaseBtn = document.getElementById('increaseBtn');
const resetBtn = document.getElementById('resetBtn');

increaseBtn.addEventListener('click', () => {
  count++;
  counter.textContent = count;
});

resetBtn.addEventListener('click', () => {
  count = 0;
  counter.textContent = count;
});

// 📋 Part 3: Form Validation
const form = document.getElementById('signupForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const successMessage = document.getElementById('successMessage');

form.addEventListener('submit', (e) => {
  e.preventDefault(); // prevent form from submitting
  let valid = true;

  // Clear old errors
  document.querySelectorAll('.error').forEach(el => el.textContent = "");

  // Name validation
  if (nameInput.value.trim().length < 3) {
    document.getElementById('nameError').textContent = "Name must be at least 3 characters";
    valid = false;
  }

  // Email validation (simple regex)
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailInput.value.match(emailPattern)) {
    document.getElementById('emailError').textContent = "Enter a valid email address";
    valid = false;
  }

  // Password validation (min 6 chars)
  if (passwordInput.value.length < 6) {
    document.getElementById('passwordError').textContent = "Password must be at least 6 characters";
    valid = false;
  }

  // Success message
  if (valid) {
    successMessage.textContent = "✅ Form submitted successfully!";
    form.reset();
  }
});
