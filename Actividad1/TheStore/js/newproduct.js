var product= "";
var price= "";
var inventory= "";
var origen= "";
var exito = false;

function sub()
{
  product = document.forms["form_prod"]["product_name"].value;             
  if (product !=="")
  {
    price = document.forms["form_prod"]["product_price"].value;
    exito=true;
  }
  else
  {
    alert("Producto no puede estar vacio");
    return;
  }                 
  if (price !=="" && exito===true)
  {               
      inventory = document.forms["form_prod"]["product_inventory"].value;
      origen = document.forms["form_prod"]["country"].value;
      if (inventory !=="" && exito ===true)
      {
        document.write("El registro ingresado es <br/><br/>"+product+"<br/>"+price+"<br/>"+inventory+"<br>"+origen+"<br/><br/>Datos del Producto");
        confirm("Proceso Exitoso");
                    
      }
      else
      {
        exito = false;
        alert("Inventario no puede estar vacio");
        return;
      }                          
  }
  else
  {
    exito=false;
    alert("Precio no puede estar vacio");
    return;
  }
};