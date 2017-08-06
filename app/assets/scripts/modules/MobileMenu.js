import $ from 'jquery';

class MobileMenu {
    constructor() {
        this.mobileMenu = $('.site-header__menu-icon');
        this.menuContent = $('.site-header__menu-content');
        this.siteHeader = $('.site-header');
        this.events();
    }

    events() {
        this.mobileMenu.click(this.toggleTheMenu.bind(this));
    }

    toggleTheMenu() {
        this.menuContent.toggleClass('site-header__menu-content--is-visible');
        this.siteHeader.toggleClass('site-header--is-expanded');
        this.mobileMenu.toggleClass('site-header__menu-icon--close-x');
    }
}

export default MobileMenu;