import AbstractComponent from "./AbstractComponent";

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

export default class HeaderComponent extends AbstractComponent{
    getTemplate(){
        return headerTemplate();
    }
}