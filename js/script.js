document.getElementById("enviar").addEventListener("click" ,validaformulario)

function validaformulario(){
   if( document.getElementById("nome").value != "" && 
    document.getElementById("email").value != "" &&
    document.getElementById("numero").value != "" ) {
    alert("Prontinho! você receberá as novidades por email.") 
  }else{
    alert("Por favor, preencha os campos nome,email e Telefone!")
  }

}

