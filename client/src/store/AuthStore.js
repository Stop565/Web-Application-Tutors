import { makeAutoObservable } from "mobx";


export default class AuthStore {
    constructor() {
        this._likes = [];
        this._myannounce = [];
        this._myposition = [];
        makeAutoObservable(this);
    }

    setLikes(likes) {
        this._likes = likes;
    }

    setMyannounce(announce) {
        this._myannounce = announce;
    }
    setMyposition(geo) {
        this._myposition = geo
    }


    get likes() {
        return this._likes;
    }

    get myannounce() {
        return this._myannounce;
    }

    get myposition() {
        return this._myposition;
    }

}