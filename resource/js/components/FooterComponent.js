import AbstractComponent from "./AbstractComponent";

const footerTemplate = () => {
    return (`
            <section id="footer">
                <div class="copyright">Lesson 1 2020</div>
                <div class="author">Tkachenko Kirill Alex</div>
            </section>
        `);
};

export default class FooterComponent extends AbstractComponent{
    getTemplate(){
        return footerTemplate();
    }
}