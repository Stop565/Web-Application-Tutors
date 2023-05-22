import AdminPage from "./pages/AdminPage"
import AnnouncementPage from "./pages/AnnouncementPage"
import Auth from "./pages/Auth"
import CreatePage from "./pages/CreatePage"
import LikesPage from "./pages/LikesPage"
import Main from "./pages/Main"
import MyAnnouncement from "./pages/MyAnnouncement"
import { ADMIN_ROUTE, ANNOUNCEMENT_ROUTE, CREATE_ROUTE, LIKES_ROUTE, LOGIN_ROUTE, MAIN_ROUTE, MY_ANNOUNCEMENT, REGISTRATION_ROUTE } from "./utils/consts"

export const publicRoutes = [
    {
        path: MAIN_ROUTE,
        Component: <Main />
    },
    {
        path: LOGIN_ROUTE,
        Component: <Auth />
    },
    {
        path: REGISTRATION_ROUTE,
        Component: <Auth />
    },
    {
        path: ANNOUNCEMENT_ROUTE + '/:id',
        Component: <AnnouncementPage />
    }
]

export const authRoutes = [
    {
        path: LIKES_ROUTE,
        Component: <LikesPage />
    },
    {
        path: CREATE_ROUTE,
        Component: <CreatePage />
    },
    {
        path: MY_ANNOUNCEMENT,
        Component: <MyAnnouncement />
    }
]

export const adminRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: <AdminPage />
    },
    {
        path: LIKES_ROUTE,
        Component: <LikesPage />
    },
    {
        path: CREATE_ROUTE,
        Component: <CreatePage />
    },
    {
        path: MY_ANNOUNCEMENT,
        Component: <MyAnnouncement />
    }
]