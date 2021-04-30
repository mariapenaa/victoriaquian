
import React, { Component } from "react";
import axios from "axios";
import ReactDOM from 'react-dom';
import './stylesheet/About.css';

 export class ContactForm extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            email: "",
            message: "",
            status: "Submit"
        }; 
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
        
        handleChange(event) {
            const field = event.target.id;
            if (field === "name") {
                this.setState({ name: event.target.value });
            } else if (field === "email") {
                this.setState({ email: event.target.value });
            } else if (field === "message") {
                this.setState({ message: event.target.value });
            }
        }

        handleSubmit(event) {
            event.preventDefault();  
            this.setState({ status: "Sending" });  
            axios({
                method: "POST",
                url: "http://localhost:5000/contacto",
                data: this.state,
                }).then((response) => {
                    if (response.data.status === "sent") {
                        alert("Message Sent");
                        this.setState({ name: "", email: "", message: "", status: "Submit" });
                    } else if (response.data.status === "failed") {
                        alert("Message Failed");
                    }
                    });
        }


        render() {

            let buttonText = this.state.status;
            
            return (      
                <div className="container">
                    <h1>Contacto</h1>
                    <div className="form-container">
                        <form onSubmit={this.handleSubmit} className="form" method="POST">
                            <div>
                                <label htmlFor="name">Nombre:</label><br />
                                <input
                                    type="text"
                                    id="name"
                                    value={this.state.name}
                                    onChange={this.handleChange}
                                    required
                                    className="input"
                                />
                            </div>
                            <div>
                                <label htmlFor="email">Mail:</label><br />
                                <input
                                    type="email"
                                    id="email"
                                    value={this.state.email}
                                    onChange={this.handleChange}
                                    required
                                    className="input"
                                />
                            </div>
                            <div>
                                <label htmlFor="message">Message:</label><br />
                                <textarea
                                    id="message"
                                    value={this.state.message}
                                    onChange={this.handleChange}
                                    required
                                    className="message"
                                />
                            </div>
                            <button className="submit" type="submit">{buttonText}</button>
                        </form>      
                    </div>
                </div>
            );
        }
  }

  export default ContactForm;