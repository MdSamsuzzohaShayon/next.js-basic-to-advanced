import styles from '../styles/auth.module.scss';

const auth = () => {
    return (
        <div className={styles.wrapper}>
            <h2>Log In </h2>
            <form className={styles.form} action="/api/login" method="POST">
                <input className={styles.input} name="username" type="text" defaultValue='admin' placeholder="Enter your username" />
                <br />
                <input className={styles.input} name="password" type="password" defaultValue='admin' placeholder="Enter your password" />
                <br />
                <input className={styles.submit} type="submit" value="submit" />
            </form>
        </div>
    )
}

export default auth;
