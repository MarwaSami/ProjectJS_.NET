var Xhr=new XMLHttpRequest();
Xhr.open('GET','http://127.0.0.1:5500/product.json');
Xhr.send();
var products;
Xhr.onreadystatechange=function(){
  if(Xhr.readyState==4 && Xhr.status==200)
  {
     products=JSON.parse(Xhr.responseText).items;
    var ProductsCont=document.getElementsByClassName('ProductsCont')[0]
    // console.log(products);
    for(var i=0;i<products.length;i++)
    {
        ProductsCont.innerHTML+=`<div class="Product"><img src="assets/image/products/${products[i].img}"><p>${products[i].name}</p><small>${products[i].category}</small><button onclick="details(${i})">View Details <i class="fa-solid fa-circle-info" style="color: #4271c2;"></i><button></div>`;
    }
  }
}
function details(index){
    localStorage.setItem('detail',JSON.stringify(index));
    location.assign('details.html');
}
