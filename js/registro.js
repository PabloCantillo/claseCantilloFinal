function hacerRegistro() 
{

    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const documento = document.getElementById("cedula").value;
    const password = document.getElementById("password").value;

    const miUsuario = new Usuario("","","","");
    miUsuario.registrar(nombre,apellido,documento,password);

    alert("Su Registro fue un exito.");
    
    window.location.href="registro.html";
    
}


