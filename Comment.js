export default class Comment {
    /**
     * Creates a comment model for an html element.
     * @param {HTMLElement} htmlelement The html element.
     * @param {string} text The text of the html element
     */
    constructor(htmlelement, text) {
        /** @type {HTMLElement} */
        this.htmlelement = htmlelement;

        /** @type {string} */
        this.text = text;
    }
}
