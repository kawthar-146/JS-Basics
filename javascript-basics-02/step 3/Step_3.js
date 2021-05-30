var x=document.createElement("div");
var y=document.querySelector("#name");

y.addEventListener("change", function () {x.innerHTML=y.value;
    document.body.appendChild(x)}) ;
