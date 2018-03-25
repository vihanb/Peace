import Comment from '../Comment';
import Route from './Route';

/**
 * Handles twitter.com.
 */
export default class TwitterRoute extends Route {
    /**
     * Create a TwitterRoute object.
     */
    constructor() {
        super();

        /**
         * The `<ol>` tag that contains the stream of tweets.
         * @type {HTMLElement}
         * @private
         */
        this.stream = document.getElementById('stream-items-id');

        /**
         * The `<div>` tag that contains an overlay of a specific tweet along
         * with its comments.
         * @type {HTMLElement}
         * @private
         */
        this.overlay = document.getElementById('permalink-overlay');

        /**
         * Observes changes in the tweet stream to handle new tweets.
         * @type {MutationObserver}
         * @private
         */
        this.streamObserver = new MutationObserver((mutations, observer) => {
                const comments = [];
                // for each mutation's added comment
                for (let i = 0; i < mutations.length; ++i) {
                    const addedNodes = mutations[i].addedNodes;
                    for (let j = 0; j < addedNodes.length; ++j) {
                        const element = addedNodes[j];
                        // create a new comment
                        const comment = this.getTweet(element);
                        if (comment) {
                            comments.push(comment);
                        }
                    }
                }
                this.handleComments(comments);
            }
        );

        /**
         * Observes changes in the tweet overlay comments to handle new
         * comments.
         * @type {MutationObserver}
         * @private
         */
        this.commentObserver = new MutationObserver((mutations, observer) => {
                const comments = [];
                // the <li> tags that contain each comment
                const htmlComments = this.overlay.getElementsByClassName(
                    'js-stream-item stream-item');
                for (let i = 0; i < htmlComments.length; ++i) {
                    const htmlComment = htmlComments[i];
                    // property 'isAlreadyProcessed' defined by us
                    if (!htmlComment.dataset.isAlreadyProcessed) {
                        htmlComment.dataset.isAlreadyProcessed = true;
                        // not already processed by the comment scraper
                        const comment = this.getTweet(htmlComment);
                        if (comment) {
                            comments.push(comment);
                        }
                    }
                }
                this.handleComments(comments);
            }
        );
    }

    /**
     * Gets the Comments from the tweet comment overlay.
     *
     * @returns {Comment[]} A list of Comments representing each comment.
     * @private
     */
    getOverlayComments() {
        // the <ol> tag with all the comments
    }

    /** @override */
    setupDynamicHooks() {
        // observe the changes in the children of the tweet stream but not
        //  grandchildren
        this.streamObserver.observe(this.stream, { childList: true });
        this.commentObserver.observe(this.overlay,
            { childList: true, subtree: true });
    }

    /** @override */
    getComments() {
        const comments = [];
        [...this.stream.children].map(htmlComment => {
                const comment = this.getTweet(htmlComment);
                if (comment) {
                    comments.push(comment);
                }
            }
        );
        return comments;
    }

    /**
     * Creates a Comment object from a given tweet element. This method returns
     * null if the comment text can't be found.
     *
     * @param {HTMLElement} element The `<li>` tag that contains the tweet.
     *
     * @return {Comment} A Comment object.
     * @private
     */
    getTweet(element) {
        const text = element
            .getElementsByClassName('tweet')[0]
            .getElementsByClassName('content')[0]
            .getElementsByClassName('js-tweet-text-container')[0]
            .textContent;

        return text ? new Comment(element, text) : null;
    }
}
