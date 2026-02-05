import React from 'react';
import { FaGithub, FaLinkedinIn, FaWhatsapp, FaInstagram, FaGoogle } from 'react-icons/fa';
import { socialData } from '../../constants/data';

const HeaderSocials = () => {
    return (
        <div className='home__socials'>
            <a href={socialData.github} className='home__social-link' target='_blank' rel='noreferrer'>
                <FaGithub />
            </a>

            <a href={socialData.linkedin} className='home__social-link' target='_blank' rel='noreferrer'>
                <FaLinkedinIn />
            </a>

            <a href={socialData.whatsapp} className='home__social-link' target='_blank' rel='noreferrer'>
                <FaWhatsapp />
            </a>

            <a href={socialData.instagram} className='home__social-link' target='_blank' rel='noreferrer'>
                <FaInstagram />
            </a>

            <a href={socialData.google} className='home__social-link' target='_blank' rel='noreferrer'>
                <FaGoogle />
            </a>
        </div>
    );
};

export default HeaderSocials;
