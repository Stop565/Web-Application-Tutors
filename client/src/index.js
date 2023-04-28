import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UserStore from './store/UserStore';
import AnnouncementStore from './store/AnnouncementStore';


export const Context = createContext(null);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Context.Provider value={{
      user: new UserStore(),
      announcement: new AnnouncementStore()
    }}>
      <App />
    </Context.Provider>
  </React.StrictMode>
);

