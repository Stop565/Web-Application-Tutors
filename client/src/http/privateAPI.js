import { $authHost, $host } from "./index";


export const createAnnouncement = async (newAnnouncement) => {
    const { data } = await $authHost.post('api/announcement', newAnnouncement)
    return data
}