
const nombre = document.getElementById("name");
const celular = document.getElementById("celular");
const email = document.getElementById("email");
const consulta = document.getElementById("consulta");
const aviso = document.getElementById("warnings");

form.addEventListener ("submit", e=>{
    e.preventDefault()
    
    let warnings = ""
    let regexEmail= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    
    if(!regexEmail.test(email.value)){
        warnings +=  `Por favor ingrese un e-mail valido <br>`
        entrar=true
        


    }

    if(entrar){
        aviso.innerHTML = warnings
    }
})

