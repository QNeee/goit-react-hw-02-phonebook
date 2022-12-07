import React, { Component } from "react";

import { nanoid } from 'nanoid'


class Form extends Component {
    inputNameId = nanoid();
    inputNumberId = nanoid();
    state = {
        name: '',
        number: '',

    }
    inputHandler = (e) => {
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value

        })
    }
    onSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state);
    }

    render() {
        const { name, number } = this.state;
        return (<form onSubmit={this.onSubmit}>
            <label htmlFor={this.inputNameId}>Name
                <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={this.inputHandler}
                    id={this.inputNameId}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                /></label>
            <label htmlFor={this.inputNumberId}>Phone
                <input
                    type="tel"
                    name="number"
                    value={number}
                    onChange={this.inputHandler}
                    id={this.inputNumberId}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                /></label>
            <button type="submit">Add Contact</button>
        </form>);
    }
}
export default Form;