import { useState } from "react"

export default function ContactList({ contacts, handleDelete }) {
  const [searchVal, setSearchVal] = useState("")
  if (contacts.length === 0) {
    return <div>No Contacts</div>
  }

  const handleSearchVal = (event) => {
    setSearchVal(event.target.value)
  }

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchVal.toLowerCase().trim())
  )

  return (
    <div>
      <input type="text" value={searchVal} onChange={handleSearchVal} />
      <ul>
        {filteredContacts.map((contact, index) => (
          <li key={index}>
            <div>{contact.name}</div>
            <div>{contact.email}</div>
            <div>{contact.phone}</div>

            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
