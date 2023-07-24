


var Xhr2=new XMLHttpRequest();
Xhr2.open('GET','http://127.0.0.1:5500/product.json');
Xhr2.send();
var products2;
Xhr2.onreadystatechange=function(){
  if(Xhr2.readyState==4 && Xhr2.status==200)
  {
   products2=JSON.parse(Xhr2.responseText).items;
   console.log(products2);
    // var card=document.getElementsByClassName('card')[0]
  }
}


var cart = [];

function add(index) {
alert('This item is successfully added')
  if(!localStorage.getItem('cart'))
  {
    cart.push(products2[index]);
    localStorage.setItem('cart',JSON.stringify(cart));
  }else{
    cart=JSON.parse(localStorage.getItem('cart'));
    cart.push(products2[index]);
    localStorage.setItem('cart',JSON.stringify(cart));
  } 

}

// function remove(index) {
//     cart=JSON.parse(localStorage.getItem('cart'));

//     cart.splice(index, 1);
//     displayCart();
// }

// function displayCart() { 
  
//       cart=JSON.parse(localStorage.getItem('cart'));
//     var cartProductsElement = document.getElementById('cart-product');
//     if (cart.length == 0) {
//         cartProductsElement.innerHTML = "<p>Your cart is empty.</p>";
//     } else {
//         var cartItemsHTML = ""; // to prevent overriding
//         for (var i = 0; i < cart.length; i++) {
//             cartItemsHTML += `<div class="cart-item">
//                 <div class="row-omg">
//                     <img class="rowimg" src="assets/image/products/${cart[i].img}">
//                 </div>
//                 <p>${cart[i].name}</p>
//                 <h2>${cart[i].price}</h2>
//                 <i class="fa-solid fa-trash" onclick="remove(${i})"></i> 
//             </div>`; //takes the index of the product
//         }
//         cartProductsElement.innerHTML = cartItemsHTML;
//     }
// }