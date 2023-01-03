import ApiClient from "communication/client/ApiClient";
import {getSetting} from "settings";
import FakeRequester from "communication/requester/FakeRequester";
import RemoteRequester from "communication/requester/RemoteRequester";
import {LocalStorage} from "../models/LocalStorage";

class App {
    constructor() {
        this._apiClient = undefined;
        this._localStorage = new LocalStorage();
    }

    apiClient() {
        if (this._apiClient === undefined) {
            this._setUpApiClient();
        }

        return this._apiClient;
    }

    routes() {
        return {
            home: '/',
            simpleForm: '/simple',
            advancedForm: '/advanced',
            result: '/result',
            compensation: '/compensation',
            compensationDetail: '/compensation-detail'
        }
    }

    _setUpApiClient() {
        const requester = this._setUpRequester();
        this._apiClient = new ApiClient(requester);
    }

    _setUpRequester() {
        const usingFakeApi = getSetting("USING_FAKE_API");
        if (usingFakeApi) {
            return new FakeRequester();
        }

        const remoteApiUrl = getSetting("API_URL");
        return new RemoteRequester(remoteApiUrl);
    }

    localStorage() {
        return this._localStorage
    }
}

export let app = new App();
