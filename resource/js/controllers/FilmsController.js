import FilmComponent from "../components/films/FilmComponent";
import {renderDom} from "../utils/render";
import FilmMoreInfoComponent from "../components/films/FilmMoreInfoComponent";
import {SHOWING_FILMS_FROM_LOAD_MORE, SHOWING_FILMS_FROM_FIRST_PAGE} from "../const";
import NoFilmsComponent from "../components/films/NoFilmsComponent";
import {removeComponent} from "../utils/removeComponent";

export default class FilmsController{
    constructor(container, buttonLoadMoreFilms) {
        this._container = container;
        this._countRendeingFilms = 0;
        this._buttonLoadFilmsComponent = buttonLoadMoreFilms;
    }

    render(films){

        if(films.length === 0) this.renderEmptyFilmList();

        let countNewFilms = SHOWING_FILMS_FROM_LOAD_MORE;
        if(this._countRendeingFilms === 0) countNewFilms = SHOWING_FILMS_FROM_FIRST_PAGE;

        films.slice(this._countRendeingFilms, this._countRendeingFilms + countNewFilms).map(film => {
            const Film = new FilmComponent(film);
            const FilmMoreInfo = new FilmMoreInfoComponent(film);
            const filmElement = Film.getElement();
            const filmMoreInfoElement = FilmMoreInfo.getElement();


            Film.setClickOfButtonMoreInfoHandler(() => {
                filmElement.replaceWith(filmMoreInfoElement);
            });


            FilmMoreInfo.setClickOfButtonMainInfoHandler(() => {
                filmMoreInfoElement.replaceWith(filmElement);
            });

            renderDom(this._container, Film, `before`)
        });

        this._countRendeingFilms = this._countRendeingFilms + countNewFilms;

        if(this._countRendeingFilms > films.length){
            removeComponent(this._buttonLoadFilmsComponent);
        }
    }

    renderEmptyFilmList(){
        renderDom(this._container, new NoFilmsComponent(), `before`);
    }
}