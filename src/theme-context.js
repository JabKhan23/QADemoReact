import {createContext} from 'react'; 

export const themes = {
    light: {
        background: '#ff0000'
    },
    dark: {
        background: '#696969'
    }
};

export const ThemeContext = createContext(themes.dark);