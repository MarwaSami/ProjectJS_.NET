

var images=['./assets/image/slider3.jpeg','./assets/image/slider4.jpeg','./assets/image/slider5.jpeg'];
var counter=0;
function changeImg()
{

    var imag=document.getElementById('about-image');

     if(counter<images.length-1)
    {
        counter++;

    } else
    {
        counter=0;
    }
 imag.src=images[counter];


} function start()
{
   setInterval(changeImg,3000)
  
}

window.onload= start();

/////////////////////////////////////////////////////////////////////////////////

var Xhr=new XMLHttpRequest();
Xhr.open('GET','http://127.0.0.1:5500/product.json');
Xhr.send();
var products;
Xhr.onreadystatechange=function(){
  if(Xhr.readyState==4 && Xhr.status==200)
  {
   products=JSON.parse(Xhr.responseText).items;
    var card=document.getElementsByClassName('shutter')[0]
    for(var i=0;i<6;i++)
    {
       card.innerHTML+=`<div class="card"><img style="width:100%; height:250px;" src="assets/image/products/${products[i].img}"><h1>${products[i].name}</h1> <p class="price">${products[i].price}</p>
       <p>${products[i].category}</p> <p><button onclick="add(${i})">Add to Cart</button></p></div>`;
    }
  }
}
 function goProducts(){
  location.assign("products.html");

 }
 function goCart(){
  location.assign("cart.html");

 }


var cart = [];

function add(index) {

  if(!localStorage.getItem('cart'))
  {
    cart.push(products[index]);
    localStorage.setItem('cart',JSON.stringify(cart));
  }else{
    cart=JSON.parse(localStorage.getItem('cart'));
    cart.push(products[index]);
    localStorage.setItem('cart',JSON.stringify(cart));
  } 
    displayCart();

}
