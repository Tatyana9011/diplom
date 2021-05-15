// eslint-disable-next-line strict
'use strict';

const slider = () => {
  const slide = document.querySelectorAll('.item');
  let currentSlide = 0;

  const prevSlide = (elem, index, strClass) => {
    elem[index].classList.add(strClass);
  };

  const nextSlide = (elem, index, strClass) => {
    elem[index].classList.remove(strClass);
  };

  const autoPlaySlide = () => {
    prevSlide(slide, currentSlide, 'slider-item-active');
    currentSlide++;
    if (currentSlide >= slide.length) {
      currentSlide = 0;
    }
    nextSlide(slide, currentSlide, 'slider-item-active');
  };
  const startSlide = (time = 3000) => {
    setInterval(autoPlaySlide, time);
  };

  startSlide(3000);
};
export default slider;
