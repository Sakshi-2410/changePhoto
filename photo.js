// function changeImage  (){
//     let imgElement = document.getElementById("myImage");

    // Example condition
    // if (imgElement.src.includes("photo1.png")) {
    //     imgElement.src = "photo2.png"; // Change to another image
    // } 
    // if(imgElement.src.includes(photo2.png)){
    //     imgElement.src="photo3.png";
    // }
    // if(imgElement.src.includes(photo3.png)){
    //     imgElement.src="photo4.png";
    // }
    // if(imgElement.src.includes(photo4.png)){
    //     imgElement.src="photo5.png";
    // }
    // if(imgElement.src.includes(photo5.png)){
    //     imgElement.src="photo1.png";
    // }
    // else {
    //     imgElement.src = "image1.jpg"; // Revert back
    // }
    // console.log()
// }


// let modebtn = document.querySelector("#mode");

// let currMode = "light";

//  modebtn.addEventListener("click", () => {
//     if(currMode === "light") {
//         currMode = "dark";
//         document.querySelector("body").style.backgroundColor = "black";
//     }
//     else{
//         currMode = "light";
//         document.querySelector("body").style.backgroundColor = "white";

//     }
//     console.log(currMode);

// });
// <!-- id="pbtn -->








// const hexValue =() => {
//     let myHexvalue ="0123456789abcdef";
//       let colors="#";
//       for(let i=0;i<6;i++)
//         {
//           colors= colors + myHexvalue[Math.floor(Math.random()*16)];
//       }
//       return colors;

    

// };









// let pbtn = document.querySelector("#pbtn");

// let currPhoto = "photo1";

// const currPhoto=()=>{
//     for(let i=photo1.png; i<photo5.png; i++){

//     }

// }

// pbtn.addEventListener("click" ,() => {
//     if(currPhoto = "photo1"){
//         currPhoto="photo2.png";
//         document.querySelector("#photo1").src = "photo2.png";

//     }
//     else{
//         currPhoto="photo1.png";
//         document.querySelector("photo").src="photo2.png";
//     }
// })
// console.log(currPhoto);


// let pbtn = document.querySelector("#pbtn");

// let currPhoto = "photo1";

// pbtn.addEventListener("click", () => {
//     let imgElement = document.querySelector("#photo1"); // Select the correct image ID

//     if (currPhoto === "photo1") {
//         currPhoto = "photo2";
//         imgElement.src = "photo2.png"; // Correct property usage
//     } else {
//         currPhoto = "photo1";
//         imgElement.src = "photo1.png"; // Correct property usage
//     }
// });

// console.log(currPhoto);

 // function changeImage() {
        //     let imgElement = document.getElementById("photo");

        //     // If-else condition to change the image
        //     if (imgElement.src.includes("photo1.png")) {
        //         imgElement.src = "photo2.png"; // Change image
        //     } else {
        //         imgElement.src = "photo1.png"; // Revert back
        //     }
        // }


        // function changeImage() {
        //     let imgElement = document.getElementById("myImage");
        
        //     if (imgElement.src.includes("image1.jpg")) {
        //         imgElement.src = "images/image2.jpg"; // Change image
        //     } else {
        //         imgElement.src = "images/image1.jpg"; // Revert back
        //     }
        // }
        




// document.addEventListener("DOMContentLoaded", function () {
//     let pbtn = document.querySelector("#pbtn");
//     let imgElement = document.querySelector("#photo");
//     let currPhoto = "photo1.png";

//     pbtn.addEventListener("click", function () {
//         if (currPhoto === "photo1.png") {
//             currPhoto = "photo2.png";
//             imgElement.src = "images/photo2.png"; // Correct file path
//         } 

//         else {
//             currPhoto = "photo1.png";
//             imgElement.src = "images/photo1.png"; // Correct file path
//         }


//     }); only for two photo
// });




// import { initializeApp } from "firebase/app";

// // Your Firebase configuration
// const firebaseConfig = {
//   apiKey: "YOUR_API_KEY",
//   authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
//   projectId: "YOUR_PROJECT_ID",
//   storageBucket: "YOUR_PROJECT_ID.appspot.com",
//   messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
//   appId: "YOUR_APP_ID"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// console.log("Firebase initialized!");


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
// alert("5 photoes")


















    