import {createElement} from "../../utils/createElement";

const createFilmsTemplate = () => {

    return (`
            <section id="main">
                <div class="films__title"><div class="title">Лучшие фильмы</div></div>
                <div class="main__items-rows" id="films-board">
                    
                </div>
            </section>
        `);
};

export default class FilmsComponent{
    constructor() {
        this._element = null;
    }

    getTemplate() {
        return createFilmsTemplate();
    }

    getElement(){
        if(this._element === null){
            this._element = createElement(this.getTemplate());
        }

        return this._element;
    }

    removeElement(){
        this._element = null;
    }
}