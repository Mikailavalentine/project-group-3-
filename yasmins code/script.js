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

//API function

        // This is the area for the API key
        const apiKey = "0043711dcf8a417e89708a1af0cfbaa7";
    
        function getsource(id){
            $.ajax({
                url:`https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`,
                success:function(res){
                    document.getElementById("sourceLink").innerHTML=res.sourceUrl;
                    document.getElementById("sourceLink").href=res.sourceUrl;
                },
                error:function(err){
                    console.log(err);
                }
            });
        }

        function getrecipe(q){
            $.ajax({
                url:`https://api.spoonacular.com/recipes/search?apiKey=${apiKey}&number=1&query=${q}`,
                success:function(res){
                    const output = document.getElementById("output");
                    
    /*The below line changes the displayed elements and creates the box which stores the pulled API recipes */                
    output.innerHTML = `<h1>${res.results[0].title}</h1><br><img src="${res.baseUri}${res.results[0].image}" width="400"/> <br> ready in ${res.results[0].readyInMinutes} minutes`;
                    getsource(res.results[0].id);
                },
                error:function(err){
                    console.log(err);
                }
            });
        }