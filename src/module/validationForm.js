// eslint-disable-next-line strict
'use strict';
const validationAllInput = () => {
  const nameInputs = document.querySelectorAll('input[name="fio"]'),
    phoneInputs = document.querySelectorAll('input[name="tel"]'),
    allInputs = document.querySelectorAll('input');

  const validatePhone = (elem, event) => {
    elem.value = event.target.value.replace(/[^0-9 +]/, '');
    elem.value = event.target.value.replace(/[+]{2,}/, '+');
  };

  const validateName = (elem, event) => {
    elem.value = event.target.value.replace(/[^а-яё ]/ig, '');
  };

  const itemPush = arr => {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== "") {
        newArr[i] = arr[i][0].toUpperCase() + arr[i].slice(1).toLowerCase();
      }
    }
    return newArr;
  };

  const blurValidateName = (elem, target) => {
    const getValue = target.value.trim().replace(/\s{2,}/, ' ').replace(/^[ |-]/, '')
      .replace(/[-]{2,}/, '-').split(" ");
    elem.value = itemPush(getValue).join(' ');
  };

  const validateInputBlur = (target, elem, reg) => {
    if (reg) {
      elem.value = target.value;
      elem.classList.remove('error');
      elem.style.cssText = `border: none;`;
    } else {
      elem.classList.add('error');
      elem.style.cssText = `border: 2px solid red !important;`;
    }
  };

  nameInputs.forEach(item => item.addEventListener('input', validateName.bind(this, item)));
  phoneInputs.forEach(item => item.addEventListener('input', validatePhone.bind(this, item)));
  allInputs.forEach(input => {
    input.addEventListener('blur', event => {
      event.preventDefault();
      const target = event.target;
      if (target.matches('input[name="fio"]')) {
        blurValidateName(input, target);
        validateInputBlur(target, input, target.value !== '');
      }
      if (target.matches('input[name="tel"]')) {
        validateInputBlur(target, input, target.value.match(/^(\+ |\+)?3?[78]?([- ()]*\d){10}$/));
      }
    });
  });
};

export default validationAllInput;
