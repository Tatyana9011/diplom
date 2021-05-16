// eslint-disable-next-line strict
'use strict';

const sliderCarousel = quantity => {
  const sliderContent = document.querySelector('.services-carousel'),
    btnSlider = document.querySelector('.services-arrow'),
    slide = sliderContent.querySelectorAll('.col-sm-6,.col-md-4');

  let currentSlideNext = quantity - 1;
  let currentSlidePrev = 0;

  slide.forEach(item => item.style.display = 'none');

  const elementMap = [];

  for (let i = 0; i < quantity; i++) {
    elementMap.push(slide[i]);
  }

  const renderElem = arr => {
    sliderContent.innerHTML = '';
    arr.forEach(item => {
      item.style.display = 'block';
      sliderContent.append(item);
    });
  };
  renderElem(elementMap);

  const prevSlide = index => {
    elementMap.splice(2);
    elementMap.unshift(slide[index]);
    renderElem(elementMap);
  };

  const nextSlide = index => {
    elementMap.splice(0, 1);
    elementMap.push(slide[index]);
    renderElem(elementMap);
  };

  btnSlider.addEventListener('click', event => {
    event.preventDefault();
    const target = event.target;

    if (target.matches('.arrow-right')) {

      if (currentSlideNext >= slide.length - 1) {
        currentSlideNext = 0;
        currentSlidePrev++;
        nextSlide(currentSlideNext);
      } else {
        currentSlideNext++;
        currentSlidePrev++;
        nextSlide(currentSlideNext);
      }
      if (currentSlidePrev > slide.length - 1) {
        currentSlidePrev = 0;
      }

    } else if (target.matches('.arrow-left')) {
      if (currentSlidePrev <= 0) {
        currentSlidePrev = slide.length - 1;
        currentSlideNext--;
        prevSlide(currentSlidePrev);
      } else {
        currentSlideNext--;
        currentSlidePrev--;
        prevSlide(currentSlidePrev);
      }
      if (currentSlideNext < 0) {
        currentSlideNext = slide.length - 1;
      }
    }
  });
};

export default sliderCarousel;

