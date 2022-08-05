function mastraDatos(){
    let nombreUser = document.querySelector(".nombre");
    nombreUser = nombre.value;

    let apellidoUser = document.querySelector(".apellido");
    apellidoUser = apellido.value;

    let emailUser = document.querySelector(".email");
    emailUser = email.value;

    let consultaUser = document.querySelector(".consulta");
    consultaUser = nombre.value;

    console.log(nombreUser+" "+apellidoUser+" "+emailUser+" ");
    console.log(consultaUser);
}

let btn_validar = document.getElementById("guardar");
    btn_validar.addEventListener("click", validarDatos);