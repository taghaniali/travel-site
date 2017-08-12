import $ from 'jquery';

class Modal {
    constructor() {
        this.modalOpenButton = $('.open-modal');
        this.modalCloseButton = $('.modal__close');
        this.modal = $('.modal');
        this.events();
    }

    events() {
        //clicking modal open button
        this.modalOpenButton.click(this.openModal.bind(this));

        //clicking modal close button
        this.modalCloseButton.click(this.closeModal.bind(this));

        //pushing any key
        $(document).keyup(this.keyPressHandler.bind(this));
    }

    keyPressHandler(e) {
        if( e.keyCode == 27) {
            this.closeModal();
        }
    }

    openModal() {
        this.modal.addClass('modal--is-visible');
        return false;
    }

    closeModal() {
        this.modal.removeClass('modal--is-visible');
    }
}

export default Modal;