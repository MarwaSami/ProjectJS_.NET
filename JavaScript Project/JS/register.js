
var userPhone = document.getElementById('phone');
var userEmail = document.getElementById('email');
var userPassword = document.getElementById('password');
var userName = document.getElementById('name');
var terms = document.getElementById('terms');
var errorname = document.getElementById('errorname');
var errorphone = document.getElementById('errorphone');
var errorpass = document.getElementById('errorpass');
var erroremail = document.getElementById('erroremail');
var errorterm = document.getElementById('errorterm');

function SignUp() {
    var error = false;

    var nameReg = /^[a-zA-Z]{5,}$/
    // var emailReg= /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}\.com$/
    var emailReg = /^[a-zA-Z0-9]+@[a-zA-Z0-9]{2,}\.com$/
    // var passReg = /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]{5,}$/
    var passReg = /^.*[a-zA-Z0-9]{5,}$/
    // var phoneReg=/^\+?\d{1,3}[- ]?\d{3,4}[- ]?\d{4}$/
    var phoneReg = /^01(0|1|2|5)[0-9]{8}$/
    Resetstyle();
    if (!nameReg.test(userName.value)) {
        errorname.style = "display:block; color:red;";
        userName.style.border = " red 2px solid ";
        error = true;
    }
    if (!phoneReg.test(userPhone.value)) {

        errorphone.style = "display:block; color:red;";
        userPhone.style.border = " red 2px solid ";
        error = true;
    }
    if (!passReg.test(userPassword.value)) {

        errorpass.style = "display:block; color:red;";
        userPassword.style.border = " red 2px solid ";
        error = true;
    }
    if (!emailReg.test(userEmail.value)) {

        erroremail.style = "display:block; color:red;";
        userEmail.style.border = " red 2px solid ";
        error = true;
    }
    if (!terms.checked) {
        errorterm.style = "display:block; color:red;";
    }
    else if (!error) {
        var user = {
            name: userName.value, email: userEmail.value,
            password: userPassword.value, phone: userPhone.value
        };
        localStorage.setItem('user', JSON.stringify(user));
        alert("You have successfully registered ");
        location.assign('login.html')

    }

}
function Resetstyle() {
    userEmail.style.border = "black 2px solid";
    userPassword.style.border = "black 2px solid";
    userPhone.style.border = "black 2px solid";
    userName.style.border = "black 2px solid";
    erroremail.style = "display:none;";
    errorphone.style = "display:none;";
    errorname.style = "display:none;";
    errorpass.style = "display:none;";
    errorterm.style="display:none;";
}