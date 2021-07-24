import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './components/Header';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';
import {uuid} from 'uuidv4';

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, {id : uuid(), ...contact}]);
  }

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList)
  };

  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retriveContacts) setContacts(retriveContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);
  // const contacts =[
  //   {
  //     id: "1",
  //     name: "ram",
  //     email : "ram@gmail.com"
  //   },
  //   {
  //     id: "2",
  //     name: "shyam",
  //     email : "shyam@gmail.com"
  //   },
  //   {
  //     id: "3",
  //     name: "lakhan",
  //     email : "lakhan@gmail.com"
  //   },
  // ]
  return (
    <div className="ui container">
      <h1>Hello world</h1>
      <Header/>
      <AddContact addContactHandler={addContactHandler}/>
      <ContactList contacts={contacts} getContactId={removeContactHandler}/>
    </div>
  );
}

export default App;
