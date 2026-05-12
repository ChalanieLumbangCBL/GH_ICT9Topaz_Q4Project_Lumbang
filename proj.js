// LOGIN FUNCTION
function login(){
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if(username == "Chalanie Lumbang" && password == "1234"){
        alert("Login Successful!");
        window.location = "dashboard.html";
    }
    else{
        alert("Invalid Username or Password");
    }
}

for(let i = 1; i <= 3; i++){
    console.log("Student Portal Loaded " + i);
}