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

    componentDidMount() {
        window.addEventListener("keydown", (e) => {
            if(e.which === 13) {
                e.preventDefault();
            }
        })
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
                <form action="http://www.focuspocus.io/magic/a7128daf200e66af457098ce5b70147b" method="POST" >
                    <label htmlFor="name">
                        Name:
                        <input 
                        type="text"
                        onChange={this.handleChange}
                        name="name"
                        value={this.state.name}
                        required
                        />
                    </label>
                    <label htmlFor="email">
                        Email:
                        <input 
                        type="email"
                        onChange={this.handleChange}
                        name="email"
                        value={this.state.email}
                        required
                        />
                    </label>
                    <label htmlFor="message">
                        Message:
                        <input 
                        type="textarea"
                        onChange={this.handleChange}
                        name="message"
                        value={this.state.message}
                        required
                        />
                    </label>
                    <input type="submit"/>
                </form>
            </section>
        )
    }
}

export default ContactForm ;