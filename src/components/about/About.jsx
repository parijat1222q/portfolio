import React from 'react';
import './About.css';
import Image from '../../assets/avatar-2.svg';
import Resume from '../../assets/resume.pdf';
import { aboutData } from '../../constants/data';
import { motion } from 'framer-motion';

const About = () => {
    const downloadResume = async () => {
        window.open(Resume, '_blank');
    }

    return (
        <section className="about container section" id="about">
            <motion.h2
                className="section__title"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                About Me
            </motion.h2>

            <div className="about__container grid">
                <motion.img
                    src={Image}
                    alt="Parijat Biswas Profile"
                    className='about__img'
                    loading="lazy"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                />

                <div className="about__data grid">
                    <motion.div
                        className="about__info"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        {aboutData.description.map((text, index) => (
                            <p className="about__description" key={index} style={{ marginBottom: '1rem' }}>
                                {text}
                            </p>
                        ))}

                        <ul className="about__list">
                            {aboutData.skills.map((skill, index) => (
                                <motion.li
                                    key={index}
                                    whileHover={{ scale: 1.1, color: "#ff4d4d" }}
                                >
                                    {skill}
                                </motion.li>
                            ))}
                        </ul>
                        <motion.button
                            className="btn"
                            onClick={downloadResume}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Download CV
                        </motion.button>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default About;