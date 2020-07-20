import {renderDom} from "./utils/render";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import FilmsComponent from "./components/Films/FilmsComponent";
import {generateFilms} from "./mock/film";
import LoadMoreButtonComponent from "./components/Films/LoadMoreButtonComponent";
import {FILM_COUNT} from "./const";
import FilmsController from "./controllers/FilmsController";

const appElement = document.querySelector(`#app`);
const films = generateFilms(FILM_COUNT);


renderDom(appElement, new HeaderComponent(), `before`);                // РЕНДЕРИМ HEADER
renderDom(appElement, new FilmsComponent(), `before`);                 // РЕНДЕРИМ ОБЩЕЕ ПОЛЕ ДЛЯ ФИЛЬМОВ
renderDom(appElement, new FooterComponent(), `before`);                // РЕНДЕРИМ FOOTER

const listFilmsElement = document.querySelector(`#films-board`);

const buttonLoadMoreFilms = new LoadMoreButtonComponent();

const renderLoadMoreButton = () => {
    if(films.length === 0) return;

    buttonLoadMoreFilms.setClickHandler(function() {
        Films.render(films);
    });

    renderDom(appElement.querySelector(`#main`), buttonLoadMoreFilms, `before`);
};


renderLoadMoreButton();     // РЕНДЕР КНОПКИ ПОДРУЗКИ ФИЛЬМОВ + СОБЫТИЕ НАЖАНИЯ

const Films = new FilmsController(listFilmsElement, buttonLoadMoreFilms);
Films.render(films);
