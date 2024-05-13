
const formulario = document.getElementById("formularioContacto");
const nombre = document.querySelector("[name=nombre]");
const apellido = document.querySelector("[name=apellido]");
const inputPDF = document.getElementById("dni");
const eliminarArchivoBtn = document.getElementById("eliminarArchivo");
const email = document.querySelector("[name=email]");
const celular = document.querySelector("[name=celular]");
const carrera = document.querySelector("[name=carrera]");
const mensaje = document.querySelector("[name=mensaje]");


const carreras = ["Programación", "Relaciones internacionales", "Comercio exterior", 
"Psicología", "Derecho", "Medicina", "Economía", "Arquitectura"];

const validarFocus = (e) => {
    const campo = e.target;
    if(campo.value === "Error, este campo no puede estar vacio" || 
       campo.value === "Error, el celular debe tener entre 8 y 11 caracteres" ||
       campo.value === "Por favor ingrese un email valido"
    ){
        campo.value = "";
        campo.classList.remove("invalido");
    }
    else if(campo.value === "Opción incorrecta" || carreras.includes(campo.value)){
        campo.value = "";
        campo.classList.remove("invalido");
    }
    else{
        campo.classList.remove("invalido");
    }
}

const validarPerdidaFocus = (e) => {
    const campo = e.target;
    const nombreValor = e.target.value;

    if((nombreValor.trim().length < 1) || (nombreValor === "Error, este campo no puede estar vacio")){
        campo.classList.add("invalido");
        e.target.value = "Error, este campo no puede estar vacio"
    }
}

const validarCelular = (e) => {

    const regexTelefono = /^\d{8,11}$/;

    if(!regexTelefono.test(e.target.value)){
        e.target.value = "Error, el celular debe tener entre 8 y 11 caracteres"
        e.target.classList.add("invalido");
    }else{
        e.target.classList.remove("invalido");
    }
}

const validarEmail = (e) => {

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!regexEmail.test(e.target.value)){
        e.target.value = "Por favor ingrese un email valido"
        e.target.classList.add("invalido");
    }else{
        e.target.classList.remove("invalido");
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

inputPDF.addEventListener("change", function() {
    
    if (inputPDF.files.length > 0) {
        eliminarArchivoBtn.style.display = "inline-block"; 
    }
});

eliminarArchivoBtn.addEventListener("click", function() {
    inputPDF.value = null;
    eliminarArchivoBtn.style.display = "none";
});

formulario.addEventListener("submit", function(e) {
    if (inputPDF.files.length === 0) {
        // Mostrar un mensaje de error si no se ha seleccionado ningún archivo
        alert("Por favor, seleccione un archivo PDF.");
        e.preventDefault(); // Evitar el envío del formulario
    }
});

nombre.addEventListener("focus", validarFocus);
nombre.addEventListener("blur", validarPerdidaFocus);

apellido.addEventListener("focus", validarFocus);
apellido.addEventListener("blur", validarPerdidaFocus);

carrera.addEventListener("focus", validarFocus);
carrera.addEventListener("blur", validarCarrera);

celular.addEventListener("focus", validarFocus);
celular.addEventListener("blur", validarCelular);

email.addEventListener("focus", validarFocus);
email.addEventListener("blur", validarEmail);




