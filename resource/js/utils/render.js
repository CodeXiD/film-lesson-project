export const renderDom = (container, component, position) => {
    switch (position) {
        case `after`:
            container.prepend(component.getElement());
            break;
        case `before`:
            container.append(component.getElement());
            break;
    }
};