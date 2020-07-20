import {createElement} from "../utils/createElement";

export default class AbstractComponent{
    constructor() {
        if(new.target === AbstractComponent){
            throw new Error(`Нельзя вызвать абстрактный класс AbstractComponent`);
        }

        this._element = null;
    }

    getTemplate() {
        throw new Error(`Нельзя вызвать абстрактный метод getTemplate() из абстрактнного класса AbstractComponent`);
    }

    getElement(){
        if(this._element === null) {
            this._element = createElement(this.getTemplate());
        }

        return this._element;
    }

    removeElement(){
        this._element = null;
    }
}