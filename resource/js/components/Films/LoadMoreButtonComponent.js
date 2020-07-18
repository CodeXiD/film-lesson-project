import {createElement} from "../../utils/createElement";

const template = () => {
  return (
      `<button id="load-more">Load more</button>`
  );
};

export default class LoadMoreButtonComponent{
    constructor() {
        this._element = null;
    }

    getTemplate(){
        return template();
    }

    getElement(){
        if(this._element === null){
            this._element = createElement(template());
        }

        return this._element;
    }

    removeElement(){
        this._element = null;
    }
}