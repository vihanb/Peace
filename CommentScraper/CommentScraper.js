import Comment from  './Comment'

/**
 * Scrapes the current tab for comments.
 */
export default class CommentScraper {
    /**
     * Creates a CommentScraper.
     */
    constructor() {
    }

    /**
     * Gets all the comments from the current website.
     *
     * @return {Comment[]} A list of comments.
     */
    getComments() {
        // determine the type of website
        const website = this.getWebsite();
        // dispatch to the right private method
        switch (website) {
        case "youtube.com":
            return this.getYoutubeComments();
        case "twitter.com":
            return this.getTwitterComments();
        default:
            // unsupported
            return [];
        }
    }

    /**
     * Scrapes a Youtube website for comments.
     *
     * @return {Comment[]} Youtube comments.
     * @private
     */
    getYoutubeComments() {
        return [];
    }

    /**
     * Scrapes a Twitter website for comments.
     *
     * @return {Comment[]} Twitter comments.
     * @private
     */
    getTwitterComments() {
        return [];
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
    /^(https?:\/\/)?(www\.)?(youtube\.com|twitter\.com)\//;
