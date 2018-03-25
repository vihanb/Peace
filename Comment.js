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

    /**
     * Hides the current comment by displaying the hide dialogue.
     * @param {number} score The hate-level score
     */
    hide(score) {
        const show = <span class="peace-extension-warning-btn">I understand, show me</span>;
        const hideMessage = (
            <div class="peace-extension-warning">
                <span class="peace-extension-warning-header">This is hidden beacuse it has <span class="peace-extension-warning-percent">{(score * 100)|0}%</span> hate intensity.</span>
                {show}
            </div>
        );

        show.addEventListener('click', (event) => {
            this.htmlelement.removeChild(hideMessage);
        });

        const position = this.htmlelement.style.position;
        if (position === 'static' || position === '') {
            this.htmlelement.style.position = 'relative';
        }

        this.htmlelement.appendChild(hideMessage);
    }
}
