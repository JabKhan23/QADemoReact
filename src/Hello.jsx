import logo from './flying-lm.gif';
const Hello = props => {
    return (
        <h1>Hello, {props.name}</h1>
    );
}

const Age = props => {
    return (
        <h1>Age, {props.age}</h1>
    );
}

const Bio = props => {
    return (
        <h1>{props.bio}</h1>
    );
}


const ComponentWithProps = () =>{
    return(
<div className="App">
       <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <><h1>
            <Hello name="Jab Khan" />
            
        </h1><p><Age age="29" />
        <Bio bio="I am an aspiring developing learning the ways of the world. Going through trail and error to hopefully one day become something great" />
        
        </p></>
        </header>

        </div>

    );
}

export default ComponentWithProps;

<div className="App">
       <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <><h1>
            <Hello name="Jab Khan" />
            
        </h1><p><Age age="29" />
        <Bio bio="I am an aspiring developing learning the ways of the world. Going through trail and error to hopefully one day become something great" />
        
        </p></>
        </header>

        </div>
