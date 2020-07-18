export const render = (selector, html, position = `beforeend`) => {
    const getElement = document.querySelector(selector);
    getElement.insertAdjacentHTML(position, html)
};