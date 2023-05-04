import { $authHost, $host } from "./index";


export const createAnnouncement = async (newAnnouncement) => {
    const { data } = await $authHost.post('api/announcement', newAnnouncement)
    return data
}

export const fetchMyAnnouncement = async () => {
    const { data } = await $authHost.get('api/myannouncement')
    return data
}