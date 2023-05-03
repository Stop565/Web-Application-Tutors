import { makeAutoObservable } from "mobx";

export default class AnnouncementStore {
    constructor() {
        this._lessons = []
        this._cities = []
        this._announcements = []

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