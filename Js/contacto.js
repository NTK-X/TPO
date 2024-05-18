
const formulario = document.getElementById("formularioContacto");
const nombre = document.querySelector("[name=nombre]");
const apellido = document.querySelector("[name=apellido]");
const dni = document.getElementById("dni");
const eliminarArchivoBtn = document.getElementById("eliminarArchivo");
const email = document.querySelector("[name=email]");
const celular = document.querySelector("[name=celular]");
const carrera = document.querySelector("[name=carrera]");
const mensaje = document.querySelector("[name=mensaje]");


const carreras = ["Programación", "Relaciones internacionales", "Comercio exterior", 
"Psicología", "Derecho", "Medicina", "Economía", "Arquitectura"];

const errores = ["Error, este campo no puede estar vacio", "Error, el celular debe tener entre 8 y 11 caracteres",
"Por favor ingrese un email valido", "Opción incorrecta"];

const validarFocus = (e) => {
    const campo = e.target;
    if(errores.includes(campo.value) || carreras.includes(campo.value)){
        campo.value = "";
        campo.classList.remove("invalido");
    }
    else{
        campo.classList.remove("invalido");
    }
}

const validarPerdidaFocus = (e) => {
    const campo = e.target;

    if((campo.value.trim().length < 1) || (errores.includes(campo.value))){
        campo.classList.add("invalido");
        campo.value = "Error, este campo no puede estar vacio"
    }
}

const validarEmail = (e) => {
    const campo = e.target;
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if(!regexEmail.test(campo.value)||campo.value===""){
        campo.classList.add("invalido");
        campo.value="Por favor ingrese un email valido";

    }else{
        campo.classList.remove("invalido");
    }
}

const validarCelular = (e) => {

    const campo = e.target;
    const regexTelefono = /^\d{8,11}$/;

    if(!regexTelefono.test(campo.value)){
        campo.value = "Error, el celular debe tener entre 8 y 11 caracteres"
        campo.classList.add("invalido");
    }else{
        campo.classList.remove("invalido");
    }
}

const validarCarrera = (e) =>{

    switch (e.target.value){

        case "Programación":
            e.target.classList.remove("invalido");
            break;
        case "Relaciones internacionales":
            e.target.classList.remove("invalido");
            break;
        case "Comercio exterior":
            e.target.classList.remove("invalido");
            break;
        case "Psicología":
            e.target.classList.remove("invalido");
            break
        case "Derecho":
            e.target.classList.remove("invalido");
            break;
        case "Medicina":
            e.target.classList.remove("invalido");
            break;
        case "Economía":
            e.target.classList.remove("invalido");
            break;
        case "Arquitectura":
            e.target.classList.remove("invalido");
            break;
        default:
            e.target.value = "Opción incorrecta";
            e.target.classList.add("invalido");
    }
}

const crearBotonEliminar = (e) =>{
    const campo = e.target;

    if (campo.files.length > 0) {
        eliminarArchivoBtn.style.display = "inline-block"; 
    }
}


const eliminarArchivo = (e) =>{

    dni.value = null;
    eliminarArchivoBtn.style.display = "none";

}


nombre.addEventListener("focus", validarFocus);
nombre.addEventListener("blur", validarPerdidaFocus);

apellido.addEventListener("focus", validarFocus);
apellido.addEventListener("blur", validarPerdidaFocus);

dni.addEventListener("change", crearBotonEliminar);
eliminarArchivoBtn.addEventListener("click", eliminarArchivo);

email.addEventListener("focus", validarFocus);
email.addEventListener("blur", validarEmail);

celular.addEventListener("focus", validarFocus);
celular.addEventListener("blur", validarCelular);

carrera.addEventListener("focus", validarFocus);
carrera.addEventListener("blur", validarCarrera);


formulario.addEventListener("submit", function(e) {

    if(errores.includes(nombre.value)||nombre.value===""){
        e.preventDefault();
        nombre.classList.add("errorSubmit");
        nombre.classList.add("invalido");
        nombre.value = "Error, este campo no puede estar vacio"
    }

    if(errores.includes(apellido.value)||apellido.value===""){
        e.preventDefault();
        apellido.classList.add("errorSubmit");
        apellido.classList.add("invalido");
        apellido.value = "Error, este campo no puede estar vacio"
    }    

    if (dni.files.length === 0) {  
        e.preventDefault();
        dni.classList.add("errorSubmit");
        dni.classList.add("invalido");
    }

    if(errores.includes(email.value)||email.value===""){
        e.preventDefault();
        email.classList.add("errorSubmit");
        email.classList.add("invalido");
        email.value="Por favor ingrese un email valido";

        
    }

    if(errores.includes(celular.value)||celular.value===""){
        e.preventDefault();
        celular.classList.add("errorSubmit");
        celular.classList.add("invalido");
        celular.value="Error, el celular debe tener entre 8 y 11 caracteres";

    }

    if(errores.includes(carrera.value)||carrera.value===""){
        e.preventDefault();
        carrera.classList.add("errorSubmit");
        carrera.classList.add("invalido");
        carrera.value="Opción incorrecta";

    }

    if(mensaje.value.trim().length < 0){
        e.preventDefault();
        mensaje.classList.add("errorSubmit");
        mensaje.classList.add("invalido");
        
    }
});



