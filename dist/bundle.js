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
/* harmony import */ var _components_Films_RenderFilmsComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Films/RenderFilmsComponent */ "./resource/js/components/Films/RenderFilmsComponent.js");
/* harmony import */ var _mock_film__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mock/film */ "./resource/js/mock/film.js");
/* harmony import */ var _components_Films_LoadMoreButtonComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Films/LoadMoreButtonComponent */ "./resource/js/components/Films/LoadMoreButtonComponent.js");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./const */ "./resource/js/const.js");
// TODO : 1. Доделать подгрузку фильмов +
// TODO : 2. Сделать вывод информации при нажатии на кнопку More Info в карточке фильма
// TODO : 3. Удалить не используемые файлы










const appElement = document.querySelector(`#app`);
const films = Object(_mock_film__WEBPACK_IMPORTED_MODULE_5__["generateFilms"])(_const__WEBPACK_IMPORTED_MODULE_7__["FILM_COUNT"]);


Object(_utils_render__WEBPACK_IMPORTED_MODULE_0__["renderDom"])(appElement, new _components_HeaderComponent__WEBPACK_IMPORTED_MODULE_1__["default"]().getElement(), `before`);                // РЕНДЕРИМ HEADER
Object(_utils_render__WEBPACK_IMPORTED_MODULE_0__["renderDom"])(appElement, new _components_Films_FilmsComponent__WEBPACK_IMPORTED_MODULE_3__["default"]().getElement(), `before`);                 // РЕНДЕРИМ ОБЩЕЕ ПОЛЕ ДЛЯ ФИЛЬМОВ
Object(_utils_render__WEBPACK_IMPORTED_MODULE_0__["renderDom"])(appElement, new _components_FooterComponent__WEBPACK_IMPORTED_MODULE_2__["default"]().getElement(), `before`);                // РЕНДЕРИМ FOOTER

const listFilmsElement = document.querySelector(`#films-board`);

const renderingFilms = new _components_Films_RenderFilmsComponent__WEBPACK_IMPORTED_MODULE_4__["default"](listFilmsElement, films);
renderingFilms.renderFirstPage();       // РЕНДЕРИМ ФИЛЬМЫ



const renderLoadMoreButton = () => {
    const buttonElement = new _components_Films_LoadMoreButtonComponent__WEBPACK_IMPORTED_MODULE_6__["default"](renderingFilms).getElement();
    Object(_utils_render__WEBPACK_IMPORTED_MODULE_0__["renderDom"])(appElement.querySelector(`#main`), buttonElement, `before`);
};


renderLoadMoreButton();     // РЕНДЕР КНОПКИ ПОДРУЗКИ ФИЛЬМОВ + СОБЫТИЕ НАЖАНИЯ


/***/ }),

/***/ "./resource/js/components/Films/FilmComponent.js":
/*!*******************************************************!*\
  !*** ./resource/js/components/Films/FilmComponent.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FilmComponent; });
/* harmony import */ var _utils_createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/createElement */ "./resource/js/utils/createElement.js");


const createFilmTemplate = (film) => {
    const {img, name, description, date_of_release} = film;
    return (`
            <div class="main__items-rows__item">
                <img src="${img}" alt="Film">
                <div class="name">${name}</div>
                <div class="description">${description}</div>
                <div class="date_of_release">${date_of_release}</div>
                <button>More info</button>
            </div>
  `);
};

class FilmComponent {
    constructor(film){
        this._film = film;
        this._element = null;
    }

    getTemplate(){
        return createFilmTemplate(this._film)
    }

    getElement(){
        if(this._element === null){
           this._element = Object(_utils_createElement__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
        }

        return this._element
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
/* harmony import */ var _utils_createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/createElement */ "./resource/js/utils/createElement.js");


const createFilmsTemplate = () => {

    return (`
            <section id="main">
                <div class="films__title"><div class="title">Лучшие фильмы</div></div>
                <div class="main__items-rows" id="films-board">
                    
                </div>
            </section>
        `);
};

class FilmsComponent{
    constructor() {
        this._element = null;
    }

    getTemplate() {
        return createFilmsTemplate();
    }

    getElement(){
        if(this._element === null){
            this._element = Object(_utils_createElement__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
        }

        return this._element;
    }

    removeElement(){
        this._element = null;
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
/* harmony import */ var _utils_createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/createElement */ "./resource/js/utils/createElement.js");



const template = () => {
  return (
      `<button id="load-more">Load more</button>`
  );
};

class LoadMoreButtonComponent{
    constructor(rendering) {
        this._rendering = rendering;
        this._element = null;
    }

    getTemplate(){
        return template();
    }

    getElement(){
        if(this._element === null){
            this._element = Object(_utils_createElement__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
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

/***/ }),

/***/ "./resource/js/components/Films/RenderFilmsComponent.js":
/*!**************************************************************!*\
  !*** ./resource/js/components/Films/RenderFilmsComponent.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RenderFilmsComponent; });
/* harmony import */ var _FilmComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FilmComponent */ "./resource/js/components/Films/FilmComponent.js");
/* harmony import */ var _utils_render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/render */ "./resource/js/utils/render.js");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../const */ "./resource/js/const.js");




class RenderFilmsComponent{
    constructor(filmsListElement, films) {
        this._films = films;
        this._filmsListElement = filmsListElement;
        this._countRendeingFilms = 0;
    }

    renderFirstPage(){
        this._films.slice(0, _const__WEBPACK_IMPORTED_MODULE_2__["SHOWING_FILMS_FROM_FIRST_PAGE"]).map(film => {
            const filmElement = new _FilmComponent__WEBPACK_IMPORTED_MODULE_0__["default"](film).getElement();

            filmElement.addEventListener(`click`, () => {});

            Object(_utils_render__WEBPACK_IMPORTED_MODULE_1__["renderDom"])(this._filmsListElement, filmElement, `before`)
        });

        this._countRendeingFilms = _const__WEBPACK_IMPORTED_MODULE_2__["SHOWING_FILMS_FROM_FIRST_PAGE"];
    }

    renderLoadMore(){
        const lastIndexFilmInLoad = this._countRendeingFilms + _const__WEBPACK_IMPORTED_MODULE_2__["SHOWING_FILMS_FROM_LOAD_MORE"];

        this._films.slice(this._countRendeingFilms, lastIndexFilmInLoad).map(film => {
            const filmElement = new _FilmComponent__WEBPACK_IMPORTED_MODULE_0__["default"](film).getElement();

            Object(_utils_render__WEBPACK_IMPORTED_MODULE_1__["renderDom"])(this._filmsListElement, filmElement, `before`);
        });

        this._countRendeingFilms += _const__WEBPACK_IMPORTED_MODULE_2__["SHOWING_FILMS_FROM_LOAD_MORE"];
    }

    checkingEndFilmList(){
        return this._countRendeingFilms >= _const__WEBPACK_IMPORTED_MODULE_2__["FILM_COUNT"]
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
/* harmony import */ var _utils_createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/createElement */ "./resource/js/utils/createElement.js");


const footerTemplate = () => {
    return (`
            <section id="footer">
                <div class="copyright">Lesson 1 2020</div>
                <div class="author">Tkachenko Kirill Alex</div>
            </section>
        `);
};

class FooterComponent {
    constructor() {
        this._element = null;
    }

    getTemplate(){
        return footerTemplate();
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

/***/ "./resource/js/components/HeaderComponent.js":
/*!***************************************************!*\
  !*** ./resource/js/components/HeaderComponent.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HeaderComponent; });
/* harmony import */ var _utils_createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/createElement */ "./resource/js/utils/createElement.js");


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

class HeaderComponent {
    constructor() {
        this._element = null;
    }

    getTemplate(){
        return headerTemplate();
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
const FILM_COUNT = 40;
const SHOWING_FILMS_FROM_FIRST_PAGE = 8;
const SHOWING_FILMS_FROM_LOAD_MORE = 8;



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

/***/ "./resource/js/utils/render.js":
/*!*************************************!*\
  !*** ./resource/js/utils/render.js ***!
  \*************************************/
/*! exports provided: render, renderDom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderDom", function() { return renderDom; });
const render = (selector, html, position = `beforeend`) => {
    const getElement = document.querySelector(selector);
    getElement.insertAdjacentHTML(position, html)
};



const renderDom = (container, element, position) => {
    switch (position) {
        case `after`:
            container.prepend(element);
            break;
        case `before`:
            container.append(element);
            break;
    }
};

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map