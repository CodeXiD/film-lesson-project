import {createElement} from "../../utils/createElement";

const template = () => {
    return (`
            <div class="empty-films">Films is empty</div>
    `);
};

export default class NoFilmsComponent {
    constructor(){
        this._element = null;
    }

    getTemplate(){
        return template()
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