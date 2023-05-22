import React, { useContext } from "react";
import { Routes, Route, Navigate } from 'react-router-dom'
import { adminRoutes, authRoutes, publicRoutes } from "../routes";
import { MAIN_ROUTE } from "../utils/consts";
import { Context } from "../index";
import { observer } from "mobx-react-lite";

const AppRouter = observer(() => {

    const { user } = useContext(Context);
    //console.log(user);

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
})

export default AppRouter;