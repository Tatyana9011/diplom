'use strict';

const smoothScroll = () => {
  const scrollUp = document.querySelector('.top-slider');
  const up = document.querySelector('.up');
  up.style.display = 'none';

  const click = () => {
    up.addEventListener('click', () => {
      scrollUp.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  };
  click();

  window.addEventListener('scroll', () => {
    if (pageYOffset >= 612) {
      up.style.display = 'block';
    } else {
      up.style.display = 'none';
    }
  });


  const scroll = () => {
    const scrollBlocks = document.querySelectorAll('a[href]');

    for (const scrollBlock of scrollBlocks) {

      scrollBlock.addEventListener('click', event => {
        event.preventDefault();
        const id = scrollBlock.getAttribute("href");

        if (id !== '#') {
          const getId = document.querySelector(id);
          if (getId !== null) {
            getId.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
            });
          }
        }
      });
    }
  };

  scroll();
};

export default smoothScroll;
