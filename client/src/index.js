import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ContentStore from './store/ContentStore';

export const Context = createContext(null);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Context.Provider value={{
        store: new ContentStore(),
    }}>
      <App />
    </Context.Provider>
  </React.StrictMode>
);