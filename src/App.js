import React, { Component } from "react";
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";
import Filter from "./Filter";

class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  addContact = (name, number) => {
    const { contacts } = this.state;

    const contactExists = contacts.some(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (contactExists) {
      alert(`${name} is already in contacts.`);
      return;
    }

    const newContact = {
      id: Date.now(),
      name: name,
      number: number,
    };

    this.setState({
      contacts: [...contacts, newContact],
    });
  };

  deleteContact = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== id),
    }));
  };

  changeFilter = (event) => {
    this.setState({
      filter: event.target.value,
    });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    const { filter } = this.state;

    return (
      <div>
        <h1>Phonebook</h1>

        <ContactForm onAddContact={this.addContact} />

        <h2>Contacts</h2>

        <Filter value={filter} onChange={this.changeFilter} />

        <ContactList
          contacts={this.getFilteredContacts()}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
