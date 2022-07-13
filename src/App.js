import "./App.css";
import React from 'react';
import ContactData from './contacts.json'
import {useState} from 'react'

function App() {
  const contacts = ContactData.slice(0,5)
  const [contactsall, setContactsAll] = useState(contacts);
  

  const getRandomContact = () =>{
    const random= Math.floor(Math.random*ContactData.slice(5).length)
    const newContact= ContactData.slice(5)[random]
    const newContactData = [...contactsall, newContact]
    setContactsAll(newContactData)
    
  }

  return (<div className="App">

      <h1>IronContacts</h1>
<button onClick={getRandomContact}>Add a random contact</button>
      <table class="table">
  <thead>
    <tr>
      <td>Picture</td> 
      <td>Name</td>
      <td>Popularity</td>
      <td>Won Oscar</td>
      <td>Won Emmy</td>
    </tr>
  </thead>
  <tbody>
    {contactsall.map((contact)=>{
      return(
      <tr className="famos">
        <td><img src={contact.pictureUrl} alt={contact.name} width={100} height={150}/></td>
        <td>{contact.name}</td>
        <td>{Math.round(contact.popularity)}</td>
        <td>{(contact.wonOscar)&& "🏆"}</td>
        <td>{(contact.wonEmmy)&& "🏆"}</td>
      </tr>
    )
    })}
    
    </tbody>
  </table>
  </div>)

}





export default App;