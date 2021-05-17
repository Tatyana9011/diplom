// eslint-disable-next-line strict
'use strict';

import openModal from './openModal';
import validationForm from './validationForm';
import sendForm from './sendForm';


const sliderCarousel = (quantity = 1, div) => {
  const sliderContent = document.querySelector('.services-carousel'),
    btnSlider = document.querySelector('.services-arrow'),
    slide = sliderContent.querySelectorAll('.col-sm-6,.col-md-4');

  slide.forEach(item => {
    item.style.display = 'none';
  });

  const elementMap = [];
  let currentSlideNext = quantity - 1;
  let currentSlidePrev = 0;

  for (let i = 0; i < quantity; i++) {
    elementMap.push(slide[i]);
  }

  const renderElem = arr => {
    div.innerHTML = '';
    let elemClone;
    arr.forEach(item => {
      elemClone = item.cloneNode(true);
      elemClone.style.display = 'block';
      div.innerHTML += elemClone.outerHTML;
    });
    sliderContent.prepend(div);

    const slideClone = sliderContent.querySelectorAll('.col-sm-6,.col-md-4');
    slideClone.forEach(item => {
      item.addEventListener('click', event => {
        event.preventDefault();
        openModal(event);
      });
    });
  };

  renderElem(elementMap);

  const prevSlide = index => {
    elementMap.splice(quantity - 1);
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

