import Comment from '../Comment'
import Route from './Route'

/**
 * Handles youtube.com.
 */
export default class YoutubeRoute extends Route {
    /** @override */
    getComments() {
        const comments = [];
        [...document.getElementById('contents').children].map(
            htmlComment => {
                const text = htmlElement.getElementById('comment')
                    .getElementById('body') .getElementById('main')
                    .getElementById('expander') .getElementById('content')
                    .textContent;
                if (text) {
                    comments.push(new Comment(htmlComment, text));
                }
            }
        );
        return comments;
    }
}
