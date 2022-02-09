function definirEventos(){

    // Esta crea la función para los eventos del botón de Registro
    
    const crearCuentaBTN = document.getElementById("crearCuentaBTN")

    //Creo el evento onClick 
    crearCuentaBTN.onclick = (e)=> {
        e.preventDefault();
        const nuevoUsuario = new Usuario(

            document.getElementById("uname").value,
            document.getElementById("mail").value,
            document.getElementById("psw").value

        )
        const respuesta = nuevoUsuario.registrarUsuario();
        if(respuesta==="OK")
        {
            alert("Se Registró correctamente")
        }
        else 
        {
            alert("Se produjó un error");
        }
    }

    //Creo el evento onmouseover
    crearCuentaBTN.onmouseover = () =>
    {
        
        crearCuentaBTN.style.backgroundColor="red";


    }

    //crear el evento onmouseout
    crearCuentaBTN.onmouseout = () =>
    {
        
        crearCuentaBTN.style.backgroundColor="#4286f4";


    }

    const acctionListaBTN = document.getElementById("accionLista");

    acctionListaBTN.onmouseover = () =>
    {
        
        const lista = document.createElement("ul");
        for(let i=0;i<localStorage.length;i++)
        {
                const llave = localStorage.key(i);
                let item = document.createElement("li");
                let usuario = JSON.parse(localStorage.getItem(llave));
                let toShow = usuario.username+" "+usuario.email;
                item.innerHTML= toShow;
                lista.appendChild(item)
                
        }
        document.body.appendChild(lista);

       
        
    }
}