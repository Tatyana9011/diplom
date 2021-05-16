// eslint-disable-next-line strict
'use strict';
import openModal from './module/openModal';
import smoothScroll from './module/smoothScroll';
import slider from './module/slider';
import sliderCarousel from './module/sliderCarousel';
import accordion from './module/accordeon';
import sendForm from './module/sendForm';
import validationAllInput from './module/validationForm';

smoothScroll();

const imgWrapper = document.querySelectorAll('.fancyboxModal');
imgWrapper.forEach(item => {
  item.addEventListener('click', event => {
    event.preventDefault();
    openModal();
  });
});

slider();

const div = document.createElement('div');
const checkResponse = () => {
  div.innerHTML = '';
  if (document.documentElement.clientWidth > 990) {

    sliderCarousel(3, div);
  } else if (document.documentElement.clientWidth > 760) {
    sliderCarousel(2, div);
  } else {
    sliderCarousel(1, div);
  }

};

checkResponse();

window.addEventListener('resize', checkResponse);

accordion();

validationAllInput();

sendForm('form-callback');
