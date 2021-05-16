// eslint-disable-next-line strict
'use strict';
const openModal = () => {
  const modalCallback = document.querySelector('.modal-callback'),
    modalOverlay = document.querySelector('.modal-overlay'),
    modalClose = document.querySelector('.modal-close');

  const openModalStart = () => {
    modalCallback.style.display = 'block';
    modalOverlay.style.display = 'block';
    document.addEventListener('keydown', escapeHandler);
  };

  openModalStart();

  const closeModal = () => {
    modalCallback.style.display = 'none';
    modalOverlay.style.display = 'none';
    document.removeEventListener('keydown', escapeHandler);
  };

  const escapeHandler = event => {
    if (event.code === 'Escape') {
      closeModal();
    }
  };

  modalClose.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', closeModal);

};

export default openModal;
