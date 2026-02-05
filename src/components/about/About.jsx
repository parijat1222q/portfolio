import React from 'react';
import './About.css';
import Image from '../../assets/avatar-2.svg';
import Resume from '../../assets/resume.pdf';
import { aboutData } from '../../constants/data';

const About = () => {
    const downloadResume = async () => {
        window.open(Resume, '_blank');
    }

    return (
        <section className="about container section" id="about">
            <h2 className="section__title">About Me </h2>

            <div className="about__container grid">
                <img src={Image} alt="Parijat Biswas Profile" className='about__img' loading="lazy" />

                <div className="about__data grid">
                    <div className="about__info">
                        {aboutData.description.map((text, index) => (
                            <p className="about__description" key={index} style={{ marginBottom: '1rem' }}>
                                {text}
                            </p>
                        ))}

                        <ul className="about__list">
                            {aboutData.skills.map((skill, index) => (
                                <li key={index}>{skill}</li>
                            ))}
                        </ul>
                        <button className="btn" onClick={downloadResume}>Download CV</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;