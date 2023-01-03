import {Endpoint} from "./Endpoint.js";

export class FootprintEndpoint extends Endpoint {
    static url() {
        return '/footprint'
    }

    method() {
        return 'POST'
    }

    needsAuthorization() {
        return false;
    }
}
