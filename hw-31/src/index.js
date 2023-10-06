import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import { store } from "./store";
import { Waiter } from './features/waiters';
import { LanguageProvider } from "./hooks/languageContext";


ReactDOM.createRoot(document.getElementById('root')).render(
     
     <Provider store={store}>
         <LanguageProvider value='en'>
            <Waiter />
         </LanguageProvider>
     </Provider>
);
