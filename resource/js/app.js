import {renderDom} from "./utils/render";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import FilmsComponent from "./components/Films/FilmsComponent";
import RenderFilmsComponent from "./components/Films/RenderFilmsComponent";
import {generateFilms} from "./mock/film";
import LoadMoreButtonComponent from "./components/Films/LoadMoreButtonComponent";
import {FILM_COUNT} from "./const";

const appElement = document.querySelector(`#app`);
const films = generateFilms(FILM_COUNT);


renderDom(appElement, new HeaderComponent().getElement(), `before`);                // РЕНДЕРИМ HEADER
renderDom(appElement, new FilmsComponent().getElement(), `before`);                 // РЕНДЕРИМ ОБЩЕЕ ПОЛЕ ДЛЯ ФИЛЬМОВ
renderDom(appElement, new FooterComponent().getElement(), `before`);                // РЕНДЕРИМ FOOTER

const listFilmsElement = document.querySelector(`#films-board`);

const renderingFilms = new RenderFilmsComponent(listFilmsElement, films);
renderingFilms.renderFirstPage();       // РЕНДЕРИМ ФИЛЬМЫ



const renderLoadMoreButton = () => {
    if(films.length === 0) return;
    const buttonElement = new LoadMoreButtonComponent(renderingFilms).getElement();
    renderDom(appElement.querySelector(`#main`), buttonElement, `before`);
};


renderLoadMoreButton();     // РЕНДЕР КНОПКИ ПОДРУЗКИ ФИЛЬМОВ + СОБЫТИЕ НАЖАНИЯ
