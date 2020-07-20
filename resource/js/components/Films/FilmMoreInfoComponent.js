import AbstractComponent from "../AbstractComponent";
import moment from "moment";

const template = (film) => {
    const {img, name, description, moreDescription, date_of_release} = film;
    const date_of_release_normalize_format = moment(date_of_release).format(`DD.MM.YYYY`);
    return (`
            <div class="main__items-rows__item active">
                <img src="${img}" alt="Film">
                <div class="full_name">${name}</div>
                <div class="description">${description}</div>
                <div class="more_description">${moreDescription}</div>
                <button class="close_info">Скрыть</button>
                <div class="date_of_release">${date_of_release_normalize_format}</div>
            </div>
  `);
};

export default class FilmMoreInfoComponent extends AbstractComponent{
    constructor(film){
        super();

        this._film = film;
    }

    getTemplate(){
        return template(this._film)
    }

    setClickOfButtonMainInfoHandler(handler){
        this.getElement().querySelector(`.close_info`).addEventListener(`click`, handler);
    }
}