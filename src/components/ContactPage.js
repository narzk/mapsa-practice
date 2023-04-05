import { useState } from "react"
import ContactForm from "./ContactForm"
import ContactList from "./ContactList"

//tamrin : add id to the contacts (delete)
//tamrin: refresh page, list contact show -> localStorage
//tamrin: https://github.com/typicode/json-server

export default function ContactPage() {
  const [contacts, setContacts] = useState([])
  const addContact = (contact) => {
    setContacts([...contacts, contact])
  }

  const handleDelete = (index) => {
    setContacts(contacts.filter((contact, i) => i !== index))
  }
  return (
    <>
      <h1>Contact Form</h1>
      <ContactForm addContact={addContact} />
      <h1>Contact list</h1>
      <ContactList contacts={contacts} handleDelete={handleDelete} />
    </>
  )
}
