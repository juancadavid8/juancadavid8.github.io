function login(){
    var user, pass;

    user = document.getElementById("usuario").value;
    pass = document.getElementById("contraseña").value;

    if(user == "admin" && pass == "1234"){

        window.location = "registroPrendas.html"
    }

    else {

        alert("El usuario o la contraseña son incorrectos, intentelo nuevamente")   
        window.location = "index.html"     
    }
}