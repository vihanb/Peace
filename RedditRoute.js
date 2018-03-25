import Route from './Route'
import Comment from './Comment';

/**
 * Handles reddit.com
 */
export default class RedditRoute extends Route {

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
                if (text && !text.textContent.includes('[deleted]')) {
                    comments.push(
                        new Comment(htmlComment, text.textContent)
                    );
                }
            }
        );

        return comments;
    }
}
