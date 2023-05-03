import { $authHost, $host } from "./index";


export const fetchLessons = async () => {
    const { data } = await $host.get('api/lesson')
    return data
}

export const fetchCities = async () => {
    const { data } = await $host.get('api/city')
    return data
}

export const fetchAnnouncement = async (lessonId, cityId, page, limit = 5) => {
    const { data } = await $host.get('api/announcement', { params: { lessonId, cityId, page, limit } })
    return data
}

export const fetchOneAnnouncement = async (id) => {
    const { data } = await $host.get('api/announcement/' + id)
    return data
}




export const createAnnouncement = async (newAnnouncement) => {
    const { data } = await $authHost.post('api/announcement', newAnnouncement)
    return data
}




