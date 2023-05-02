import { makeAutoObservable } from "mobx";


export default class AuthStore {
    constructor() {
        this._likes = [
            { id: 2, name: "Вікторія2", price: "300", img: "https://dastarkhan24.kz/upload/iblock/3a6/3a6690501bd34dead6bb520094940db2.jpg" },
            { id: 5, name: "Вікторія5", price: "300", img: "https://dastarkhan24.kz/upload/iblock/3a6/3a6690501bd34dead6bb520094940db2.jpg" },
            { id: 3, name: "Вікторія3", price: "300", img: "https://dastarkhan24.kz/upload/iblock/3a6/3a6690501bd34dead6bb520094940db2.jpg" },
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