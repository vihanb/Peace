import Host from './Host'
import Comment from './Comment';

/**
 * Handles reddit.com
 */
export default class RedditHost extends Host {

    /** @override */
    shouldRunForPage(path) {
        return path.includes('comments/');
    }

    /** @override */
    getComments() {
        return [...document.getElementsByClassName('entry')].map(
            htmlComment => {
                return new Comment(
                    htmlComment,
                    htmlComment.getElementsByClassName('md')[0].textContent
                )
            }
        );
    }
}
