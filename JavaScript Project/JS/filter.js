var Xhrfilter=new XMLHttpRequest();
Xhrfilter.open('GET','http://127.0.0.1:5500/product.json');
Xhrfilter.send();
var products;
var ProductsCont=document.getElementsByClassName('ProductsCont')[0];
Xhrfilter.onreadystatechange=function(){
    if(Xhrfilter.readyState==4 && Xhrfilter.status==200)
    {
       products=JSON.parse(Xhrfilter.responseText).items;
         console.log(products);
    }
  }
 var currentcheck=[];
 var isallchecked;
 var Firstime=true;
function filter(cate)
{
isallchecked=currentcheck.indexOf('all')
if(cate.checked)
 {
  currentcheck.push(cate.value);
  console.log(currentcheck);
  if(cate.value=='all' ||isallchecked>-1)
  {
    all();
  }
  else{
    filterByCategory(cate.value)
  }
 }
else
{
if(cate.value=='all')
  {
    currentcheck.splice(isallchecked,1);
    isallchecked=-1;
  }
  else
  {
   var index=currentcheck.indexOf(cate.value);
   currentcheck.splice(index,1); 
  }
  unchecked();
  console.log(currentcheck);
}
}
function all(){
    ProductsCont.innerHTML="";
    for(var i=0;i<products.length;i++)
    {
        ProductsCont.innerHTML+=`<div class="Product"><img src="assets/image/products/${products[i].img}"><p>${products[i].name}</p><small>${products[i].category}</small><button onclick="details(${i})">View Details <i class="fa-solid fa-circle-info" style="color: #4271c2;"></i><button></div>`;
    }
}
function filterByCategory(category){
  if(isallchecked>-1)
   all()
  else if(Firstime)
  {
    ProductsCont.innerHTML="";
    Firstime=false;
  }
  for(var i=0;i<products.length;i++)
  {    
      if(products[i].category==category)
      ProductsCont.innerHTML+=`<div class="Product"><img src="assets/image/products/${products[i].img}"><p>${products[i].name}</p><small>${products[i].category}</small><button onclick="details(${i})">View Details <i class="fa-solid fa-circle-info" style="color: #4271c2;"></i><button></div>`;
  }
}
function unchecked(){
  console.log(isallchecked);
  if(currentcheck.length==0)
  {
    ProductsCont.innerHTML="";
  }
  else if(isallchecked>-1)
  {
    all();
  }
  else
  {   
  ProductsCont.innerHTML="";
  for(var j=0;j<currentcheck.length;j++)
  {
  for(var i=0;i<products.length;i++)
  {    
      if((products[i].category==currentcheck[j]))
      ProductsCont.innerHTML+=`<div class="Product"><img src="assets/image/products/${products[i].img}"><p>${products[i].name}</p><small>${products[i].category}</small><button onclick="details(${i})">View Details <i class="fa-solid fa-circle-info" style="color: #4271c2;"></i><button></div>`;
  }
  }
  }
  

}