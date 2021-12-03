const content = document.querySelector('.content');
const rightSlide = document.querySelector('.right-slide');
const leftSlide = document.querySelector('.left-slide');
const upButton = document.querySelector('.up-button');
const downButton = document.querySelector('.down-button');
const slidesLenght = rightSlide.querySelectorAll('div').length;

let activeSlideIndex = 0;

if (window.matchMedia("(max-width: 575.98px)").matches) {
    leftSlide.style.left = `-${(slidesLenght - 1) * 100}%`;

    const changeSlide = (direction) => {
        const sliderHeight = content.clientWidth;
        if (direction === 'left') {
            console.log("left")
            activeSlideIndex++;
            if (activeSlideIndex > slidesLenght - 1) activeSlideIndex = 0;
        } else if (direction === 'right') {
            console.log("right")
            activeSlideIndex--;
            if (activeSlideIndex < 0) activeSlideIndex = slidesLenght - 1;
        }
        rightSlide.style.transform = `translateX(-${activeSlideIndex * sliderHeight}px)`;
        leftSlide.style.transform = `translateX(${activeSlideIndex * sliderHeight}px)`;
    };

    upButton.addEventListener('click', () => changeSlide('right'));
    downButton.addEventListener('click', () => changeSlide('left'));
} else {
    leftSlide.style.top = `-${(slidesLenght - 1) * 100}vh`;

    const changeSlide = (direction) => {
        const sliderHeight = content.clientHeight;
        if (direction === 'up') {
            activeSlideIndex++;
            if (activeSlideIndex > slidesLenght - 1) activeSlideIndex = 0;
        } else if (direction === 'down') {
            activeSlideIndex--;
            if (activeSlideIndex < 0) activeSlideIndex = slidesLenght - 1;
        }
        rightSlide.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`;
        leftSlide.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`;
    };

    upButton.addEventListener('click', () => changeSlide('up'));
    downButton.addEventListener('click', () => changeSlide('down'));
}

// down es left
