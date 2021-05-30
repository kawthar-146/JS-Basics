function data(){
    var shoe_size=document.getElementById("shoe_size").value
    var year=document.getElementById("year").value
    var total=[[[(shoe_size*2)+5]*50]- year]+ 1766;
    alert("shoe size * 2 + 5 * 50 - birth year + 1766  = " + total) 
    }