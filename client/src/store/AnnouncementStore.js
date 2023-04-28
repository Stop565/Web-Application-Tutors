import { makeAutoObservable } from "mobx"

export default class UserStore {
    constructor() {
        this._lessons = [
            { id: 1, name: "Math1" },
            { id: 2, name: "Math2" },
            { id: 3, name: "Math3" },
        ]
        this._cities = [
            { id: 1, name: "Дніпро" },
            { id: 2, name: "Київ" },
            { id: 3, name: "Харків" },
        ]

        this._announcements = [
            { id: 1, name: "Вікторія", price: "300", img: "____1____" }
        ]
        makeAutoObservable(this);
    }

    setIsAuth(bool) {
        this._isAuth = bool;
    }

    setIsRole(Role) {
        this._isRole = Role;
    }

    setUser(user) {
        this._user = user;
    }

    get isAuth() {
        return this._isAuth;
    }

    get isRole() {
        return this._isRole;
    }

    get user() {
        return this._user;
    }
}