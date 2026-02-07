import React from 'react';
import './Services.css';
import { servicesData } from '../../constants/data';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const Services = () => {
    return (
        <section className="services container section" id="services">
            <motion.h2
                className="section__title"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                Services
            </motion.h2>

            <motion.div
                className="services__container grid"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                {servicesData.map(({ id, image, title, description }) => {
                    return (
                        <motion.div
                            className="services__card"
                            key={id}
                            variants={cardVariants}
                            whileHover={{ scale: 1.03, boxShadow: "0px 10px 30px rgba(0,0,0,0.1)" }}
                            style={{ padding: 0 }}
                        >
                            <Tilt
                                tiltMaxAngleX={10}
                                tiltMaxAngleY={10}
                                perspective={1000}
                                transitionSpeed={1000}
                                scale={1.02}
                                style={{ padding: '2rem' }}
                            >
                                <img src={image} alt={title} className='services__img' width="80" loading="lazy" />

                                <h3 className="services__title">{title}</h3>
                                <p className="services__description">{description}</p>
                            </Tilt>
                        </motion.div>
                    )
                })}
            </motion.div>
        </section>
    )
}

export default Services;