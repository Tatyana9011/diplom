// eslint-disable-next-line strict
'use strict';
import createModal from './createModal';

const openModal = event => {
  const target = event.target,
    modalCallback = document.querySelector('.modal-callback'),
    modalOverlay = document.querySelector('.modal-overlay'),
    modalClose = document.querySelector('.modal-close');

  const modal = createModal(target);

  const openModalStart = elem => {
    elem.style.display = 'block';
    modalOverlay.style.display = 'block';
    document.addEventListener('keydown', escapeHandler);
  };

  const closeModal = () => {
    modalCallback.style.display = 'none';
    modal.style.display = 'none';
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

  if (target.matches('.absolute')) {
    openModalStart(modal);
  }
  if (target.matches('.callback-btn') || target.matches('.button-services')) {
    openModalStart(modalCallback);
  }

};

export default openModal;
