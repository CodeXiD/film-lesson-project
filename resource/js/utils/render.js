export const render = (selector, html, position = `beforeend`) => {
    const getElement = document.querySelector(selector);
    getElement.insertAdjacentHTML(position, html)
};



export const renderDom = (container, element, position) => {
    switch (position) {
        case `after`:
            container.prepend(element);
            break;
        case `before`:
            container.append(element);
            break;
    }
};