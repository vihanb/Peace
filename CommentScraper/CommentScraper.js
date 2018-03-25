import RedditRoute from './RedditRoute'
import TwitterRoute from './TwitterRoute'
import YoutubeRoute from './YoutubeRoute'

/**
 * Uses website data to get a Route object.
 */
export default class CommentScraper {
    /**
     * Creates a CommentScraper.
     */
    constructor() {
    }

    /**
     * Gets an appropriate Host object based on the website name. If the website
     * is not supported, this method returns null.
     *
     * @return {Host} The correct Host.
     */
    getRoute() {
        // determine the type of website
        const website = this.getWebsite();
        // dispatch to the right private method
        switch (website) {
        case "reddit.com":
            return new RedditRoute();
        case "twitter.com":
            return new TwitterRoute();
        case "youtube.com":
            return new YoutubeRoute();
        default:
            // unsupported
            return null;
        }
    }

    /**
     * Gets the website name if supported, e.g. `youtube.com`. Returns null if
     * not supported or can't be found.
     *
     * @return {String} Name of the website if possible.
     * @private
     */
    getWebsite() {
        const url = await getURL();
        const website = url.match(CommentScraper.urlRegex)[2];
        if (!website)
        {
            // website not supported
            return null;
        }
        return website;
    }

    /**
     * Gets the current tab's URL.
     *
     * @return {String} The current tab's URL.
     * @private
     */
    async getURL() {
        return new Promise((resolve, reject) => {
            chrome.tabs.query({ 'active': true, 'lastFocusedWindow': true },
                tabs => { resolve(tabs[0].url); });
        });
    }
}

/**
 * Regex to get the supported website domain.
 *
 * @type {RegExp}
 * @private
 */
CommentScraper.urlRegex =
    /^(https?:\/\/)?(www\.)?(reddit\.com|twitter\.com|youtube\.com)\//;
