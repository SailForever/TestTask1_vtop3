/*feedback*/
// Получаем элементы слайдера
const slider = document.querySelector('.namesBlock_feedback');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const slides = Array.from(slider.querySelectorAll('spanSlide'));
const slideCount = slides.length;
let slideIndex = 0;

let size = window.innerWidth
if (size < 1400) {
  prevButton.addEventListener('click', showPreviousSlide);
  nextButton.addEventListener('click', showNextSlide);
  updateSlider();
}

window.addEventListener('resize', function () {
  let resize = window.innerWidth
  if (resize < 1400) {
    prevButton.addEventListener('click', showPreviousSlide);
    nextButton.addEventListener('click', showNextSlide);
    updateSlider();
  }
});

// Функция для показа предыдущего слайда
function showPreviousSlide() {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  updateSlider();
}

// Функция для показа следующего слайда
function showNextSlide() {
  slideIndex = (slideIndex + 1) % slideCount;
  updateSlider();
}

// Функция для обновления отображения слайдера
function updateSlider() {
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });

}

/*partners*/
// Получаем элементы слайдера
const slider1 = document.querySelector('.imagesMob_partners');
const prevButton1 = document.querySelector('.prev-button1');
const nextButton1 = document.querySelector('.next-button1');
const slides1 = Array.from(slider1.querySelectorAll('img'));
const slideCount1 = slides1.length;
let slideIndex1 = 0;

let size1 = window.innerWidth
if (size1 < 1400) {
  prevButton1.addEventListener('click', showPreviousSlide1);
  nextButton1.addEventListener('click', showNextSlide1);
  updateSlider1();
}

window.addEventListener('resize', function () {
  let resize1 = window.innerWidth
  if (resize1 < 1400) {
    prevButton1.addEventListener('click', showPreviousSlide1);
    nextButton1.addEventListener('click', showNextSlide1);
    updateSlider1();
  }
});

// Функция для показа предыдущего слайда
function showPreviousSlide1() {
  slideIndex1 = (slideIndex1 - 1 + slideCount1) % slideCount1;
  updateSlider1();
}

// Функция для показа следующего слайда
function showNextSlide1() {
  slideIndex1 = (slideIndex1 + 1) % slideCount1;
  updateSlider1();
}

// Функция для обновления отображения слайдера
function updateSlider1() {
  slides1.forEach((slide, index) => {
    if (index === slideIndex1) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}
updateSlider1();