import Comment from '../Comment'
import Route from './Route'

/**
 * Handles youtube.com.
 */
export default class YoutubeRoute extends Route {
    setupDynamicHooks() {
        const observer = new MutationObserver((mutations) => {
            for (let i = 0; i < mutations.length; i++) {
                let mutation = mutations[i];
                if (mutation.target.tagName === "YTD-COMMENTS") {
                    console.log(mutation.target.children.slice());
                }
            }
        });

        const main = document.body;
        observer.observe(
            main,
            {
                subtree: true,
                childList: true
            }
        );
    }

    /** @override */
    getComments() {
        const comments = [];
        const contents = document.getElementById('contents');
        if (contents) {
            [...children].map(
                htmlComment => {
                    const text = htmlComment
                        .getElementById('comment')
                        .getElementById('body')
                        .getElementById('main')
                        .getElementById('expander')
                        .getElementById('content')
                        .textContent;

                    if (text) {
                        comments.push(new Comment(htmlComment, text));
                    }
                }
            );
        }

        return comments;
    }
}
