import AbstractComponent from "../AbstractComponent";
import moment from 'moment';

const createFilmTemplate = (film) => {
    const {img, name, description, date_of_release} = film;
    const date_of_release_normalize_format = moment(date_of_release).format(`DD.MM.YYYY`);
    return (`
            <div class="main__items-rows__item">
                <img src="${img}" alt="Film">
                <div class="mini_name">${name}</div>
                <div class="description mini">${description}</div>
                <button class="more_info">Подробнее</button>
                <div class="date_of_release">${date_of_release_normalize_format}</div>
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