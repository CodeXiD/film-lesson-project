import {headerTemplate} from "./modules/headerTemplate";
import {mainTemplate} from "./modules/mainTemplate";
import {footerTemplate} from "./modules/footerTemplate";
import {render} from "./utils/render";
import {renderFilms, changeViewTypeFilm} from "./modules/films/renderFilms";

render(`#app`, headerTemplate());
render(`#app`, mainTemplate());
render(`#app`, footerTemplate());

document.querySelector(`#films #load-more`).addEventListener(`click`, () => {
    renderFilms();
});

document.querySelector(`section#films > .films__title > #view-type-films > .rows`).addEventListener(`click`, () => {
    changeViewTypeFilm(`rows`);
    // eslint-disable-next-line no-console
    console.log(`rows`)
    renderFilms(`rerender`);
});

document.querySelector(`section#films > .films__title > #view-type-films > .lines`).addEventListener(`click`, () => {
    changeViewTypeFilm(`lines`);
    // eslint-disable-next-line no-console
    console.log(`lines`)
    renderFilms(`rerender`);
});
