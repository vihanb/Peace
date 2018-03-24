export default class Host {
    /**
     * Empty constructor to create host
     */
    constructor() {}

    /**
     * Runs the host, assumes document
     */
    run() {
        if (this.shouldRunForPage(location.pathname)) {
            const comments = this.getComments();
            console.log(comments.length);
            for (const comment of comments) {
                // let checkHate = new RequestHateValue();
            }
        }
    }

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
