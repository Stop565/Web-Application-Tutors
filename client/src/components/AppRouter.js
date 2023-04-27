import React from "react";
import { Routes, Route, Navigate } from 'react-router-dom'
import { adminRoutes, authRoutes, publicRoutes } from "../routes";

const AppRouter = () => {
    const isAuth = false;
    const isRole = "USER"
    return (
        <Routes>
            {isAuth && isRole === "ADMIN" && adminRoutes.map(({ path, Component }) =>
                <Route key={path} path={path} element={Component} exact />)}

            {
                isAuth && isRole === "USER" && authRoutes.map(({ path, Component }) =>
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