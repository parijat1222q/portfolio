import React, { useState, useRef } from "react";
import { toast, ToastContainer } from "react-toastify";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import "react-toastify/dist/ReactToastify.css";

const Contact = (props) => {
    const form = useRef();
    const [loading, setLoading] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs.sendForm(
            process.env.REACT_APP_EMAILJS_SERVICE_ID,
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
            form.current,
            process.env.REACT_APP_EMAILJS_PUBLIC_API
        )
            .then((result) => {
                setLoading(false);
                toast.success(`Successfully sent email.`);
                e.target.reset();
            }, (error) => {
                setLoading(false);
                console.log(error.text);
                toast.error("Failed to send email.");
            });
    };

    return (
        <section className="contact container section" id="contact">
            <h2 className="section__title">Get In Touch</h2>

            <div className="contact__container grid">
                <div className="contact__info">
                    <h3 className="contact__title">Let's talk about everything!</h3>
                    <p className="contact__details">
                        Don't like forms? Send me an email. 👋
                        <br />
                        <strong>parijatb32@gmail.com</strong>
                    </p>
                </div>

                <form ref={form} onSubmit={sendEmail} className="contact__form">
                    <div className="contact__form-div">
                        <label className="contact__form-tag">Name</label>
                        <input type="text" name='name' className='contact__form-input' placeholder='Insert your name' required />
                    </div>

                    <div className="contact__form-div">
                        <label className="contact__form-tag">Email</label>
                        <input type="email" name='email' className='contact__form-input' placeholder='Insert your email' required />
                    </div>

                    <div className="contact__form-div contact__form-area">
                        <label className="contact__form-tag">Project</label>
                        <textarea name="message" cols="30" rows="10" className='contact__form-input' placeholder='Write your project' required></textarea>
                    </div>

                    <button className="btn">
                        {loading ? "Sending..." : "Send Message"}
                    </button>
                </form>
            </div>
            <ToastContainer position="bottom-right" theme={props.theme} />
        </section>
    );
};

export default Contact;
