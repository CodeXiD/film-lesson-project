import AbstractComponent from "../AbstractComponent";

const template = () => {
    return (`
            <div class="empty-films">Films is empty</div>
    `);
};

export default class NoFilmsComponent extends AbstractComponent{
    getTemplate(){
        return template()
    }
}