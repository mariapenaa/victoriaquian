
import React, { Component, useState } from "react";
import axios from "axios";
import ReactDOM from 'react-dom';
import './scss/contact.scss';


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
                <div className="contact">
                        <div className="form-container">
                            <h2>Want to talk?</h2>
                            <p>Proyectos fotográficos, encargos de Photoshop, Illustrator, Adobe  Premier, y Adobe After Effects.</p>
                            <h3>Email:</h3>
                            <p>victoriaquian@gmail.com</p>
                            <h3>Phone:</h3>
                            <p>+54 9 11 4176-6805</p>
                            <form onSubmit={handleSubmit} className="form" method="POST">
                                <div>
                                    <input
                                        type="text"
                                        placeholder="Name"
                                        id="name"
                                        value={name}
                                        onChange={handleChange}
                                        required
                                        className="input"
                                    />
                                </div>
                                <div>
                                    <input
                                        placeholder="Email"
                                        type="email"
                                        id="email"
                                        value={email}
                                        onChange={handleChange}
                                        required
                                        className="input"
                                    />
                                </div>
                                <div>
                                    <textarea
                                        placeholder="Message"
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

