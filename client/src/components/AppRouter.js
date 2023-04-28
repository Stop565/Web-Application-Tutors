import React, { useContext } from "react";
import { Routes, Route, Navigate } from 'react-router-dom'
import { adminRoutes, authRoutes, publicRoutes } from "../routes";
import { MAIN_ROUTE } from "../utils/consts";
import { Context } from "../index";

const AppRouter = () => {

    const { user } = useContext(Context);
    console.log(user);
    //const isAuth = false;
    //const isRole = "USER"
    return (
        <Routes>
            <Route path='*' element={<Navigate to={MAIN_ROUTE} />} />

            {
                user.isAuth && user.isRole === "ADMIN" && adminRoutes.map(({ path, Component }) =>
                    <Route key={path} path={path} element={Component} exact />)
            }

            {
                user.isAuth && user.isRole === "USER" && authRoutes.map(({ path, Component }) =>
                    <Route key={path} path={path} element={Component} exact />)
            }

            {
                publicRoutes.map(({ path, Component }) =>
                    <Route key={path} path={path} element={Component} exact />)
            }
        </Routes >
    )
}

export default AppRouter;