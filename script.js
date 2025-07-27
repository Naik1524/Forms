// Form Validation

function validateForm() {
      let valid = true;

      // Clear old errors
      document.getElementById("nameError").textContent = "";
      document.getElementById("emailError").textContent = "";
      document.getElementById("messageError").textContent = "";

      // Name validation
      const name = document.getElementById("name").value.trim();
      if (name === "" || !/^[A-Za-z\s]+$/.test(name)) {
        document.getElementById("nameError").textContent = "Please enter a valid name.";
        valid = false;
      }

      // Email validation
      const email = document.getElementById("email").value.trim();
      const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      if (email === "" || !emailPattern.test(email)) {
        document.getElementById("emailError").textContent = "Please enter a valid email.";
        valid = false;
      }

      // Message validation
      const message = document.getElementById("message").value.trim();
      if (message.length < 10) {
        document.getElementById("messageError").textContent = "Message should be at least 10 characters.";
        valid = false;
      }

      return valid;
}

// Theme toggle logic

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