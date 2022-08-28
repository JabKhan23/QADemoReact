import { ThemeContext } from './theme-context';
import { useContext } from 'react';

const ThemedButton = (props) => {
const theme = useContext(ThemeContext);
return(
   <button {...props} style={{backgroundColor: theme.background}}>
      Change Theme
   </button>
)

}

export default ThemedButton;