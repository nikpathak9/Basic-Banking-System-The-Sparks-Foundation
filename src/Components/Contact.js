import React, { useState } from "react";
import '../Contact.css';
import firebaseDb from '../Firebase';

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const [loader, setLoader] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoader(true);

        firebaseDb.child("Contacts")
            .push({
                name: name,
                email: email,
                message: message,
            })
            .then(() => {
                setLoader(false);
                alert("Your message has been Sent successfully");
            })
            .catch((error) => {
                alert(error.message);
                setLoader(false);
            });

        setName("");
        setEmail("");
        setMessage("");
    };

    return (
        <div>
        <div className="app">
        <form className="form" onSubmit={handleSubmit}>
            <h1>Contact Us</h1>

            <label>Name</label>
            <input
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <label>Email</label>
            <input
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <label>Message</label>
            <textarea
                placeholder="Message....."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            ></textarea>

            <button
                type="submit"
                style={{ background: loader ? "#ccc" : " rgb(2, 2, 110)" }}
            >
                Submit
      </button>
        </form>
        </div>
        <footer id = "f1" style={{bottom:0,position:"fixed",padding:4,width:"calc(100vw)",background:"#433f3f"}}>
            <div id="h2" style={{color:"white"}}>&#169;2021 Made By Nikhil Pathak</div>
            <dl>
                <dt style={{color:"white"}}>The Sparks Foundation</dt>
            </dl>
        </footer>
        </div>
    );
};

export default Contact;