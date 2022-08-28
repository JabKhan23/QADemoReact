import {ThemeContext, themes} from './theme-context';
import {useState} from 'react';
import ToolBar from './ToolBar';

const Home = () => {
    const [theme, setTheme] = useState(themes.light);

    const toggleTheme = () => {
        if(theme == themes.dark){
            setTheme(themes.light);
        }else{
            setTheme(themes.dark);
        }
    }

    return (
        <ThemeContext.Provider value={theme}>
            <ToolBar changeTheme={toggleTheme} />
        </ThemeContext.Provider>
    );
}

export default Home; 