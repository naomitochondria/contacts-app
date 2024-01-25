import React from "react";
import getData from "../utils/data";
import ContactList from "./ContactList";
import ContactInput from "./ContactInput";

class ContactApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            contacts: getData(),
        };

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onAddContactHandler = this.onAddContactHandler.bind(this); 
    }

    onDeleteHandler(id) {
        const contacts = this.state.contacts.filter(
            (contact) => contact.id !== id);
        this.setState({ contacts });
    }

    onAddContactHandler({ name, tag }) {
        this.setState((previousState) => {
            return {
                contacts: [
                    ...previousState.contacts,
                    {
                        id: +new Date(),
                        name,
                        tag,
                        imageUrl: "/images/default.jpg",
                    }
                ],
            }
        });

        console.log(this.state.contacts);
    }

    render() {
        return (
            <div className="contact-app">
                <h1>Aplikasi Kontak</h1>
                <h2>Tambah kontak</h2>
                <ContactInput addContact={ this.onAddContactHandler } />
                <h2>Daftar kontak</h2>
                <ContactList contacts={ this.state.contacts } onDelete={ this.onDeleteHandler }/>
            </div>
        );
    }
}

export default ContactApp;