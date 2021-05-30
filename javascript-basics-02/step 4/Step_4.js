var x=document.querySelector("button");
x.addEventListener("click", reset)

function reset(){
    if( confirm ("are you sure")){
        var name=(document.querySelector("#name").value="");
        var surname=(document.querySelector("#surname").value="");
        var city=(document.querySelector("#city").value="");
    } else {
        
    }
}