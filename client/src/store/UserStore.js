import { makeAutoObservable } from "mobx"

export default class UserStore {
    constructor() {
        this._isAuth = false;
        this._isRole = 'PUBLIC';
        this._user = {};
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
