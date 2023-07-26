var Xhr=new XMLHttpRequest();
Xhr.open('GET','http://127.0.0.1:5500/product.json');
Xhr.send();
Xhr.onreadystatechange=function(){
  if(Xhr.readyState==4 && Xhr.status==200)
  {
    var products=JSON.parse(Xhr.responseText).items;
    var DetailCont=document.getElementsByClassName('DetailCont')[0]
    var i=JSON.parse(localStorage.getItem('detail'))
    DetailCont.innerHTML+=`<div class="Detail"><img src="assets/image/products/${products[i].img}"><div class="text"><h1>${products[i].name}</h1><p>${products[i].category}</p><p>${products[i].description}</p><h3>${products[i].price}</h3>
    <div class="cardbtn"><input type="number"  class="quantity" value="1" size="4" min="1" max="" step="1" placeholder="" autocomplete="off">
    <button onclick="add(${i})">
    <i class="fa-solid fa-cart-shopping fa-2xl" style="color: #6F6765;"></i><button></div></div></div>`;
  }
}

