import { makeAutoObservable } from "mobx";


export default class AuthStore {
    constructor() {
        this._likes = [];
        this._myannounce = [];
        makeAutoObservable(this);
    }

    setLikes(likes) {
        this._likes = likes;
    }

    setLMyannounce(announce) {
        this._myannounce = announce;
    }


    get likes() {
        return this._likes;
    }

    get myannounce() {
        return this._myannounce;
    }
}