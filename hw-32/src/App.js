import React from 'react';
import { Provider } from "react-redux";
import { store } from "./store";
import { Waiter } from './features/waiters';
import { LanguageProvider } from "./hooks/languageContext";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { Home } from './features/Home';
import { About } from './features/About';
import { NotFound } from './features/NotFound';
import styles from './App.module.css';

export function App() {
    const active = ({ isActive }) => isActive ? styles.active : "";


    return (
        <Provider store={store}>
            <BrowserRouter>
                <LanguageProvider value='en'>
                    <nav style={{ marginBottom: '20px' }}>
                        <NavLink to='/' className={active} end>Home</NavLink> {' | '}
                        <NavLink to='/waiter' className={active}>Waiter</NavLink> {' | '}
                        <NavLink to='/about' className={active}>About</NavLink>
                    </nav>
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