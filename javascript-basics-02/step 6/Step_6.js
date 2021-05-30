   function ChImg(){

    var image1 = document.querySelector("#image1")
    var image2 = document.querySelector("#image2")
    var image3 = document.querySelector("#image3")
    var image4 = document.querySelector("#image4")
    var image5 = document.querySelector("#image5")
    image1.addEventListener('mouseover', function (){
    image1.src = "images/image1_2.jpg"
    })
    image2.addEventListener('mouseover' , function (){
       image2.src= "images/image2_2.jpg"
    })
    image3.addEventListener('mouseover', function (){
       image3.src = "images/image3_2.jpg"
    })
    image4.addEventListener('mouseover', function (){
        image4.src = "images/image4_2.jpg"
    })
    image5.addEventListener('mouseover', function (){
        image5.src = "images/image5_2.jpg"
    })
    }

    function RestImg(){

    image1.addEventListener('mouseout', function (){
        image1.src = "images/image1.jpg"
    })
    image2.addEventListener('mouseout' , function (){
        image2.src= "images/image2.jpg"
    })
    image3.addEventListener('mouseout', function (){
        image3.src = "images/image3.jpg"
    })
    image4.addEventListener('mouseout', function (){
        image4.src = "images/image4.jpg"
    })
    image5.addEventListener('mouseout', function (){
        image5.src = "images/image5.jpg"
    })


    }