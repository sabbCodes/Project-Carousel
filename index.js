const forwardBtn = document.getElementById("forward-btn");
const backwardBtn = document.getElementById("backward-btn");
const images = document.getElementsByClassName("carousel");
const radioBtn = document.getElementsByClassName("radBtn");
const totalImages = images.length;
const totalRadioBtn = radioBtn.length;
let position = 0;

forwardBtn.addEventListener("click", moveToNextImage);
backwardBtn.addEventListener("click", moveToPrevImage);

setInterval( moveToNextImage, 3000);

function hideEveryImage(){
    for (let image of images){
        image.classList.remove("show");
        image.classList.add("hide");
    };
};

function clearBtns(){
    for (let button of radioBtn){
        button.classList.remove("active");
        button.classList.add("neutral");
    };
};

function activateRadioBtn(){
    clearBtns()
   
    radioBtn[position].classList.add("active"); 
};

function moveToNextImage(){
    hideEveryImage();

    if (position === totalImages - 1){
        position = 0;
    } else {
        position++;
    }
    images[position].classList.add("show");
    activateRadioBtn();
};

function moveToPrevImage(){
    hideEveryImage();

    if (position === 0){
        position = totalImages - 1;
    } else {
        position--;
    }
    images[position].classList.add("show");
    activateRadioBtn();
};
