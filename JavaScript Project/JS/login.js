var userEmail = document.getElementById('email');
var userPassword = document.getElementById('password');
var errorpass = document.getElementById('errorpass');
var erroremail = document.getElementById('erroremail');
var erroremailpass=document.getElementById('erroremailpass');
function Signin() {
    var error = false;  
    var emailReg = /^[a-zA-Z0-9]+@[a-zA-Z0-9]{2,}\.com$/
    Resetstyle();
    if (!(localStorage.getItem('user'))) {
        alert('Invalid login, you need to Register First');
        location.assign('register.html');
    }
    else {
        var user = JSON.parse(localStorage.getItem('user'));
        if (user.email == userEmail.value && user.password == userPassword.value) {
            alert("You have successfully logged in");
           sessionStorage.setItem('userlogin','true');
           location.assign('landing.html');

        }
        else if(!emailReg.test(userEmail.value)){
            erroremail.style = "display:block; color:red;";
            userEmail.style.border = " red 2px solid ";
        }
        else if(user.email == userEmail.value)
        {
            errorpass.style = "display:block; color:red;";
           userPassword.style.border = " red 2px solid ";
        }
        else{
           erroremailpass.style = "display:block; color:red;";
           userPassword.style.border = " red 2px solid ";
           userEmail.style.border = " red 2px solid ";
        }
       
    }

}
function Resetstyle(){
    errorpass.style="display:none";
    erroremail.style="display:none";
    erroremailpass.style = "display:none";
    userEmail.style.border = "black 2px solid";
    userPassword.style.border = "black 2px solid";
}