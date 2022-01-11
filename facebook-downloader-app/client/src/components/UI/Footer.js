import React from 'react';
import styles from './Footer.module.css'

const Footer = () => {
    return (
        <div className={styles.footer}>
            <p>Made by <a
                className='pulsate'
                target='_blank'
                rel='noreferrer'
                href='https://github.com/GuilhermeSenna'
            >GuilhermeSenna</a></p>
        </div >
    );
}

export default Footer;