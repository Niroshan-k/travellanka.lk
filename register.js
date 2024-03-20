// Selecting DOM elements
let x = document.getElementById("loginform");
let y = document.getElementById("register");
let z = document.getElementById("btn");

// Constant for submit button
const submit = document.getElementById("submit-btn");

// Function to switch to registration form
function register() {
    // Move login form to the left to hide it
    x.style.left = "-400px";
    // Move register form to the left to display it
    y.style.left = "-0.01rem";
    // Adjust button position
    z.style.left = "110px";
}

// Function to switch to login form
function login() {
    // Move login form to the original position
    x.style.left = "0px";
    // Move register form to the right to hide it
    y.style.left = "450px";
    // Adjust button position
    z.style.left = "0";
}

// Function to save registration data
function saveData() {
    // Display registration success message
    alert("Registration successful");

    // Retrieve input values
    const new_username = document.getElementById('newusername').value;
    const name = document.getElementById("fullname").value;
    const email = document.getElementById("email").value;
    const new_password = document.getElementById("newpassword").value;

    // Get existing user records from localStorage or initialize an empty array
    let user_records = JSON.parse(localStorage.getItem("users")) || [];

    // Check for duplicate email
    if (user_records.some((v) => {
        return v.email == email;
    })) {
        // Alert if duplicate email found
        alert("Duplicate Data");
    } else {
        // Add new user data to the array
        user_records.push({
            "name": name,
            "username": new_username,
            "email": email,
            "password": new_password
        });
        // Update localStorage with the modified user records
        localStorage.setItem("users", JSON.stringify(user_records));
    }
}

function checkLogin() {
 let email,password;
 email = document.getElementById("useremail").value;
 password = document.getElementById("password").value;

 
 let user_login = JSON.parse(localStorage.getItem("users")) || [];
 if(user_login.some((v) => {
  return v.email == email && v.password == password
 })){
  alert("login successful");
  //collect current session data
  let current_user = user_login.filter((v) => {
   return v.email == email && v.password == password
  })[0]
  //set the value of name and email in local storage for future use
  localStorage.setItem("name",current_user.name);
  localStorage.setItem("email",current_user.email);
  //rederect to logout page page
  window.location.href = "homelogout.html";

  
 }
 else if(email===""){
  alert("need email!");
 }
 else if(password===""){
  alert("password needed!");
 }
 else {
  alert("Login fail!");
 }
}














//console.log(new_username.value,new_password.value,name.value);

 //localStorage.setItem("name",name.value);
 //localStorage.setItem("email",email.value);
 //localStorage.setItem("username",new_username.value);
 //localStorage.setItem("passwprd",new_password.value);

 //parse is use to convert string to object
 //checking the records available in users array
 //if records are available then retrive the records othervise return emty array

  //compare the local storage email with the new registration email for duplicate entry

  //if email is not matched then sstore the records in the array
  //stringyfy convert object on to string