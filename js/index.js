// 0- Bienvenida a la aplicación
let saludo = alert("Bienvenido a Óptica Cantillo.")


let nombre = prompt("Indiquenos su nombre.")
let apellido = prompt ("Indiquenos su apellido.")

if (nombre !=="" &&  apellido !== "") {
    alert("Bienvenido " +nombre+ " " +apellido)
}
else if (nombre !=="" &&  apellido == "") {
    alert ("Bienvenido " +nombre+ " Falta tu apellido")
    let apellidoDos =prompt ("Indica tu apellido");
    alert ("Bienvenido " +nombre + " " + apellidoDos);
}
else if (nombre =="" &&  apellido !== "") {
    alert ("Bienvenido.  Falta tu nombre")
    let nombreDos =prompt ("Indica tu nombre");
    alert ("Bienvenido " +nombreDos + " " + apellido);
}
else {
    alert("Por favor indica tu nombre y apellido")
    let nombreTres =prompt ("Indica tu nombre");
    let apellidoTres =prompt ("Indica tu apellido");
    alert ("Bienvenido " +nombreTres+ " " +apellidoTres)
}

let edad_del_cliente = parseInt(prompt("Ingrese su edad"))
for (let edad = 0; edad<edad_del_cliente; edad++){
    console.log (edad + "Muchas gracias.");
}   alert ("Muchas gracias por su tiempo.")


//1-Lista de productos
// Lista de Anteojos
class Anteojos {
  constructor(nombre, material, tipodeanteojos, tipodearmazon, precio) 
  {
    this.nombre = nombre;
    this.material = material;
    this.tipodeanteojos = tipodeanteojos;
    this.tipodearmazon = tipodearmazon;
    this.precio = precio;

  }

  getIva(){
    return this.precio*0.21;
  }
}


const anteojosDeSol= new Anteojos(
  "Ray-Ban Wayfarer",
  "Acetato",
  "Sol",
  "Cuadrado Wayfarer",
  15000
)

const anteojosPolarizados= new Anteojos(
  "Paula Cahen D'Anvers Verona 10",
  "Sol",
  "Cuadrado",
  "Acetato, Metal",
  11500
)

const anteojosEspejados= new Anteojos(
  "Vulk Wildy Denim",
  "De sol, espejado",
  "Cuadrado",
  "Acetato",
  8000
)

const anteojosDeReceta= new Anteojos(
  "Ray-Ban Aviator",
  "De receta",
  "Cuadrado/Redondo",
  "Metal",
  9000
)

let cad = "Que Anteojos desea seleccionar:\n";
cad+= "1. "+ anteojosDeSol.nombre+"\n"
cad+= "2. "+ anteojosPolarizados.nombre+"\n"
cad+= "3. "+ anteojosEspejados.nombre+"\n"
cad+= "4. "+ anteojosDeReceta.nombre+"\n"

let opcion = 0;
while(opcion!==1 && opcion!==2 && opcion!==3 && opcion!==4)
{
  opcion = parseInt(prompt(cad));
  if(opcion === 1)
  {
    console.log("Su Anteojos es\n");
    console.log(anteojosDeSol.nombre+"\n");
    console.log(anteojosDeSol.tipodeanteojos+"\n");
    console.log(anteojosDeSol.tipodearmazon+"\n");
    console.log(anteojosDeSol.material+"\n");
    console.log(anteojosDeSol.precio+"\n");
    console.log(anteojosDeSol.precio+anteojosDeSol.getIva());
    orden.push(anteojosDeSol)
  }
  else if(opcion === 2)
  {
    console.log("Su Anteojos es\n");
    console.log(anteojosPolarizados.nombre+"\n");
    console.log(anteojosPolarizados.tipodeanteojos+"\n");
    console.log(anteojosPolarizados.tipodearmazon+"\n");
    console.log(anteojosPolarizados.material+"\n");
    console.log(anteojosPolarizados.precio+"\n");
    console.log(anteojosPolarizados.precio+anteojosPolarizados.getIva());
    orden.push(anteojosPolarizados)
    
  }
  else if(opcion === 3)
  {
    console.log("Su Anteojos es\n");
    console.log(anteojosEspejados.nombre+"\n");
    console.log(anteojosEspejados.tipodeanteojos+"\n");
    console.log(anteojosEspejados.tipodearmazon+"\n");
    console.log(anteojosEspejados.material+"\n");
    console.log(anteojosEspejados.precio+"\n");
    console.log(anteojosEspejados.precio+anteojosEspejados.getIva());
    orden.push(anteojosEspejados)
  }
  else if(opcion === 4)
  {
    console.log("Su Anteojos es\n");
    console.log(anteojosDeReceta.nombre+"\n");
    console.log(anteojosDeReceta.tipodeanteojos+"\n");
    console.log(anteojosDeReceta.tipodearmazon+"\n");
    console.log(anteojosDeReceta.material+"\n");
    console.log(anteojosDeReceta.precio+"\n");
    console.log(anteojosDeReceta.precio+anteojosDeReceta.getIva());
    orden.push(anteojosDeReceta)
  }

  else{
    console.log("Elija nuevamente")
  }
}

//4-Elegir como desear abonar la compra.
class Pago { 
  constructor (nombre, forma){
    this.nombre = nombre;
    this.forma = forma;
  }
}

const tarjetaDeCredito= new Pago(
  "Tarjeta de credito",
  "Bancaria",
)

const tarjetaDeDebito= new Pago(
  "Tarjeta de debito",
  "Bancaria",
)

const transferenciaBancaria= new Pago(
  "Transferencia Bancaria",
  "Bancaria",
)

const pagoOnline= new Pago(
  "Mercado Pago",
  "Online",
)

console.log("Se completó su compra. Muchas gracias por confiar en nosotros.")