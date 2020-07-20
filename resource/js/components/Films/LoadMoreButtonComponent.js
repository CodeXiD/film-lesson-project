import AbstractComponent from "../AbstractComponent";


const template = () => {
  return (
      `<button id="load-more">Load more</button>`
  );
};

export default class LoadMoreButtonComponent extends AbstractComponent{
    getTemplate(){
        return template();
    }
}