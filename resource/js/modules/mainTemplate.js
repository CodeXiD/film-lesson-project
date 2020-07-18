import {createFilmsTemplate} from "./films/filmsTemplate";

const mainTemplate = () => {
    return (`
            <section id="main">
                ${createFilmsTemplate()}
            </section>
        `);
};

export {mainTemplate};