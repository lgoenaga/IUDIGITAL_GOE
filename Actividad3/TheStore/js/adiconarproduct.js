var codigo ="";
var precio =0;
let addproductos = [
   {
     'product_name' : 'eh0011la',
     'product_price' : 1750000,
     'product_inventory' : 1
   },
   {
     'product_name' : 'eh0022la',
     'product_price' : 2150000,
     'product_inventory' : 1
   },
   {
     'product_name' : 'dk1506la',
     'product_price' : 2750000,
     'product_inventory' : 1
   }
 ]
 
function listar(){
  for (var i = 0; i < addproductos.length; i++) {
    console.log(addproductos[i]);
  }
}

function addcar(precio, codigo){
 addproductos.push({product_name : codigo, product_price: precio, product_inventory:1});
}