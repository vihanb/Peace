import Request, { HTTPMethod } from './Request';
import HateValue from './HateValue';
import qs from 'querystring';

export default class RequestHateValue extends Request {

    /**
     * @param {string} toneId
     * @param {Object} documentTone
     * @param {Object} sentenceTone
     * @return {number} summary id or `0.5` if not found.
     */
    getTones(toneId, documentTone, sentenceTone) {
        const documentToneItem = documentTone.tones.find(tone => tone.tone_id === toneId);
        const sentenceToneList = sentenceTone.map(
            sentence => sentence.tones.find(tone => tone.tone_id === toneId)
        ).filter(Boolean);

        const sentenceToneTotal = sentenceToneList.reduce((a, b) => a.score + b.score, 0) / sentenceToneList.length;

        if (documentToneItem && sentenceToneTotal) {
            return (documentToneItem.score + sentenceToneTotal) / 2;
        } else {
            return documentToneItem ? documentToneItem.score : (sentenceToneTotal || 0);
        }
    }

    format(json) {
        const documentTone = json.document_tone;
        const sentencesTone = json.sentences_tone || [];

        const aggression = this.getTones('anger', documentTone, sentencesTone);

        return new HateValue({
            summary: aggression,
            aggression: aggression,
            sarcasm: 0
        });
    }

    constructor(text) {
        super({
            path: 'https://gateway.watsonplatform.net/tone-analyzer/api/v3/tone',
            method: HTTPMethod.GET,
            auth: {
                username: '5390d368-3895-4a38-ba8a-51304a9ea624',
                password: 'Hz4NVB3inkbX'
            },
            params: {
                version: '2017-09-21',
                text: text,
                lang: 'en'
            }
        })
    }
}
