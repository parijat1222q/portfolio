import React from 'react';
import './Home.css';
import { homeData } from '../../constants/data';
import Me from '../../assets/avatar-1.svg';
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';
import Shapes from './Shapes';

const Home = () => {
    return (
        <section className="home container" id='home'>
            <div className="intro">
                <img src={Me} alt="Parijat Biswas Profile" className='home__img' width='120' />
                <h1 className="home__name">{homeData.name}</h1>
                <span className="home__education">{homeData.title}</span>

                <HeaderSocials />

                <a href="#contact" className="btn"> Contact Me</a>

                <ScrollDown />
            </div>

            <Shapes />
        </section>
    )
}

export default Home