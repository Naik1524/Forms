// Theme Toggle
const switchToggle = document.getElementById('themeSwitch');
const htmlElement = document.documentElement;

function setTheme(mode) {
  htmlElement.setAttribute('data-theme', mode);
  localStorage.setItem('theme', mode);
}

function loadTheme() {
  const storedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (storedTheme) {
    setTheme(storedTheme);
    switchToggle.checked = storedTheme === 'dark';
  } else {
    const defaultTheme = prefersDark ? 'dark' : 'light';
    setTheme(defaultTheme);
    switchToggle.checked = prefersDark;
  }
}

switchToggle.addEventListener('change', () => {
  const newTheme = switchToggle.checked ? 'dark' : 'light';
  setTheme(newTheme);
});

window.onload = loadTheme;

// Form Validation (original form only)
function validateForm() {
  let valid = true;
  document.getElementById("nameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("messageError").textContent = "";

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (name === "" || !/^[A-Za-z\s]+$/.test(name)) {
    document.getElementById("nameError").textContent = "Please enter a valid name.";
    valid = false;
  }

  if (email === "" || !emailPattern.test(email)) {
    document.getElementById("emailError").textContent = "Please enter a valid email.";
    valid = false;
  }

  if (message.length < 10) {
    document.getElementById("messageError").textContent = "Message should be at least 10 characters.";
    valid = false;
  }

  return valid;
}