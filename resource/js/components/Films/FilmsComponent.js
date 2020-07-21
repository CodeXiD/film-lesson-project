import AbstractComponent from "../AbstractComponent";

const createFilmsTemplate = () => {

    return (`
            <section id="main">
                <div class="films__title">
                    <div class="title">Лучшие фильмы</div>
                    <div class="view-type-films"></div>
                </div>
                <div class="main__items-rows" id="films-board">
                    
                </div>
            </section>
        `);
};

export default class FilmsComponent extends AbstractComponent{
    getTemplate() {
        return createFilmsTemplate();
    }
}