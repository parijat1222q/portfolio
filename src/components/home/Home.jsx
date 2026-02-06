import React from 'react';
import './Home.css';
import Me from '../../assets/avatar-1.svg';
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';
import Shapes from './Shapes';
import { motion } from 'framer-motion';

const Home = () => {
    return (
        <section className="home container" id='home'>
            <div className="intro">
                <motion.img
                    src={Me}
                    alt="Parijat Biswas Profile"
                    className='home__img'
                    width='120'
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, type: "spring" }}
                />
                <motion.h1
                    className="home__name"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    Parijat Biswas
                </motion.h1>
                <motion.span
                    className="home__education"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    Backend Developer | AI/ML Enthusiast
                </motion.span>

                <HeaderSocials />

                <motion.a
                    href="#contact"
                    className="btn"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    Contact Me
                </motion.a>

                <ScrollDown />
            </div>

            <Shapes />
        </section>
    )
}

export default Home;