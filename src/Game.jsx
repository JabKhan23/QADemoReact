import { useState } from 'react';
import AddItems from './AddItems';
import ItemList from './ItemList';

const Game = () => {

   const [itemName, setItemName] = useState("");
   const [items, setItems] = useState([]);

    const newItem = ({ target }) => {
        setItemName(target.value)
    }

   const submitForm = (event) => {
       // Prevent form submission
        event.preventDefault();
   }

    const handleAdd = () => { 
        // Save player name  state to array 
        setItems(items => [...items, itemName]);
    }

    return(
       <div className="App">
           <AddItems submitHandler={submitForm} newItem={newItem} handleAdd={handleAdd} />
            <ItemList items={items}/> 
       </div>
   )
}
export default Game;