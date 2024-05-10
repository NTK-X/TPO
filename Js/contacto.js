
const nombre = document.querySelector("[name=nombre]");
const apellido = document.querySelector("[name=apellido]");
const email = document.querySelector("[name=email]");
const celular = document.querySelector("[name=celular]");
const carrera = document.querySelector("[name=carrera]");
const mensaje = document.querySelector("[name=mensaje]");

nombre.addEventListener("focus", function(e){
    const campo = e.target;
    if(campo.value === "Error, este campo no puede estar vacio"){
        campo.value = "";
        campo.classList.remove("invalido");
    }else{
        campo.classList.remove("invalido");
    }
    

})

nombre.addEventListener("blur", function(e){
    const campo = e.target;
    const nombreValor = e.target.value;

    if((nombreValor.length < 1) || (nombreValor === "Error, este campo no puede estar vacio")){
        campo.classList.add("invalido");
        e.target.value = "Error, este campo no puede estar vacio"
    }
})
