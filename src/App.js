import React from "react";
import ContactManager from './components/ContactManager';
import "./styles/index.css";


const App = () => {

  const contacts = ["Adam Levine", "John Ambrose", "Peter Pan", "Harry Poter", "Bruce Lee"];
  return (
    <div>
      <h1> Contact Manager</h1>

      <ContactManager data={contacts} />
    </div>
  );
}


export default App;
