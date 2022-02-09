

function printNodes()
{
    console.log("VOY A IMPRIMIR LOS NODOS DEL DOCUMENTO:")
    const btn = document.getElementById("boton")
console.log(btn);

const headers = document.getElementsByClassName("header")
console.log(headers);

console.log("PRIMER ELEMENTO DE HEADERS", headers[0])

console.log("TODOS LOS ELEMENTOS DE HEADERS:");

for(header of headers)
{
    console.log(header);
}

const paragrahps = document.getElementsByTagName("p")
console.log(paragrahps);
console.log("SEGUNDO ELEMENTO DE PARAGRAPHS", paragrahps[1])

console.log("TODOS LOS ELEMENTOS DE PARAGRAPHS, CON WHILE:");

let i=0;
while(i<paragrahps.length)
{
    console.log(paragrahps[i]);
    i++;
}

console.log("TODOS LOS ELEMENTOS DE PARAGRAPHS, CON FOR:");
for(let j=0; j<paragrahps.length; j++)
{
    console.log(paragrahps[j]);
}
}


function printUsuariosRegistrados()
{

    for(let i=0;i<localStorage.length;i++)
    {
        const llave = localStorage.key(i);
        const dato = JSON.parse(localStorage.getItem(llave));
        
        const plantillaUsuario = `<p class="usuario">El DNI de: 
                                ${dato.nombre+" "+dato.apellido} es 
                                <i>${dato.documento}</i></p>`
                                  
                                  

        const nodoParaLista = document.getElementById("listaUsuarios")
        nodoParaLista.innerHTML+=plantillaUsuario;


        
    }


}

