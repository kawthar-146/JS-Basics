var password = document.getElementById('password')
var confirmation = document.getElementById('confirmation')

function text(){
    if (password.value!=confirmation.value){
        confirmation.style.borderStyle="solid"
        confirmation.style.borderWidth="2px"
        confirmation.style.borderColor="red"
        password.style.borderStyle="solid"
        password.style.borderWidth="2px"
        password.style.borderColor="red"
        }
  } 

