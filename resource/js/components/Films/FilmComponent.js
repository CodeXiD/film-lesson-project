import AbstractComponent from "../AbstractComponent";

const createFilmTemplate = (film) => {
    const {img, name, description, date_of_release} = film;
    return (`
            <div class="main__items-rows__item">
                <img src="${img}" alt="Film">
                <div class="name">${name}</div>
                <div class="description">${description}</div>
                <button class="more_info">More info</button>
                <div class="date_of_release">${date_of_release}</div>
            </div>
  `);
};

export default class FilmComponent extends AbstractComponent{
    constructor(film){
        super();
        this._film = film;
    }

    getTemplate(){
        return createFilmTemplate(this._film)
    }

    setClickOfButtonMoreInfoHandler(handler){
        this.getElement().querySelector(`.more_info`).addEventListener(`click`, handler);
    }
}