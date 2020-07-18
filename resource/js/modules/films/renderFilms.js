import {generateFilms} from "../../mock/film";
import {FILM_COUNT, SHOWING_FILMS_FROM_FIRST_PAGE, SHOWING_FILMS_FROM_LOAD_MODE} from "../../const";
import {filmTemplate} from "./filmTemplate";
import {render} from "../../utils/render";
import {createFilmsTemplate} from "./filmsTemplate";


const films = generateFilms(FILM_COUNT);
let showingFilms = 0;
let viewTypeFilms = `rows`;

const renderFilms = (mode = `render`) => {

    if(mode === `render`){
        if(showingFilms === 0){
            showingFilms += SHOWING_FILMS_FROM_FIRST_PAGE;
            return films.slice(0, SHOWING_FILMS_FROM_FIRST_PAGE).map(film => filmTemplate(film)).join(``);
        }else{
            const boardFilms = document.querySelector(`#films`);
            const buttonLoadMore = boardFilms.querySelector(`#load-more`);

            if(showingFilms >= FILM_COUNT) return false;

            films.slice(showingFilms, showingFilms+SHOWING_FILMS_FROM_LOAD_MODE).forEach((film) => {
                render(`#films .main__items-rows`, filmTemplate(film));
            });

            showingFilms += SHOWING_FILMS_FROM_LOAD_MODE;
            if(showingFilms >= FILM_COUNT) buttonLoadMore.remove();
        }

    }else if(mode === `rerender`){
        showingFilms = 0;
        renderFilms();
    }
};

const changeViewTypeFilm = (newType) => {
    viewTypeFilms = newType;
};




export {createFilmsTemplate, showingFilms, films, renderFilms, viewTypeFilms, changeViewTypeFilm};