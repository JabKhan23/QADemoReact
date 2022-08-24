import {useState} from 'react';

const Car = () => {
    const [brand, setBrand] = useState("Mitsubishi"); 
    const [model, setModel] = useState("Evo"); 
    const [colour, setColour] = useState("Red");
    const [year, setYear] = useState(2020);

     return(
         <>
         <div className="App">
             <h1>My car is cool.</h1>
             <h4>These are it's:</h4>
             <p>{brand},{model}</p>
             <p>{colour}</p>
             <p>{year}</p>

             <form>
                 <label> Brand:</label>
                 <input name="brand"
                     type="text"
                     value={brand}
                     onChange={e => setBrand(e.target.value)} />

                 <label> Model:</label>
                 <input name="model"
                     type="text"
                     value={model}
                     onChange={e => setModel(e.target.value)} />

                 <label> Colour:</label>
                 <input name="colour"
                     type="text"
                     value={colour}
                     onChange={e => setColour(e.target.value)} />

                 <label> Year:</label>
                 <input name="year"
                     type="text"
                     value={year}
                     onChange={e => setYear(e.target.value)} />
                 <br />
             </form>
             </div>
         </>
     );
 }

 export default Car;