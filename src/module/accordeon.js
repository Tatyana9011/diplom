'use strick';

const accordion = () => {

  const accordionElement = document.querySelector('.accordeon'),
    element = accordionElement.querySelectorAll('.element'),
    elementContent = accordionElement.querySelectorAll('.element-content');

  element.forEach(elem => {
    if (elem.children[1].classList.contains('active')) {
      elem.children[1].style.height = `${elem.children[1].scrollHeight}px`;
    }
  });

  const open = (elem, dropDown) => {
    element.forEach(item => {
      item.classList.remove('active');
    });

    elementContent.forEach(item => {
      item.style.height = '';
      item.style.display = 'none';
    });

    elem.classList.add('active');
    dropDown.style.height = '';
    dropDown.style.display = 'block';
    dropDown.style.height = `${dropDown.scrollHeight}px`;
  };

  const close = (elem, dropDown) => {
    elem.classList.remove('active');
    dropDown.style.display = 'none';
    dropDown.style.height = '';
  };

  accordionElement.addEventListener('click', event => {
    const target = event.target;

    if (target.classList.contains('title')) {
      const parent = target.closest('.element');
      const content = parent.querySelector('.element-content');
      parent.classList.contains('active') ?
        close(parent, content) :
        open(parent, content);
    }

  });
};

export default accordion;
