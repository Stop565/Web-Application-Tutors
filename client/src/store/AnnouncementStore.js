import { makeAutoObservable } from "mobx";

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
            { id: 1, name: "Вікторія1", price: "300", img: "https://dastarkhan24.kz/upload/iblock/3a6/3a6690501bd34dead6bb520094940db2.jpg" },
            { id: 2, name: "Вікторія2", price: "300", img: "https://dastarkhan24.kz/upload/iblock/3a6/3a6690501bd34dead6bb520094940db2.jpg" },
            { id: 3, name: "Вікторія3", price: "300", img: "https://dastarkhan24.kz/upload/iblock/3a6/3a6690501bd34dead6bb520094940db2.jpg" },
            { id: 4, name: "Вікторія4", price: "300", img: "https://dastarkhan24.kz/upload/iblock/3a6/3a6690501bd34dead6bb520094940db2.jpg" },
            { id: 5, name: "Вікторія5", price: "300", img: "https://dastarkhan24.kz/upload/iblock/3a6/3a6690501bd34dead6bb520094940db2.jpg" },
            { id: 6, name: "Вікторія6", price: "300", img: "https://dastarkhan24.kz/upload/iblock/3a6/3a6690501bd34dead6bb520094940db2.jpg" },
            { id: 7, name: "Вікторія7", price: "300", img: "https://dastarkhan24.kz/upload/iblock/3a6/3a6690501bd34dead6bb520094940db2.jpg" },
            { id: 8, name: "Вікторія8", price: "300", img: "https://dastarkhan24.kz/upload/iblock/3a6/3a6690501bd34dead6bb520094940db2.jpg" },
        ]
        this._selectedLesson = {}
        this._selectedCity = {}
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

    setSelectedLesson(lesson) {
        this._selectedLesson = lesson;
    }

    setSelectedCity(city) {
        this._selectedCity = city;
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

    get selectedLesson() {
        return this._selectedLesson
    }

    get selectedCity() {
        return this._selectedCity
    }
}