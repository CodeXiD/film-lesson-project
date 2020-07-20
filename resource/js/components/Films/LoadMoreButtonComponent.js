import {createElement} from "../../utils/createElement";


const template = () => {
  return (
      `<button id="load-more">Load more</button>`
  );
};

export default class LoadMoreButtonComponent{
    constructor(rendering) {
        this._rendering = rendering;
        this._element = null;
    }

    getTemplate(){
        return template();
    }

    getElement(){
        if(this._element === null){
            this._element = createElement(this.getTemplate());
        }

        const self = this;
        this._element.addEventListener(`click`, function() {
            self._rendering.renderLoadMore();

            if(self._rendering.checkingEndFilmList()) {
                self.removeElement();
            }
        });


        return this._element;
    }

    removeElement(){
        this._element.remove();
        this._element = null;
    }
}