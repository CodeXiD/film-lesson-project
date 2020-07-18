import FilmComponent from "./FilmComponent";
import {renderDom} from "../../utils/render";

export default class RenderFilmsComponent{
    constructor(filmsListElement, films) {
        this._films = films;
        this._filmsListElement = filmsListElement;
    }

    render(){
        this._films.map(film => {
            const fileBoardElement = document.querySelector(this._filmsListElement);
            const filmElement = new FilmComponent(film).getElement();

            filmElement.addEventListener(`click`, () => {});


            renderDom(fileBoardElement, filmElement, `before`)
        });
    }
}