const nombre = document.getElementById("name")
const email = document.getElementById("email")
const pass = document.getElementById("password")
const form = document.getElementById("form")
const parrafo = document.documet.getElementById("warnings")

form.addEventListener("submit" , e=>{
    e.preventDefault()
    let warnings = ""
    let entar = false
    let regexEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,4})+$/
    parrafo.innerHTML = ""
    if(nombre.values.length <6){
        warnings += 'El nombre no es valido <br>'
        entar = true
    }
    if(!regexEmail.text(email.value)){
        warnings += 'El email no es valido <br>'
        entar = true
    }
    if(pass.value.length <8){
        warnings += 'La contraseña no es valida <br>'
        entar = true
    }
    if(entar) {
        parrafo.innerHTML = warnings
    }else{
        parrafo.innerHTML = "Enviado"
    }
})