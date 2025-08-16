
document.addEventListener("DOMContentLoaded", function () {
    let pbtn = document.querySelector("#pbtn"); 
    let imgElement = document.querySelector("#photo"); 

    // alert("5 photoes")

    if (!imgElement) {
        return;
    }

    let images = ["images/photo1.png", "images/photo2.png", "images/photo3.png", "images/photo4.png", "images/photo5.png"]; 
    let currentIndex = 0; 

    pbtn.addEventListener("click", function () {
       currentIndex++; 
        if (currentIndex >= images.length) {
            currentIndex = 0;
            // currentIndex++; 
        }
        imgElement.src = images[currentIndex]; 

    });

});



















    
