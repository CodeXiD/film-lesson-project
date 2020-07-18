import {createElement} from "../utils/createElement";

const headerTemplate = () => {
    return (`
            <div class="header">
                <div class="header__logo">
                    FilmBro
                </div>
                <div class="header__menu">
                    <a class="header__menu__item">Item #1</a>
                    <a class="header__menu__item">Item #2</a>
                    <a class="header__menu__item">Item #3</a>
                    <a class="header__menu__item">Item #4</a>
                    <a class="header__menu__item">Item #11</a>
                </div>
            </div>
        `);
};

export default class HeaderComponent {
    constructor() {
        this._element = null;
    }

    getTemplate(){
        return headerTemplate();
    }

    getElement(){
        if(this._element === null) {
            this._element = createElement(this.getTemplate());
        }

        return this._element;
    }

    removeElement(){
        this._element = null;
    }
}