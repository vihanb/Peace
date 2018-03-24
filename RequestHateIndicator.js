import Request, { HTTPMethod } from './Request';
import HateIndicator from './HateIndicator';

export default class RequestHateIndicator extends Request {
    constructor(text) {
        super({
            path: 'https://gateway.watsonplatform.net/tone-analyzer/api/v3/tone?version=2017-09-21',
            method: HTTPMethod.GET,
            auth: '71ed1318-4e3d-44e4-8369-1af2ff7011b6:Rv1S0VufTXOF',
            body: {
                text: text
            }
        })
    }
}
