
import React, { Component, useState } from "react";
import axios from "axios";
import ReactDOM from 'react-dom';
import './stylesheet/About.css';


export function ContactForm () {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState("Submit");


    const handleChange = (e) => {
            const field = e.target.id;
            if (field === "name") {
                setName(e.target.value);
            } else if (field === "email") {
                setEmail(e.target.value);
            } else if (field === "message") {
                setMessage(e.target.value);
            }
        };

    const handleSubmit = (e) => {
            e.preventDefault();  
            setStatus("Sending...");  
            axios({
                method: "POST",
                url: "http://localhost:5000/contacto",
                data:axios.state,
                }).then((response) => {
                    if (response.data.status === "sent") {
                        alert("Message Sent");
                        setName("");
                        setEmail("");
                        setMessage("");
                        setStatus("Submit");
                    } else if (response.data.status === "failed") {
                        alert("Message Failed");
                    }
                    });
        }


        let buttonText = status;


        return(
                <div className="container">
                    <h1>Contacto</h1>
                    <div className="form-container">
                        <form onSubmit={handleSubmit} className="form" method="POST">
                            <div>
                                <label htmlFor="name">Nombre:</label><br />
                                <input
                                    type="text"
                                    id="name"
                                    value={name}
                                    onChange={handleChange}
                                    required
                                    className="input"
                                />
                            </div>
                            <div>
                                <label htmlFor="email">Mail:</label><br />
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={handleChange}
                                    required
                                    className="input"
                                />
                            </div>
                            <div>
                                <label htmlFor="message">Message:</label><br />
                                <textarea
                                    id="message"
                                    value={message}
                                    onChange={handleChange}
                                    required
                                    className="message"
                                />
                            </div>
                            <button className="submit" type="submit" >{buttonText}</button>
                        </form>      
                    </div>
                </div>
            );
        
  }

