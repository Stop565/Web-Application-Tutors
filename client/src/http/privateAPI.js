import { $authHost, $host } from "./index";


export const createAnnouncement = async (newAnnouncement) => {
    const { data } = await $authHost.post('api/announcement', newAnnouncement)
    return data
}

export const fetchMyAnnouncement = async () => {
    const { data } = await $authHost.get('api/myannouncement')
    return data
}

export const addRemoveLike = async (announcementId) => {
    const { data } = await $authHost.post('api/likes?announcementId=' + announcementId)
    return data
}

export const fetchLikes = async () => {
    const { data } = await $authHost.get('api/likes')
    return data
}


export const deleteOneMyAnnouncement = async (id) => {
    const { data } = await $authHost.delete('api/myannouncement', { params: { id } })
    return data
}

export const createCity = async (city) => {
    const { data } = await $authHost.post('api/city', city)
    return data
}

export const createLesson = async (lesson) => {
    const { data } = await $authHost.post('api/lesson', lesson)
    return data
}