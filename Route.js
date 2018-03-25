import RequestHateValue from './RequestHateValue';

export default class Route {
    /**
     * Empty constructor to create host
     */
    constructor() {}

    /**
     * Runs the host, assumes document
     */
    start() {
        if (this.shouldRunForPage(location.pathname)) {
            this.setupDynamicHooks();
            const comments = this.getComments();
            this.handleComments(comments);
        }
    }

    /**
     * Processes comments
     * @param {Comment[]} comments The comments
     */
    async handleComments(comments) {
        for (let i = 0; i < comments.length; i++) {
            const hateRequest = new RequestHateValue(comments[i].text);
            const result = await hateRequest.run();

            const normalizedResult = +result.toFixed(2);
            if (normalizedResult > 0.5) {
                comments[i].hide();
            }
        }
    }

    /**
     * If they are observers, set them up here. Call `this.handleComments` with
     * a new array of comments
     */
    setupDynamicHooks() { return void 0; }

    /**
     * Determines of a certain page should be loaded
     *
     * @param {string[]} path
     * @return {boolean} if should run for this path.
     */
    shouldRunForPage(path) { return true; }

    /**
     * Obtains comments
     *
     * @return {Comment[]}
     */
    getComments() {
        throw new TypeError('Did not override Host#getComments');
    }
}
