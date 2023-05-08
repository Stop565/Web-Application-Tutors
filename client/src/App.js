import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import { observer } from "mobx-react-lite";
import { check } from "./http/userAPI";
import { Context } from "./index";
import FooterComponent from "./components/FooterComponent";

import './components/css/comm.css'




const App = observer(() => {
  const { user } = useContext(Context);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    check().then((data) => {
      user.setUser(data);
      user.setIsAuth(true);
      user.setIsRole(data.role)
    }).finally(() => setLoading(false))
  }, [])

  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter />
      <FooterComponent />
    </BrowserRouter>
  );
});

export default App;
