// eslint-disable-next-line strict
'use strict';

const createModal = target => {
	const getValue = target.dataset.application,
		modal = document.getElementById('application'),
		text = document.getElementById('applicationInput');

	text.value = getValue;
	modal.style.cssText = `
		display: none;
    position: fixed;
    top: 20%;
    left: 50%;
    transform: translateX(-50%);
    width: 460px;
    max-width: 100%;
    background: #fff;
    padding: 55px 25px 35px;
    z-index: 99;`;

	return modal;
};

export default createModal;
