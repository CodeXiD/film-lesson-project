import {createElement} from "../utils/createElement";

const footerTemplate = () => {
    return (`
            <section id="footer">
                <div class="copyright">Lesson 1 2020</div>
                <div class="author">Tkachenko Kirill Alex</div>
            </section>
        `);
};

export default class FooterComponent {
    constructor() {
        this._element = null;
    }

    getTemplate(){
        return footerTemplate();
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