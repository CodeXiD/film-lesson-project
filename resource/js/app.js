import {renderDom} from "./utils/render";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import FilmsComponent from "./components/Films/FilmsComponent";
import RenderFilmsComponent from "./components/Films/RenderFilmsComponent";
import {generateFilms} from "./mock/film";
import LoadMoreButtonComponent from "./components/Films/LoadMoreButtonComponent";

const appElement = document.querySelector(`#app`);

renderDom(appElement, new HeaderComponent().getElement(), `before`);                // РЕНДЕРИМ HEADER
renderDom(appElement, new FilmsComponent().getElement(), `before`);                 // РЕНДЕРИМ ОБЩЕЕ ПОЛЕ ДЛЯ ФИЛЬМОВ
renderDom(appElement, new FooterComponent().getElement(), `before`);                // РЕНДЕРИМ FOOTER
new RenderFilmsComponent(`#films-board`, generateFilms(10)).render();   // РЕНДЕРИМ ФИЛЬМЫ



const renderLoadMoreButton = () => {
    const buttonElement = new LoadMoreButtonComponent().getElement();
    buttonElement.addEventListener(`click`, () => {});
    renderDom(appElement.querySelector(`#main`), buttonElement, `before`);
};


renderLoadMoreButton();     // РЕНДЕР КНОПКИ ПОДРУЗКИ ФИЛЬМОВ + СОБЫТИЕ НАЖАНИЯ
