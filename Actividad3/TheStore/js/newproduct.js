var product= "";
var price= "";
var inventory= "";
var validar = true; 

function sub()
{
  product = document.forms["form_prod"]["product_name"].value;
  price = document.forms["form_prod"]["product_price"].value;
  inventory = document.forms["form_prod"]["product_inventory"].value;

  if (product==="")
  {
    document.forms["form_prod"]["product_requerido"].style.display = "block";
    validar=false;
  }
  if (price==="")
  {
    document.forms["form_prod"]["price_requerido"].style.display = "block";
    validar=false;
  }
  if (inventory==="")
  {
    document.forms["form_prod"]["inventory_requerido"].style.display = "block";
    validar=false;
  }
  if( product!=="")
  {
    document.forms["form_prod"]["product_requerido"].style.display = "none";
    validar=true;
  }
  if(price!=="")
  {
    document.forms["form_prod"]["price_requerido"].style.display = "none";
    validar=true;
  }  
  if(inventory!=="")
  {
    document.forms["form_prod"]["inventory_requerido"].style.display = "none";
    validar=true;
  }
  if (price<1)
  {
    alert("El precio debe ser mayor o igual a uno");
    document.forms["form_prod"]["product_price"].value="";
    document.forms["form_prod"]["price_requerido"].style.display = "block";
    validar=false;
  }
  if(inventory<1)
  {
    alert("La cantidad debe ser mayor o igual a uno");
    document.forms["form_prod"]["product_inventory"].value="";
    document.forms["form_prod"]["inventory_requerido"].style.display = "block";
    validar=false;
    document.forms["form_prod"]["Create_Product"].reset();
  }   
  if( product!=="" && price!=="" && inventory!=="" && validar===true)
  {
    confirm("Producto registrado");
    document.location.reload(true);
  } 

};
