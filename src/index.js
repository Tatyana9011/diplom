// eslint-disable-next-line strict
'use strict';
import openModal from './module/openModal';
import smoothScroll from './module/smoothScroll';
import slider from './module/slider';
import SliderCarousel from './module/sliderCarousel';
import accordion from './module/accordeon';
import sendForm from './module/sendForm';
import validationAllInput from './module/validationForm';

const imgWrapper = document.querySelectorAll('.fancyboxModal');
imgWrapper.forEach(item => {
  item.addEventListener('click', openModal);
});

smoothScroll();
slider();

const options = {
  main: ".services-elements",
  wrap: '.services-carousel',
  next: '.arrow-right',
  prev: '.arrow-left',
  slidesToShow: 4,
  infinity: true,
  responsive: [{
    breakpoint: 1024,
    slidesToShow: 3
  },
  {
    breakpoint: 768,
    slidesToShow: 2
  },
  {
    breakpoint: 576,
    slidesToShow: 1
  }
  ]
};

const carousel = new SliderCarousel(options);
carousel.init();
accordion();

validationAllInput();
sendForm('form-callback');
