const imagesArray = ["img/01.jpg", "img/02.jpg", "img/03.jpg", "img/04.jpg", "img/05.jpg"];
const itemsContainer = document.querySelector(".slider-items-container")

//Aggiunta dinamica degli elementi nello slider
for (let i = 0; i < imagesArray.length; i++) {
    const currentImage = imagesArray[i];

    const sliderItem = `
    <div class="item">
        <img src=${currentImage} alt="photo ${i}">
    </div>`;

    itemsContainer.innerHTML += sliderItem;
}

const itemsArray = document.getElementsByClassName("item");
let activeItemIndex = 0;
itemsArray[activeItemIndex].classList.add("active");

//Logica nextBtn
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

nextBtn.addEventListener("click", function() {
    prevBtn.classList.remove("hidden")

    if (activeItemIndex < (itemsArray.length - 1)) {
        itemsArray[activeItemIndex].classList.remove("active");
        
        activeItemIndex++;

        itemsArray[activeItemIndex].classList.add("active");

        if (activeItemIndex === itemsArray.length - 1) {
            nextBtn.classList.add("hidden");
        }
    }
});

//Logica prevBtn
prevBtn.classList.add("hidden");

prevBtn.addEventListener("click", function () {
   nextBtn.classList.remove("hidden");

    if (activeItemIndex > 0){
        itemsArray[activeItemIndex].classList.remove("active");

        activeItemIndex--;

        itemsArray[activeItemIndex].classList.add("active");
        if (activeItemIndex === 0) {
            prevBtn.classList.add("hidden")
        }
    }
});