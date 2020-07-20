/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "dist";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./resource/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resource/js/app.js":
/*!****************************!*\
  !*** ./resource/js/app.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/render */ "./resource/js/utils/render.js");
/* harmony import */ var _components_HeaderComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/HeaderComponent */ "./resource/js/components/HeaderComponent.js");
/* harmony import */ var _components_FooterComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/FooterComponent */ "./resource/js/components/FooterComponent.js");
/* harmony import */ var _components_Films_FilmsComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Films/FilmsComponent */ "./resource/js/components/Films/FilmsComponent.js");
/* harmony import */ var _mock_film__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mock/film */ "./resource/js/mock/film.js");
/* harmony import */ var _components_Films_LoadMoreButtonComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Films/LoadMoreButtonComponent */ "./resource/js/components/Films/LoadMoreButtonComponent.js");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./const */ "./resource/js/const.js");
/* harmony import */ var _controllers_FilmsController__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./controllers/FilmsController */ "./resource/js/controllers/FilmsController.js");









const appElement = document.querySelector(`#app`);
const films = Object(_mock_film__WEBPACK_IMPORTED_MODULE_4__["generateFilms"])(_const__WEBPACK_IMPORTED_MODULE_6__["FILM_COUNT"]);


Object(_utils_render__WEBPACK_IMPORTED_MODULE_0__["renderDom"])(appElement, new _components_HeaderComponent__WEBPACK_IMPORTED_MODULE_1__["default"](), `before`);                // РЕНДЕРИМ HEADER
Object(_utils_render__WEBPACK_IMPORTED_MODULE_0__["renderDom"])(appElement, new _components_Films_FilmsComponent__WEBPACK_IMPORTED_MODULE_3__["default"](), `before`);                 // РЕНДЕРИМ ОБЩЕЕ ПОЛЕ ДЛЯ ФИЛЬМОВ
Object(_utils_render__WEBPACK_IMPORTED_MODULE_0__["renderDom"])(appElement, new _components_FooterComponent__WEBPACK_IMPORTED_MODULE_2__["default"](), `before`);                // РЕНДЕРИМ FOOTER

const listFilmsElement = document.querySelector(`#films-board`);

const buttonLoadMoreFilms = new _components_Films_LoadMoreButtonComponent__WEBPACK_IMPORTED_MODULE_5__["default"]();

const renderLoadMoreButton = () => {
    if(films.length === 0) return;

    buttonLoadMoreFilms.setClickHandler(function() {
        Films.render(films);
    });

    Object(_utils_render__WEBPACK_IMPORTED_MODULE_0__["renderDom"])(appElement.querySelector(`#main`), buttonLoadMoreFilms, `before`);
};


renderLoadMoreButton();     // РЕНДЕР КНОПКИ ПОДРУЗКИ ФИЛЬМОВ + СОБЫТИЕ НАЖАНИЯ

const Films = new _controllers_FilmsController__WEBPACK_IMPORTED_MODULE_7__["default"](listFilmsElement, buttonLoadMoreFilms);
Films.render(films);


/***/ }),

/***/ "./resource/js/components/AbstractComponent.js":
/*!*****************************************************!*\
  !*** ./resource/js/components/AbstractComponent.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AbstractComponent; });
/* harmony import */ var _utils_createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/createElement */ "./resource/js/utils/createElement.js");


class AbstractComponent{
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
            this._element = Object(_utils_createElement__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
        }

        return this._element;
    }

    removeElement(){
        this._element = null;
    }
}

/***/ }),

/***/ "./resource/js/components/Films/FilmsComponent.js":
/*!********************************************************!*\
  !*** ./resource/js/components/Films/FilmsComponent.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FilmsComponent; });
/* harmony import */ var _AbstractComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../AbstractComponent */ "./resource/js/components/AbstractComponent.js");


const createFilmsTemplate = () => {

    return (`
            <section id="main">
                <div class="films__title"><div class="title">Лучшие фильмы</div></div>
                <div class="main__items-rows" id="films-board">
                    
                </div>
            </section>
        `);
};

class FilmsComponent extends _AbstractComponent__WEBPACK_IMPORTED_MODULE_0__["default"]{
    getTemplate() {
        return createFilmsTemplate();
    }
}

/***/ }),

/***/ "./resource/js/components/Films/LoadMoreButtonComponent.js":
/*!*****************************************************************!*\
  !*** ./resource/js/components/Films/LoadMoreButtonComponent.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LoadMoreButtonComponent; });
/* harmony import */ var _AbstractComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../AbstractComponent */ "./resource/js/components/AbstractComponent.js");


const template = () => {
  return (
      `<button id="load-more">Load more</button>`
  );
};

class LoadMoreButtonComponent extends _AbstractComponent__WEBPACK_IMPORTED_MODULE_0__["default"]{
    getTemplate() {
        return template();
    }

    setClickHandler(handler){
        this.getElement().addEventListener(`click`, handler);
    }
}

/***/ }),

/***/ "./resource/js/components/FooterComponent.js":
/*!***************************************************!*\
  !*** ./resource/js/components/FooterComponent.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FooterComponent; });
/* harmony import */ var _AbstractComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractComponent */ "./resource/js/components/AbstractComponent.js");


const footerTemplate = () => {
    return (`
            <section id="footer">
                <div class="copyright">Lesson 1 2020</div>
                <div class="author">Tkachenko Kirill Alex</div>
            </section>
        `);
};

class FooterComponent extends _AbstractComponent__WEBPACK_IMPORTED_MODULE_0__["default"]{
    getTemplate(){
        return footerTemplate();
    }
}

/***/ }),

/***/ "./resource/js/components/HeaderComponent.js":
/*!***************************************************!*\
  !*** ./resource/js/components/HeaderComponent.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HeaderComponent; });
/* harmony import */ var _AbstractComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractComponent */ "./resource/js/components/AbstractComponent.js");


const headerTemplate = () => {
    return (`
            <div class="header">
                <div class="header__logo">
                    FilmBro
                </div>
                <div class="header__menu">
                    <a class="header__menu__item">Item #1</a>
                    <a class="header__menu__item">Item #2</a>
                    <a class="header__menu__item">Item #3</a>
                    <a class="header__menu__item">Item #4</a>
                    <a class="header__menu__item">Item #11</a>
                </div>
            </div>
        `);
};

class HeaderComponent extends _AbstractComponent__WEBPACK_IMPORTED_MODULE_0__["default"]{
    getTemplate(){
        return headerTemplate();
    }
}

/***/ }),

/***/ "./resource/js/components/films/FilmComponent.js":
/*!*******************************************************!*\
  !*** ./resource/js/components/films/FilmComponent.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FilmComponent; });
/* harmony import */ var _AbstractComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../AbstractComponent */ "./resource/js/components/AbstractComponent.js");


const createFilmTemplate = (film) => {
    const {img, name, description, date_of_release} = film;
    return (`
            <div class="main__items-rows__item">
                <img src="${img}" alt="Film">
                <div class="name">${name}</div>
                <div class="description">${description}</div>
                <button class="more_info">More info</button>
                <div class="date_of_release">${date_of_release}</div>
            </div>
  `);
};

class FilmComponent extends _AbstractComponent__WEBPACK_IMPORTED_MODULE_0__["default"]{
    constructor(film){
        super();
        this._film = film;
    }

    getTemplate(){
        return createFilmTemplate(this._film)
    }

    setClickOfButtonMoreInfoHandler(handler){
        this.getElement().querySelector(`.more_info`).addEventListener(`click`, handler);
    }
}

/***/ }),

/***/ "./resource/js/components/films/FilmMoreInfoComponent.js":
/*!***************************************************************!*\
  !*** ./resource/js/components/films/FilmMoreInfoComponent.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FilmMoreInfoComponent; });
/* harmony import */ var _AbstractComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../AbstractComponent */ "./resource/js/components/AbstractComponent.js");


const template = (film) => {
    const {img, name, description, moreDescription, date_of_release} = film;
    return (`
            <div class="main__items-rows__item">
                <img src="${img}" alt="Film">
                <div class="name">${name}</div>
                <div class="description">${description}</div>
                <div class="more_description">${moreDescription}</div>
                <button class="close_info">Close</button>
                <div class="date_of_release">${date_of_release}</div>
            </div>
  `);
};

class FilmMoreInfoComponent extends _AbstractComponent__WEBPACK_IMPORTED_MODULE_0__["default"]{
    constructor(film){
        super();

        this._film = film;
    }

    getTemplate(){
        return template(this._film)
    }

    setClickOfButtonMainInfoHandler(handler){
        this.getElement().querySelector(`.close_info`).addEventListener(`click`, handler);
    }
}

/***/ }),

/***/ "./resource/js/components/films/NoFilmsComponent.js":
/*!**********************************************************!*\
  !*** ./resource/js/components/films/NoFilmsComponent.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NoFilmsComponent; });
/* harmony import */ var _AbstractComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../AbstractComponent */ "./resource/js/components/AbstractComponent.js");


const template = () => {
    return (`
            <div class="empty-films">Films is empty</div>
    `);
};

class NoFilmsComponent extends _AbstractComponent__WEBPACK_IMPORTED_MODULE_0__["default"]{
    getTemplate(){
        return template()
    }
}

/***/ }),

/***/ "./resource/js/const.js":
/*!******************************!*\
  !*** ./resource/js/const.js ***!
  \******************************/
/*! exports provided: FILM_COUNT, SHOWING_FILMS_FROM_FIRST_PAGE, SHOWING_FILMS_FROM_LOAD_MORE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FILM_COUNT", function() { return FILM_COUNT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHOWING_FILMS_FROM_FIRST_PAGE", function() { return SHOWING_FILMS_FROM_FIRST_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHOWING_FILMS_FROM_LOAD_MORE", function() { return SHOWING_FILMS_FROM_LOAD_MORE; });
const FILM_COUNT = 20;
const SHOWING_FILMS_FROM_FIRST_PAGE = 8;
const SHOWING_FILMS_FROM_LOAD_MORE = 8;



/***/ }),

/***/ "./resource/js/controllers/FilmsController.js":
/*!****************************************************!*\
  !*** ./resource/js/controllers/FilmsController.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FilmsController; });
/* harmony import */ var _components_films_FilmComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/films/FilmComponent */ "./resource/js/components/films/FilmComponent.js");
/* harmony import */ var _utils_render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/render */ "./resource/js/utils/render.js");
/* harmony import */ var _components_films_FilmMoreInfoComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/films/FilmMoreInfoComponent */ "./resource/js/components/films/FilmMoreInfoComponent.js");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../const */ "./resource/js/const.js");
/* harmony import */ var _components_films_NoFilmsComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/films/NoFilmsComponent */ "./resource/js/components/films/NoFilmsComponent.js");
/* harmony import */ var _utils_removeComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/removeComponent */ "./resource/js/utils/removeComponent.js");







class FilmsController{
    constructor(container, buttonLoadMoreFilms) {
        this._container = container;
        this._countRendeingFilms = 0;
        this._buttonLoadFilmsComponent = buttonLoadMoreFilms;
    }

    render(films){

        if(films.length === 0) this.renderEmptyFilmList();

        let countNewFilms = _const__WEBPACK_IMPORTED_MODULE_3__["SHOWING_FILMS_FROM_LOAD_MORE"];
        if(this._countRendeingFilms === 0) countNewFilms = _const__WEBPACK_IMPORTED_MODULE_3__["SHOWING_FILMS_FROM_FIRST_PAGE"];

        films.slice(this._countRendeingFilms, this._countRendeingFilms + countNewFilms).map(film => {
            const Film = new _components_films_FilmComponent__WEBPACK_IMPORTED_MODULE_0__["default"](film);
            const FilmMoreInfo = new _components_films_FilmMoreInfoComponent__WEBPACK_IMPORTED_MODULE_2__["default"](film);
            const filmElement = Film.getElement();
            const filmMoreInfoElement = FilmMoreInfo.getElement();


            Film.setClickOfButtonMoreInfoHandler(() => {
                filmElement.replaceWith(filmMoreInfoElement);
            });


            FilmMoreInfo.setClickOfButtonMainInfoHandler(() => {
                filmMoreInfoElement.replaceWith(filmElement);
            });

            Object(_utils_render__WEBPACK_IMPORTED_MODULE_1__["renderDom"])(this._container, Film, `before`)
        });

        this._countRendeingFilms = this._countRendeingFilms + countNewFilms;

        if(this._countRendeingFilms > films.length){
            Object(_utils_removeComponent__WEBPACK_IMPORTED_MODULE_5__["removeComponent"])(this._buttonLoadFilmsComponent);
        }
    }

    renderEmptyFilmList(){
        Object(_utils_render__WEBPACK_IMPORTED_MODULE_1__["renderDom"])(this._container, new _components_films_NoFilmsComponent__WEBPACK_IMPORTED_MODULE_4__["default"](), `before`);
    }
}

/***/ }),

/***/ "./resource/js/mock/film.js":
/*!**********************************!*\
  !*** ./resource/js/mock/film.js ***!
  \**********************************/
/*! exports provided: generateFilms, generateFilm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateFilms", function() { return generateFilms; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateFilm", function() { return generateFilm; });
/* harmony import */ var _utils_getRandomInteger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/getRandomInteger */ "./resource/js/utils/getRandomInteger.js");


const generateDateReleaseFilm = () => {
    return Date.now()
};

const generateImageFilm = () => {
    const images = [
        `https://www.film.ru/sites/default/files/styles/thumb_120x170/public/movies/posters/20910053-1161547.jpg`,
        `https://image.kinokrad.co/p/f/1587564593_bessmertnyy.jpeg`,
        `https://thumbs.dfs.ivi.ru/storage8/contents/2/b/3fdbf52c5bd856e029ce35b0c39ad8.jpg/234x360/`,
        `https://filmive-hd.net/uploads/posts/2020-04/1585949785-810005264-glavnyy-geroy-1.jpg`,
        `https://www.megacritic.ru/media/reviews/photos/original/92/57/e1/smotri-kak-ya-91-1583252241.jpg`,
        `https://dostfilms.biz/uploads/posts/2020-05/1588770128-1500164518-moy-sozdatel.jpg`
    ];

    const imageIndex = Object(_utils_getRandomInteger__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(images.length);

    return images[imageIndex];
};

const generateNameFilm = () => {
    const names = [
        `The Willoughbys`,
        `Гламурные боссы`,
        `Лев Яшин. Вратарь моей мечты`,
        `Красные туфельки и 7 гномов`,
        `Спрячь бабушку в холодильнике`,
        `Тридцать`,
        `Кошки`,
        `Нотр-Дам`
    ];

    const nameIndex = Object(_utils_getRandomInteger__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(names.length);

    return names[nameIndex];
};

const generateFilm = () => {
    return {
        img: generateImageFilm(),
        name: generateNameFilm(),
        description: `Example description film :)`,
        moreDescription: `Suscipit tellus mauris a diam maecenas sed enim ut sem viverra aliquet eget sit amet tellus cras adipiscing enim eu turpis egestas pretium aenean pharetra`,
        date_of_release: generateDateReleaseFilm()
    };
};

const generateFilms = (count = 1) => {
    return new Array(count).fill(``).map(generateFilm);
};



/***/ }),

/***/ "./resource/js/utils/createElement.js":
/*!********************************************!*\
  !*** ./resource/js/utils/createElement.js ***!
  \********************************************/
/*! exports provided: createElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
const createElement = (template) => {
    const newElement = document.createElement(`div`);
    newElement.innerHTML = template;

    return newElement.firstElementChild;
};

/***/ }),

/***/ "./resource/js/utils/getRandomInteger.js":
/*!***********************************************!*\
  !*** ./resource/js/utils/getRandomInteger.js ***!
  \***********************************************/
/*! exports provided: getRandomInteger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomInteger", function() { return getRandomInteger; });
const getRandomInteger = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
}



/***/ }),

/***/ "./resource/js/utils/removeComponent.js":
/*!**********************************************!*\
  !*** ./resource/js/utils/removeComponent.js ***!
  \**********************************************/
/*! exports provided: removeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeComponent", function() { return removeComponent; });
const removeComponent = (component) => {
    component.getElement().remove();
    component.removeElement();
};



/***/ }),

/***/ "./resource/js/utils/render.js":
/*!*************************************!*\
  !*** ./resource/js/utils/render.js ***!
  \*************************************/
/*! exports provided: renderDom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderDom", function() { return renderDom; });
const renderDom = (container, component, position) => {
    switch (position) {
        case `after`:
            container.prepend(component.getElement());
            break;
        case `before`:
            container.append(component.getElement());
            break;
    }
};

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map