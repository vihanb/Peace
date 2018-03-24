/**
 * Represents a comment on a website.
 */
export default class Comment {
    /**
     * Creates a Comment object.
     *
     * @param {HTMLElement} dom Enclosing DOM element.
     * @param {String} text Text of the comment.
     */
    constructor(dom, text) {
        /**
         * Enclosing DOM element.
         * @type {HTMLElement}
         */
        this.dom = dom;

        /**
         * Text of the comment.
         * @type {String}
         */
        this.text = text;
    }
}
