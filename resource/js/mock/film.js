import {getRandomInteger} from "../utils/getRandomInteger";

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

    const imageIndex = getRandomInteger(images.length);

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

    const nameIndex = getRandomInteger(names.length);

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

export {generateFilms, generateFilm};