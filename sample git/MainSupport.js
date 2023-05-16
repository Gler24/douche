const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const images = document.querySelectorAll('.image-wrapper img');
let currentIndex = 0;
let isAnimating = false;

  /*This check wether the image is still loading and would thus not overlap, it also does an increment in selecting the order of the images*/
const shuffleImages = () => {
  if (!isAnimating) {
    isAnimating = true;
    images[currentIndex].style.opacity = 0;
    currentIndex = Math.floor(Math.random() * images.length);
    images[currentIndex].style.opacity = 1;
    setTimeout(() => {
      isAnimating = false;
    }, 300);
  }
};
  /*This is the shuffle controller 1000 = 1s*/
const shuffleInterval = setInterval(shuffleImages, 5000);

prevBtn.addEventListener('click', () => {
  clearInterval(shuffleInterval);
  if (!isAnimating) {
    isAnimating = true;
    images[currentIndex].style.opacity = 0;
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = images.length - 1;
    }
    images[currentIndex].style.opacity = 1;
    setTimeout(() => {
      isAnimating = false;
      shuffleInterval = setInterval(shuffleImages, 5000);
    }, 300);
  }
});
  /*Event listener for left button*/
nextBtn.addEventListener('click', () => {
  clearInterval(shuffleInterval);
  if (!isAnimating) {
    isAnimating = true;
    images[currentIndex].style.opacity = 0;
    currentIndex++;
    if (currentIndex >= images.length) {
      currentIndex = 0;
    }
    images[currentIndex].style.opacity = 1;
    setTimeout(() => {
      isAnimating = false;
      shuffleInterval = setInterval(shuffleImages, 5000);
    }, 300);
  }
});

