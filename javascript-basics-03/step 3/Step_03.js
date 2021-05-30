var text=document.getElementById('text')
var green = document.querySelector('.green')
var red = document.querySelector('.red')
var blue = document.querySelector('.blue')

green.onclick = function green(){
    text.style.color= 'green';
}

red.onclick = function red(){
    text.style.color= 'red';
}

blue.onclick = function blue(){
    text.style.color= 'blue';
}