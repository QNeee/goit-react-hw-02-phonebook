import React, { Component } from "react";
import Form from "./Form/Form";
import { nanoid } from 'nanoid'
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";
class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  }
  formSubmitHander = (data) => {
    const { contacts } = this.state;
    const newContact = {
      name: data.name,
      number: data.number,
      id: nanoid()
    }
    const findContact = contacts.find(item => item.name.toLocaleLowerCase() === data.name.toLocaleLowerCase())
    if (!findContact) {
      this.setState(prevState => ({
        contacts: [...prevState.contacts, newContact]
      }))
    } else {
      alert(`${findContact.name} is already in list`);
    }

  }

  onDelete = (id) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter((item) => item.id !== id)
    }))
  }
  change = (value) => {
    this.setState({
      filter: value
    })
  }
  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
  }
  render() {
    const { filter } = this.state;
    return (<div>
      <h1>Phonebook</h1>
      <Form onSubmit={this.formSubmitHander} />
      <h2>Contacts</h2>
      <Filter value={filter} change={this.change} />
      <ContactList options={this.getFilteredContacts()} deleteContact={this.onDelete} />
    </div>)

  }
}

export default App;