import Comment from  './Comment'

/**
 * Gets the plain text comment of a Youtube comment element.
 *
 * @param {HTMLElement} element Entire DOM of the comment.
 *
 * @return {String} Comment in plain text.
 * @private
 */
function getCommentText(element) {
    return element.getElementById('comment').getElementById('body')
        .getElementById('main').getElementById('expander')
        .getElementById('content').textContent;
}

/**
 * Scrapes a Youtube website for comments.
 *
 * @return {Comment[]} Youtube comments.
 */
export default function getYoutubeComments() {
    // get a list of all the youtube comments
    const youtubeComments = document.getElementById('contents').children;
    // go through each comment
    const comments = [];
    for (let i = 0; i < youtubeComments.length; ++i) {
        // extract the text into a Comment object
        comments[i] = new Comment(doms[i], getCommentText(doms[i]));
    }
    return comments;
}
