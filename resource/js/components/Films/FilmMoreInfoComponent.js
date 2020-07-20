import AbstractComponent from "../AbstractComponent";

const template = (film) => {
    const {img, name, description, moreDescription, date_of_release} = film;
    return (`
            <div class="main__items-rows__item">
                <img src="${img}" alt="Film">
                <div class="name">${name}</div>
                <div class="description">${description}</div>
                <div class="more_description">${moreDescription}</div>
                <button class="close_info">Close</button>
                <div class="date_of_release">${date_of_release}</div>
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