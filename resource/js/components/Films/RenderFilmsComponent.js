import FilmComponent from "./FilmComponent";
import {renderDom} from "../../utils/render";
import {FILM_COUNT, SHOWING_FILMS_FROM_LOAD_MORE, SHOWING_FILMS_FROM_FIRST_PAGE} from "../../const";

export default class RenderFilmsComponent{
    constructor(filmsListElement, films) {
        this._films = films;
        this._filmsListElement = filmsListElement;
        this._countRendeingFilms = 0;
    }

    renderFirstPage(){
        this._films.slice(0, SHOWING_FILMS_FROM_FIRST_PAGE).map(film => {
            const filmElement = new FilmComponent(film).getElement();

            filmElement.addEventListener(`click`, () => {});

            renderDom(this._filmsListElement, filmElement, `before`)
        });

        this._countRendeingFilms = SHOWING_FILMS_FROM_FIRST_PAGE;
    }

    renderLoadMore(){
        const lastIndexFilmInLoad = this._countRendeingFilms + SHOWING_FILMS_FROM_LOAD_MORE;

        this._films.slice(this._countRendeingFilms, lastIndexFilmInLoad).map(film => {
            const filmElement = new FilmComponent(film).getElement();

            renderDom(this._filmsListElement, filmElement, `before`);
        });

        this._countRendeingFilms += SHOWING_FILMS_FROM_LOAD_MORE;
    }

    checkingEndFilmList(){
        return this._countRendeingFilms >= FILM_COUNT
    }
}