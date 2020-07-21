import AbstractComponent from "../AbstractComponent";

const template = (viewType) => {
    return (
            `<div><div class="rows ${(viewType === `row`) ? `active` : ``}" data-view-type="row">
                <svg xmlns="http://www.w3.org/2000/svg" width="434" height="434" viewBox="0 0 433.5 433.5" fill="#fff"><path d="M0 204h127.5V51H0V204zM0 382.5h127.5v-153H0V382.5zM153 382.5h127.5v-153H153V382.5zM306 382.5h127.5v-153H306V382.5zM153 204h127.5V51H153V204zM306 51v153h127.5V51H306z"/></svg>
            </div>
            <div class="lines ${(viewType === `line`) ? `active` : ``}" data-view-type="line">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff"><rect width="512" height="149.3"/><rect y="192" width="512" height="128"/><rect y="362.7" width="512" height="149.3"/></svg>
            </div></div>`
    );
};

export default class ViewTypesComponent extends AbstractComponent{
    constructor(viewType) {
        super();
        this._viewType = viewType;
    }
    getTemplate(){
        return template(this._viewType);
    }

    setViewType(newViewType){
        this._viewType = newViewType;
    }

    getViewType(){
        return this._viewType;
    }

    setClickChooseViewTypeHandler(handler){
        this.getElement().querySelector(`.rows`).addEventListener(`click`, handler);
        this.getElement().querySelector(`.lines`).addEventListener(`click`, handler);
    }
}