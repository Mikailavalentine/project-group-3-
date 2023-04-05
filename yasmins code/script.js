// Login Form
const loginForm = document.getElementById("login-form");
loginForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const rememberMe = document.getElementById("remember-me").checked;
  try {
    const response = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({ email, password, rememberMe }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      // Login successful, redirect to the dashboard
      window.location.href = "/dashboard";
    } else {
      // Login failed, show error message
      const data = await response.json();
      alert(data.message);
    }
  } catch (error) {
    console.error(error);
    alert("An error occurred, please try again later.");
  }
});


// Registration Form
const registerForm = document.getElementById("register-form");
registerForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const email = document.getElementById("register-email").value;
  const password = document.getElementById("register-password").value;
  try {
    const response = await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      // Registration successful, redirect to the dashboard
      window.location.href = "/dashboard";
    } else {
      // Registration failed, show error message
      const data = await response.json();
      alert(data.message);
    }
  } catch (error) {
    console.error(error);
    alert("An error occurred, please try again later.");
  }
});