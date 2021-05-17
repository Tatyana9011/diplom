'use strict';

const smoothScroll = () => {
  const scrollUp = document.querySelector('body');
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

        if (id !== '#' && id !== 'http://collary.ru') {
          const getId = document.querySelector(id);

          if (getId !== null && !getId.matches('.modal, .modal-callback')) {
            window.scrollTo({
              top: getId.offsetTop - 100,
              behavior: "smooth"
            });
          }

        }
      });
    }
  };

  scroll();
};

export default smoothScroll;
