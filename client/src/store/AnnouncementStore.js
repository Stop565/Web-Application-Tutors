import { makeAutoObservable } from "mobx";

export default class AnnouncementStore {
    constructor() {
        this._lessons = []
        this._cities = []
        this._announcements = []

        this._selectedLesson = {}
        this._selectedCity = {}


        this._page = 1
        this._totalCount = 0
        this._limit = 8
        this._inputSearch = ''
        this._searchAnnouncements = []

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
        this.setPage(1);
        this._selectedLesson = lesson;
    }
    setSelectedCity(city) {
        this.setPage(1);
        this._selectedCity = city;
    }




    setPage(page) {
        this._page = page
    }
    setTotalCount(count) {
        this._totalCount = count
    }
    setInputSearch(text) {
        this._inputSearch = text
    }
    setSearchAnnouncements(announcements) {
        this._searchAnnouncements = announcements
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




    get totalCount() {
        return this._totalCount
    }
    get page() {
        return this._page
    }
    get limit() {
        return this._limit
    }
    get inputSearch() {
        return this._inputSearch
    }
    get searchAnnouncements() {
        return this._searchAnnouncements
    }

}