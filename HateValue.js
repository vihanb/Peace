export default class HateValue {
    constructor({ summary, aggression, sarcasm }) {
        /**
         * 0-1 indicator summarizing how hateful a given comment is.
         * @type {number}
         */
        this.summary = summary;

        /**
         * Aggression 0-1 metric
         * @type {number}
         */
        this.aggression = aggression;

        /**
         * Specifies level of sarcasm. 0-1 metrix
         * @type {number}
         */
        this.sarcasm = sarcasm;
    }

}
