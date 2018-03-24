import Host from './Host'
import Comment from './Comment';

/**
 * Handles reddit.com
 */
export default class RedditRoute extends Host {

    /** @override */
    shouldRunForPage(path) {
        return path.includes('comments/');
    }

    /** @override */
    getComments() {
        const comments = [];
        [...document.getElementsByClassName('entry')].map(
            htmlComment => {
                const text = htmlComment.getElementsByClassName('md')[0];
                if (text) {
                    comments.push(
                        new Comment(htmlComment, text.textContent)
                    );
                }
            }
        );
    }
}
