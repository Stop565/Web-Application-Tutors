import { makeAutoObservable } from "mobx";


export default class AuthStore {
    constructor() {
        this._likes = []

        makeAutoObservable(this);
    }

    setLikes(likes) {
        this._likes = likes;
    }


    get likes() {
        return this._likes;
    }
}