import {createElement} from "../../utils/createElement";

const createFilmTemplate = (film) => {
    const {img, name, description, date_of_release} = film;
    return (`
            <div class="main__items-rows__item">
                <img src="${img}" alt="Film">
                <div class="name">${name}</div>
                <div class="description">${description}</div>
                <div class="date_of_release">${date_of_release}</div>
                <button>More info</button>
            </div>
  `);
};

export default class FilmComponent {
    constructor(film){
        this._film = film;
        this._element = null;
    }

    getTemplate(){
        return createFilmTemplate(this._film)
    }

    getElement(){
        if(this._element === null){
           this._element = createElement(this.getTemplate());
        }

        return this._element
    }

    removeElement(){
        this._element = null;
    }
}