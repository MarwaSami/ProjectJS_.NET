var userlogin=sessionStorage.getItem('userlogin');
var userli=document.getElementById('user');
var user=JSON.parse(localStorage.getItem('user'))
if(localStorage.getItem('user')&&userlogin=='true')
{
    userli.innerHTML=`<select id="select"  class="userlist" onchange="logout()">
    <option value="name"> <p>Welcome back ${user.name}</p></option>
    <option value="logout"><a href='product.html' >Logout</a></option>
  </select>`
}
else
{
    userli.innerHTML='<a href="login.html"><i class="fa-solid fa-user"></i></a>';
}
function logout(){
  var selectedOption = document.getElementById("select").value;
  console.log(selectedOption);
  if (selectedOption === "logout") {
  var userlogin=sessionStorage.getItem('userlogin');
  sessionStorage.setItem('userlogin','false')
  userli.innerHTML='<a href="login.html"><i class="fa-solid fa-user"></i></a>';
}
}
