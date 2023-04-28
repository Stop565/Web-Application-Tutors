import { makeAutoObservable } from "mobx"

export default class AnnouncementStore {
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
            { id: 1, name: "Вікторія1", price: "300", img: "____1____" },
            { id: 2, name: "Вікторія2", price: "300", img: "____2____" },
            { id: 3, name: "Вікторія3", price: "300", img: "____3____" },
            { id: 4, name: "Вікторія4", price: "300", img: "____4____" },
            { id: 5, name: "Вікторія5", price: "300", img: "____5____" },
        ]
        this._likes = [
            { id: 5, name: "Вікторія5", price: "300", img: "____5____" },
            { id: 2, name: "Вікторія2", price: "300", img: "____2____" },
        ]
        makeAutoObservable(this);
    }

    setLessons(lessons) {
        this._lessons = lessons;
    }

    setCities(cities) {
        this._cities = cities;
    }

    setAnnouncements(announcements) {
        this._announcements = announcements;
    }

    setLikes(likes) {
        this._likes = likes;
    }


    get lessons() {
        return this._lessons;
    }

    get cities() {
        return this._cities;
    }

    get announcements() {
        return this._announcements;
    }

    get likes() {
        return this._likes;
    }
}