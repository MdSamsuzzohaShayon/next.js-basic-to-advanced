import { useEffect } from 'react';
import styles from '../styles/sassstyle.module.scss';




function About(){
    useEffect(()=>{alert("Using react hook")}, []);
    return (
        <div>
            <h2 className={styles.h1}>This is from about page using sass</h2>
        </div>
    );
}

export default About;