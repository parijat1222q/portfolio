import React, { useState, useRef } from "react";
import { toast, ToastContainer } from "react-toastify";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";

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
            <motion.h2
                className="section__title"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                Get In Touch
            </motion.h2>

            <div className="contact__container grid">
                <motion.div
                    className="contact__info"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h3 className="contact__title">Let's talk about everything!</h3>
                    <p className="contact__details">
                        Don't like forms? Send me an email. 👋
                        <br />
                        <strong>parijatb32@gmail.com</strong>
                    </p>
                </motion.div>

                <motion.form
                    ref={form}
                    onSubmit={sendEmail}
                    className="contact__form"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
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

                    <motion.button
                        className="btn"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {loading ? "Sending..." : "Send Message"}
                    </motion.button>
                </motion.form>
            </div>
            <ToastContainer position="bottom-right" theme={props.theme} />
        </section>
    );
};

export default Contact;
