class Usuario{
    constructor(username,email, password)
    {
        this.username = username;
        this.email = email;
        this.password = password;
    
    }

    registrarUsuario()
    {
        if(this.username!=="")
        {
            localStorage.setItem(this.username, JSON.stringify(this));
            return "OK"
        }
        else 
        {
            return "No se pudo crear el usuario"
        }
            
    }
}