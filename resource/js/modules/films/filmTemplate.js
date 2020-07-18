export const filmTemplate = (film) => {
    const {img, name, description, date_of_release} = film;
    return (`
            <div class="main__items-rows__item">
                <img src="${img}" alt="Film">
                <div class="name">${name}</div>
                <div class="description">${description}</div>
                <div class="date_of_release">${date_of_release}</div>
            </div>
  `);
};