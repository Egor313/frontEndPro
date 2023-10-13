import React from 'react';
import { Provider } from "react-redux";
import { store } from "./store";
import { Waiter } from './features/waiters';
import { LanguageProvider } from "./hooks/languageContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from './features/Home';
import { About } from './features/About';
import { NotFound } from './features/NotFound';

export function App() {

    return (
        <Provider store={store}>
            <BrowserRouter>
                <LanguageProvider value='en'>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/waiter/*' element={<Waiter />} />
                        <Route path='/about' element={<About />} />
                        <Route path='*' element={<NotFound />} />
                    </Routes>
                </LanguageProvider>
            </BrowserRouter>
        </Provider>
    )
}