import { makeAutoObservable } from "mobx";


export default class AuthStore {
    constructor() {
        this._likes = [
            { id: 5, name: "Вікторія5", price: "300", img: "____5____" },
            { id: 2, name: "Вікторія2", price: "300", img: "____2____" },
        ]
        makeAutoObservable(this);
    }

    setLikes(likes) {
        this._likes = likes;
    }


    get likes() {
        return this._likes;
    }
}