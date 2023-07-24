var Xhr=new XMLHttpRequest();
Xhr.open('GET','http://127.0.0.1:5500/product.json');
Xhr.send();
var products;
Xhr.onreadystatechange=function(){
  if(Xhr.readyState==4 && Xhr.status==200)
  {
   products=JSON.parse(Xhr.responseText).items;
    var card=document.getElementsByClassName('break-cards')[0]
    for(var i=0;i<products.length;i++)
    {
       card.innerHTML+=`<div class="card"><img style="width:100%" src="assets/image/products/${products[i].img}"><h1>${products[i].name}</h1> <p class="price">${products[i].price}</p>
       <p>${products[i].category}</p> <p><button onclick="add(${i})">Add to Cart</button></p></div>`;
    }
  }
}

var cart = [];

function add(index) {
  if(!localStorage.getItem('cart'))
  {
    console.log('add');
    cart.push(products[index]);
    localStorage.setItem('cart',JSON.stringify(cart));
  }else{
    cart=JSON.parse(localStorage.getItem('cart'));
    cart.push(products[index]);
    localStorage.setItem('cart',JSON.stringify(cart));
  } 
    displayCart();

}

function remove(index) {
  // console.log(index);
    cart=JSON.parse(localStorage.getItem('cart'));
    cart.splice(index, 1);
   localStorage.setItem('cart',JSON.stringify(cart));
    displayCart();
}

function displayCart() { 
  var Totalprice=0;
  if(localStorage.getItem('cart'))
  {
   cart=JSON.parse(localStorage.getItem('cart'));
  }
    var cartProductsElement = document.getElementById('cart-product');
    // console.log(cart);
    if (cart.length == 0) {
        cartProductsElement.innerHTML = "<p>Your cart is empty.</p>";
    } else {
        var cartItemsHTML = ""; // to prevent overriding
        for (var i = 0; i < cart.length; i++) {
            cartItemsHTML += `<div class="cart-item">
                <div class="row-omg">
                    <img class="rowimg" src="assets/image/products/${cart[i].img}">
                </div>
                <p>${cart[i].name}</p>
                <h2>${cart[i].price}</h2>
                <i class="fa-solid fa-trash remo" onclick="remove(${i})"></i> 
            </div>`; //takes the index of the product
            console.log(cart[i].price.split('$')[1]);
              Totalprice+=parseInt(cart[i].price.split('$')[1])   
          }
        cartProductsElement.innerHTML = cartItemsHTML;
        document.getElementById('total').innerHTML='$'+Totalprice.toFixed(2);
    }
}

displayCart();