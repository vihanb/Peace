import RedditRoute from './RedditRoute'
import TwitterRoute from './TwitterRoute'
import YoutubeRoute from './YoutubeRoute'

/**
 * Uses website data to get a Route object.
 */
export default class CommentScraper {
    /**
     * Gets an appropriate Host object based on the website name. If the website
     * is not supported, this method returns null.
     *
     * @return {Host} The correct Host.
     */
    getRoute() {
        // get the domain name
        const website = location.host.replace(CommentScraper.hostRegex, '');
        // dispatch to the appropriate Route
        switch (website) {
            case 'reddit.com': return new RedditRoute();
            case 'twitter.com': return new TwitterRoute();
            case 'youtube.com': return new YoutubeRoute();
            default: return null;
        }
    }
}

CommentScraper.shared = new CommentScraper();

/**
 * Regex that matches the `www.` and `:<port number>` parts of the
 * `location.host` property.
 *
 * @type {RegExp}
 * @private
 */
CommentScraper.hostRegex =
    /^www\.|:\d+$/g;
