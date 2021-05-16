// eslint-disable-next-line strict
'use strict';
const sendForm = idForm => {
  const errorMessage = 'Что то пошло не так...',
    successMessage = 'Спасибо! Мы скоро с вами свяжемся!',
    preloder = './preloader.svg';

  const form = document.getElementById(idForm);
  const statusMessage = document.createElement('div');
  statusMessage.style.cssText = `
  display: flex;
  align-items: center;
  font-size: 2rem;
  color: blue;
  justify-content: center;
  `;

  const validateInput = formAllInput => {
    const input = formAllInput.querySelectorAll('input');
    let error = 0;
    input.forEach(elem => {
      if (elem.classList.contains('error')) {
        error++;
      }
    });
    return error;
  };

  const postData = data => fetch('./server.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });

  form.addEventListener('submit', event => {
    event.preventDefault();
    const error = validateInput(form);
    const formData = new FormData(form);
    const body = {};

    formData.forEach((val, key) => {
      body[key] = val;
    });
    const outputData = response => {
      if (response.status !== 200) {
        throw new Error('status network not 200');
      }
      statusMessage.textContent = successMessage;
    };
    const errorData = err => {
      statusMessage.textContent = errorMessage;
      console.error(err);
    };

    const resultEnd = () => {
      form.reset();
      setTimeout(() => {
        const modalCallback = document.querySelector('.modal-callback'),
          modalOverlay = document.querySelector('.modal-overlay');

        modalCallback.style.display = 'none';
        modalOverlay.style.display = 'none';
        setTimeout(() => {
          statusMessage.textContent = '';
          statusMessage.remove();
        }, 2000);
      }, 3000);
    };
    if (error === 0) {
      form.append(statusMessage);
      statusMessage.innerHTML = `<img width='40px' alt='preloder' src=${preloder}>`;

      postData(body)
        .then(outputData)
        .catch(errorData)
        .then(resultEnd);
    }
  });
};
export default sendForm;
