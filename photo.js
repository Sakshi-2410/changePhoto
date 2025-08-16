
document.addEventListener("DOMContentLoaded", function () {
    let pbtn = document.querySelector("#pbtn"); 
    let imgElement = document.querySelector("#photo"); 

    // alert("5 photoes")

    if (!imgElement) {
        return;
    }

    let images = ["photo1.png", "photo2.png", "photo3.png", "photo4.png", "photo5.png"]; 
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



















    
