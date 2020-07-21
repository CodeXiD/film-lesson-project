import AbstractComponent from "../AbstractComponent";
import moment from "moment";

const template = (film, viewType) => {
    const {img, name, description, moreDescription, date_of_release} = film;
    const date_of_release_normalize_format = moment(date_of_release).format(`DD.MM.YYYY`);
    return (`
            <div class="main__items-rows__item ${viewType} active">
                <img src="${img}" alt="Film">
                <div class="main-information">
                    <div class="full_name">${name}</div>
                    <div class="description">${description}</div>
                    <div class="more_description">${moreDescription}</div>
                    <button class="close_info">Скрыть</button>
                </div>
                <div class="date_of_release">${date_of_release_normalize_format}</div>
            </div>
  `);
};

export default class FilmMoreInfoComponent extends AbstractComponent{
    constructor(film, viewType){
        super();

        this._film = film;
        this._viewType = viewType;
    }

    getTemplate(){
        return template(this._film, this._viewType)
    }

    setClickOfButtonMainInfoHandler(handler){
        this.getElement().querySelector(`.close_info`).addEventListener(`click`, handler);
    }
}