import FilmComponent from "../components/films/FilmComponent";
import {renderDom} from "../utils/render";
import FilmMoreInfoComponent from "../components/films/FilmMoreInfoComponent";
import {SHOWING_FILMS_FROM_LOAD_MORE, SHOWING_FILMS_FROM_FIRST_PAGE} from "../const";
import NoFilmsComponent from "../components/films/NoFilmsComponent";
import {removeComponent} from "../utils/removeComponent";
import ViewTypesComponent from "../components/Films/ViewTypesComponent";

export default class FilmsController{
    constructor(container, buttonLoadMoreFilms) {
        this._container = container;
        this._countRendeingFilms = 0;
        this._buttonLoadFilmsComponent = buttonLoadMoreFilms;
        this._viewTypesContainer = document.querySelector(`.view-type-films`);
        this._viewType = new ViewTypesComponent(`row`);
        this.renderViewType();
    }

    render(films){
        this._films = films;

        if(this._films.length === 0) this.renderEmptyFilmList();

        let countNewFilms = SHOWING_FILMS_FROM_LOAD_MORE;
        if(this._countRendeingFilms === 0) countNewFilms = SHOWING_FILMS_FROM_FIRST_PAGE;

        films.slice(this._countRendeingFilms, this._countRendeingFilms + countNewFilms).map(film => {
            const Film = new FilmComponent(film, this._viewType.getViewType());
            const FilmMoreInfo = new FilmMoreInfoComponent(film, this._viewType.getViewType());
            const filmElement = Film.getElement();
            const filmMoreInfoElement = FilmMoreInfo.getElement();


            Film.setClickOfButtonMoreInfoHandler(() => {
                filmElement.replaceWith(filmMoreInfoElement);
            });


            FilmMoreInfo.setClickOfButtonMainInfoHandler(() => {
                filmMoreInfoElement.replaceWith(filmElement);
            });

            renderDom(this._container, Film, `before`);
        });

        this._countRendeingFilms = this._countRendeingFilms + countNewFilms;

        if(this._countRendeingFilms > this._films.length){
            removeComponent(this._buttonLoadFilmsComponent);
        }



    }

    renderEmptyFilmList(){
        renderDom(this._container, new NoFilmsComponent(), `before`);
    }

    renderViewType(viewType = `row`){
        this._viewType.setViewType(viewType);

        this._viewType.setClickChooseViewTypeHandler((evt) => {
            const newViewType = evt.currentTarget.dataset.viewType;
            if(this._viewType.getViewType() !== newViewType){
                this._container.innerHTML = ``;
                this._countRendeingFilms = 0;
                 removeComponent(this._viewType);
                this.renderViewType(newViewType);
                this._countRendeingFilms = 0;
                this.render(this._films);
            }
        });
        renderDom(this._viewTypesContainer, this._viewType, `before`);


    }
}