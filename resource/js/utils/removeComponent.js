const removeComponent = (component) => {
    component.getElement().remove();
    component.removeElement();
};

export {removeComponent};