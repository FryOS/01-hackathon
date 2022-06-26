import {
    Module
} from '../core/module'
import {random} from '../utils'

export class ImagesModule extends Module {
    constructor(type, text) {
        super(type, text);
    }

    trigger() {

        start();

        const modalWindow = document.querySelector('.modal');
        modalWindow.removeAttribute('hidden', '');

        function createModalWindow(num) {

            const modal = document.createElement('div');
            modal.className = 'modal';
            modal.setAttribute('hidden', '');
            document.body.prepend(modal);

            const modalInner = document.createElement('div');
            modalInner.className = 'modal__inner';
            modal.append(modalInner);

            const modalContent = document.createElement('div');
            modalContent.className = 'modal__content';
            modalInner.append(modalContent);

            const modalImage = document.createElement('div');
            modalImage.className = 'modal__image';
            modalContent.append(modalImage);

            const image = document.createElement('img');
            image.src = `../../assets/images/img${num}.jpg`;
            modalImage.append(image);

            const modalClose = document.createElement('span');
            modalClose.className = 'modal__close';
            modalClose.textContent = 'X';
            modalContent.append(modalClose);

            return modal;
        }

        function start() {
            let randomImageNumber =  random(1, 7);
            createModalWindow(randomImageNumber);

            const modalWindow = document.querySelector('.modal');
            modalWindow.addEventListener('click', (event) => {
                const isCloseButton = event.target.closest('.modal__close');
                if (isCloseButton) {
                    modalWindow.setAttribute('hidden', '');
                    modalWindow.remove();
                }
            });

        }
    }

}