import logo from './flying-lm.gif';
import './App.css';

const AboutMe = () => {

  const address = {
      firstname: "Jab",
      surname: "Khan",
      line1: "123",
      line2: "Fake Street",
      city: "Manchester",
      postcode: "M12 3AB"
  }

  return (
    <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
        <h1>Firstname: {address.firstname}</h1>
        <h1>Surname: {address.surname}</h1>
        <h1>Address: {address.line1}</h1>
        <h1>{address.line2}</h1>
        <h1>{address.city}</h1>
        <h1>{address.postcode}</h1>
        </header>

        <a
          className="App-link"
          href="https://github.com/JabKhan23/QADemoReact"
          target="_blank"
          rel="noopener noreferrer"
        >
          Here is my GitHub
          </a>
    </div>
);
}


export default AboutMe;
