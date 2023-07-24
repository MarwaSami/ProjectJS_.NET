var XhrSearch=new XMLHttpRequest();
XhrSearch.open('GET','http://127.0.0.1:5500/product.json');
XhrSearch.send();
var products;
XhrSearch.onreadystatechange=function(){
    if(XhrSearch.readyState==4 && XhrSearch.status==200)
    {
       products=JSON.parse(XhrSearch.responseText).items;
        //  console.log(products);
    }
  }


function search()
{ 

    // console.log(products);
    var searchBtn=document.getElementById('search-bar').value;  
    var displayProduct=document.getElementsByClassName('ProductsCont')[0]; 
    displayProduct.innerHTML="";
     for(var count=0;count<products.length;count++)
     {
        if(products[count].name.toLowerCase().indexOf(searchBtn.toLowerCase())>-1)
        {
            displayProduct.innerHTML+=`<div class="Product">
            <img src="assets/image/products/${products[count].img}">
            <p>${products[count].name}</p><small>${products[count].category}</small>
            <button onclick="details(${count})">View Details <i class="fa-solid fa-circle-info" style="color: #4271c2;"></i><button></div>`;
        }
     }
}






// function search() {
//     var searchBtn = document.getElementById('search-bar').value.toLowerCase(); 
//     var displayProduct = document.getElementsByClassName('ProductsCont')[0];
//     displayProduct.innerHTML = ""; 
//     for (var count = 0; count < products.length; count++) { 
//         var productName = products[count].name.toLowerCase(); 
//         if (productName.includes(searchBtn)) {
//             var productHTML = `<div class="Product">
//                 <img src="assets/image/products/${products[count].img}">
//                 <p>${products[count].name}</p><small>${products[count].category}</small>
//                 <button onclick="details(${count})">View Details <i class="fa-solid fa-circle-info" style="color: #4271c2;">
//                 </i></button></div>`;
//             displayProduct.innerHTML += productHTML;
//         }
//     }
// }