import Comment from '../Comment';
import Route from './Route';

/**
 * Handles twitter.com.
 */
export default class TwitterRoute extends Route {

    /** @override */
    getComments() {
        const comments = [];
        [...document.getElementsByClassName('tweet')].map(htmlComment => {
                const text = htmlComment
                    .getElementsByClassName('content')[0]
                    .getElementsByClassName('js-tweet-text-container')[0]
                    .textContent;

                if (text) {
                    comments.push(
                        new Comment(htmlComment, text)
                    );
                }
            }
        );
        return comments;
    }
}
