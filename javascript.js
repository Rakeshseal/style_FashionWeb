// Configuration
const carousel = document.querySelector('.carousel-slide');
const carouselImages = carousel.querySelectorAll('.img');
const imageWidth = carouselImages[0].clientWidth;
const slideInterval = 3000; // Change slide every 3 seconds

let currentIndex = 0;

// Initial setup
carousel.style.transform = `translateX(-${currentIndex * imageWidth}px)`;

function slide(direction) {
  if (direction === 'next') {
    currentIndex = (currentIndex + 1) % carouselImages.length;
  } else if (direction === 'prev') {
    currentIndex = (currentIndex - 1 + carouselImages.length) % carouselImages.length;
  }

  carousel.style.transition = 'transform 0.5s ease-in-out';
  carousel.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
}

// Button event listeners
const prevButton = document.getElementById('prevBtn');
const nextButton = document.getElementById('nextBtn');

prevButton.addEventListener('click', () => slide('prev'));
nextButton.addEventListener('click', () => slide('next'));

setInterval(() => slide('next'), slideInterval);










//Nav--Search OnHover
const searchBox = document.querySelector(".search-box");
const searchIcon =document.querySelector(".search-icon");

function searchFunc(){
    searchBox.style.display="block"; 
     
}
 function searchDvFunc(){
    searchBox.style.display="none";
 }

