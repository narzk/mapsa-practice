import { useState } from "react"
import ContactForm from "./ContactForm"
import ContactList from "./ContactList"

//tamrin : add id to the contacts (delete)
//tamrin: refresh page, list contact show -> localStorage

export default function ContactPage() {
  const [contacts, setContacts] = useState([])

  // {name:'dfadsf', email:'sdas@asdasd.com', phone:'091218989'}

  const addContact = (contact) => {
    setContacts([...contacts, contact])
  }

  const handleDelete = (index) => {
    //filter index

    console.log(index)
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
