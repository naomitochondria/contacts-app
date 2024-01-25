import React from "react";

class ContactInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            tag: ""
        };

        this.onNameChangeEventHandler = this.onNameChangeEventHandler.bind(this);
        this.onTagChangeEventHandler = this.onTagChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onNameChangeEventHandler(event) {
        this.setState(() => {
            return {
                name: event.target.value,
            }
        });
    }

    onTagChangeEventHandler(event) {
        this.setState(() => {
            return {
                tag: event.target.value,
            };  
        });
    }

    onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.addContact(this.state);
    }

    render() {
        return (
            <form className="contact-input" onSubmit={ this.onSubmitEventHandler }>
                <input type="text" value={this.state.name} 
                    onChange={ this.onNameChangeEventHandler } placeholder="Nama" />
                <input type="text" value={this.state.tag} 
                    onChange={ this.onTagChangeEventHandler } placeholder="Tag" />
                <button type="submit">Tambah</button>
            </form>
        );
    }
}

export default ContactInput;