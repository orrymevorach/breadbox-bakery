import React from 'react';

class ContactForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            message: ''
        }

        this.handleChange = this.handleChange.bind(this)

    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <section className="contact-us">
                <h1>Contact Us</h1>
                <form action="#">
                    <label htmlFor="name">
                        Name:
                        <input 
                        type="text"
                        onChange={this.handleChange}
                        name="name"
                        value={this.state.name}
                        />
                    </label>
                    <label htmlFor="email">
                        Email:
                        <input 
                        type="email"
                        onChange={this.handleChange}
                        name="email"
                        value={this.state.email}
                        />
                    </label>
                    <label htmlFor="message">
                        Message:
                        <input 
                        type="textarea"
                        onChange={this.handleChange}
                        name="message"
                        value={this.state.message}
                        />
                    </label>
                    <input type="submit"/>
                </form>
            </section>
        )
    }
}

export default ContactForm ;