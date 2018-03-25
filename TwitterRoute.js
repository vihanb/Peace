import Route from './Route'
import Comment from './Comment';

/**
 * Handles twitter.com
 */
export default class TwitterRoute extends Route {

    /** @override */
    getComments() {
        const comments = [];
        [...document.getElementsByClassName('comment')].map(
            htmlComment => {
                const text = htmlComment.getElementsByClassName('tweet-text')[0];
                if (text) {
                    comments.push(
                        new Comment(htmlComment, text.textContent)
                    );
                }
            }
        );
    }
}
