import FilmComponent from "./FilmComponent";
import {renderDom} from "../../utils/render";
import FilmMoreInfoComponent from "./FilmMoreInfoComponent";
import {FILM_COUNT, SHOWING_FILMS_FROM_LOAD_MORE, SHOWING_FILMS_FROM_FIRST_PAGE} from "../../const";


export default class RenderFilmsComponent{
    constructor(filmsListElement, films) {
        this._films = films;
        this._filmsListElement = filmsListElement;
        this._countRendeingFilms = 0;
    }

    renderPrepareFilm(film){
        const filmElement = new FilmComponent(film).getElement();
        const buttonElement = filmElement.querySelector(`.more_info`);
        const filmMoreInfoElement = new FilmMoreInfoComponent(film).getElement();
        const filmMoreInfoButtonElement = filmMoreInfoElement.querySelector(`.close_info`);

        const replaceMainInfoToFullInfo = () => {
            filmElement.replaceWith(filmMoreInfoElement);
        };

        buttonElement.addEventListener(`click`, replaceMainInfoToFullInfo);

        const replaceFullInfoToMainInfo = () => {
            filmMoreInfoElement.replaceWith(filmElement);
        };

        filmMoreInfoButtonElement.addEventListener(`click`, replaceFullInfoToMainInfo);


        renderDom(this._filmsListElement, filmElement, `before`)
    }

    renderFirstPage(){
        this._films.slice(0, SHOWING_FILMS_FROM_FIRST_PAGE).map(film => {
            this.renderPrepareFilm(film);
        });

        this._countRendeingFilms = SHOWING_FILMS_FROM_FIRST_PAGE;
    }

    renderLoadMore(){
        const lastIndexFilmInLoad = this._countRendeingFilms + SHOWING_FILMS_FROM_LOAD_MORE;

        this._films.slice(this._countRendeingFilms, lastIndexFilmInLoad).map(film => {
            this.renderPrepareFilm(film);
        });

        this._countRendeingFilms += SHOWING_FILMS_FROM_LOAD_MORE;
    }

    checkingEndFilmList(){
        return this._countRendeingFilms >= FILM_COUNT
    }
}