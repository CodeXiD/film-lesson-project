import AbstractComponent from "../AbstractComponent";
import moment from 'moment';

const createFilmTemplate = (film, viewType) => {
    const {img, name, description, date_of_release} = film;
    const date_of_release_normalize_format = moment(date_of_release).format(`DD.MM.YYYY`);
    return (`
            <div class="main__items-rows__item ${viewType}">
                <img src="${img}" alt="Film">
                <div class="main-information">
                    <div class="mini_name">${name}</div>
                    <div class="description mini">${description}</div>
                    <button class="more_info">Подробнее</button>
                </div>
                
                <div class="date_of_release">${date_of_release_normalize_format}</div>
            </div>
  `);
};

export default class FilmComponent extends AbstractComponent{
    constructor(film, viewType){
        super();
        this._film = film;
        this._viewType = viewType;
    }

    getTemplate(){
        return createFilmTemplate(this._film, this._viewType)
    }

    setClickOfButtonMoreInfoHandler(handler){
        this.getElement().querySelector(`.more_info`).addEventListener(`click`, handler);
    }
}