import React, {useContext, useState} from 'react';
import ThemeContext from "../context/ThemeContext";

export const ThemeSwitcher = () => {
    const {theme, setTheme} = useContext(ThemeContext);

    return (
        <label>
            Theme mode
            <input
                type="checkbox"
                defaultChecked={theme === 'light'}
                onChange={e => setTheme(e.target.checked ? 'light' : 'dark')}
            />
        </label>
    );
};