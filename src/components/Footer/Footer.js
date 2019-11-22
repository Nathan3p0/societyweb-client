import React from 'react';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
    return (
        <footer className="main__footer">
            <a href="https://github.com/Nathan3p0/societyweb-client" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'github']} size={'2x'} /></a>
            <p>&copy; 2019 SocietyWeb.org</p>
        </footer>
    );
}

export default Footer;