var codigo ="";
var precio =0;
function addcar(precio, codigo){
   var cod_prod = document.getElementById('codigo_product'); 
   var price_prod = document.getElementById('precio_produt');
   price_prod.innerHTML = precio;
   cod_prod.innerHTML = codigo;
   if (codigo!=="" && precio>0)
   {
      confirm('Producto adicionado')
   }
   else
   {
      alert('Producto no se adiciono')
   } 
}