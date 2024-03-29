import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UserStore from './store/UserStore';
import AnnouncementStore from './store/AnnouncementStore';
import AuthStore from './store/AuthStore';


export const Context = createContext(null);
//console.log(process.env.REACT_APP_API_URL)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Context.Provider value={{
      user: new UserStore(),
      announcement: new AnnouncementStore(),
      authStore: new AuthStore()
    }}>
      <App />
    </Context.Provider>
  </React.StrictMode>
);

