import Comment from '../Comment'
import Route from './Route'

/**
 * Handles youtube.com.
 */
export default class YoutubeRoute extends Route {
    /*
	setupDynamicHooks() {
        const observer = new MutationObserver((mutation) => {
            console.log(mutation);
            // this.handleComments(comments)
        });

        const main = document.getElementById('top');
        observer.observe(
            main,
            {
                subtree: true
            }
        );
    }
	*/
	/** @override */
    shouldRunForPage(path) {
        return path.includes('comments/');
    }
    /** @override */
    getComments() {
        const comments = [];
		[...document.getElementsByClassName("gstl_50 sbdd_a")].map(
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
        /*const contents = document.getElementById('contents');
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
*/