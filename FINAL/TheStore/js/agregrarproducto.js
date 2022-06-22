

function iniciar(){
    objectProducto = [];
    function Producto(codigo, precio, cantidad){
        this.codigo = codigo;
        this.precio = precio;
        this.cantidad = cantidad;
    }

    nuevoProducto = new Producto('eh0011la',1750000,1);
    objectProducto.push(nuevoProducto);
  
    nuevoProducto = new Producto('eh0022la',2150000,1);
    objectProducto.push(nuevoProducto);
   
    nuevoProducto = new Producto('dk1506la',2750000,1);
    objectProducto.push(nuevoProducto);
};


function capturarprodform(){
    function Producto(codigo, precio, cantidad){
        this.codigo = codigo;
        this.precio = precio;
        this.cantidad = cantidad;
    }
   
    var codigoform = document.getElementById('product_name').value;
    var precioform = document.getElementById('product_price').value;
    var cantidadform = document.getElementById('product_inventory').value;

    nuevoProducto = new Producto(codigoform,precioform,cantidadform);
    addobjproductform(); 
};

function capturarprodcar(codigocar,preciocar,cantidadcar){
    function Producto(codigo, precio, cantidad){
        this.codigo = codigo;
        this.precio = precio;
        this.cantidad = cantidad;
    }
    nuevoProducto = new Producto(codigocar,preciocar,cantidadcar);
    addobjproductcar(); 
};

function addobjproductcar(){  
        console.clear();
        objectProducto.push(nuevoProducto);
        console.log(objectProducto);
        document.getElementById('tabla').innerHTML += '<tbody><tr><td>'+nuevoProducto.codigo+'</td><td>'+nuevoProducto.precio+'</td><td>'+nuevoProducto.cantidad+'</td><td>'+nuevoProducto.cantidad*nuevoProducto.precio+'</td></tr></tbody>';
        confirm("Producto registrado");
};

function addobjproductform(){
    valido = validar();
    console.clear();
    console.log(valido);
    if (valido===true)
    {
        objectProducto.push(nuevoProducto);
        console.log(objectProducto);
        document.getElementById('tabla').innerHTML += '<tbody><tr><td>'+nuevoProducto.codigo+'</td><td>'+nuevoProducto.precio+'</td><td>'+nuevoProducto.cantidad+'</td><td>'+nuevoProducto.cantidad*nuevoProducto.precio+'</td></tr></tbody>';
    }
    else
    {
        alert('Documento no seregistro falta campos requerios');
    }
};

function validar()
{
var product= "";
var price= 0;
var inventory= 1;
valido = false;


  product = document.forms["form_prod"]["product_name"].value;
  price = document.forms["form_prod"]["product_price"].value;
  inventory = document.forms["form_prod"]["product_inventory"].value;

  if (product==="")
    document.forms["form_prod"]["product_requerido"].style.display = "block";
  if (price==="")
    document.forms["form_prod"]["price_requerido"].style.display = "block";
  if (inventory==="")
    document.forms["form_prod"]["inventory_requerido"].style.display = "block";
  if( product!=="")
    document.forms["form_prod"]["product_requerido"].style.display = "none";
  if(price!=="")
    document.forms["form_prod"]["price_requerido"].style.display = "none";
  if(inventory!=="")
    document.forms["form_prod"]["inventory_requerido"].style.display = "none";
  
  if (price<0)
  {
    alert("El precio no puede ser inferior a cero");
    document.forms["form_prod"]["product_price"].value=0;
    valido = false;
  }
  if(inventory<1)
  {
    alert("La cantidad debe ser mayor o igual a uno");
    document.forms["form_prod"]["product_inventory"].value = 1;
    valido = false;
  }   
  if( product!=="" && price!=="" && inventory!=="")
  {
    confirm("Producto registrado");
    valido = true;
  } 
  return valido;
};


