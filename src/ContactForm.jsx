import React, { Component } from "react";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { name, number } = this.state;

    if (name === "" || number === "") {
      return;
    }

    this.props.onAddContact(name, number);

    this.setState({
      name: "",
      number: "",
    });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <p>Name</p>

        <input
          type="text"
          name="name"
          value={name}
          onChange={this.handleChange}
          required
        />

        <p>Number</p>

        <input
          type="tel"
          name="number"
          value={number}
          onChange={this.handleChange}
          required
        />

        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default ContactForm;
