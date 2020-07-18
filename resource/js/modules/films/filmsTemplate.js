import {renderFilms} from "./renderFilms";
import {createViewTypeFilmsTemplate} from "./createViewTypeFilmsTemplate";

export const createFilmsTemplate = () => {

    return (`
            <section id="films">
                <div class="films__title"><div class="title">Лучшие фильмы</div> ${createViewTypeFilmsTemplate()}</div>
                <div class="main__items-rows">
                    ${renderFilms()}
                </div>
                
                <button id="load-more">Load more</button>
            </section>
        `);
};


