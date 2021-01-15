import styles from '../styles/auth.module.scss';
import { useState } from 'react';
import jwt from 'jsonwebtoken';

const auth = () => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [message, setMessage] = useState<string>('You are not logged in');
    const [secret, setSecret] = useState<string>('');


    async function submitForm(e) {
        e.preventDefault();
        // console.log("On Submit button hit");

        const res = await fetch('/api/login', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password })
        }).then(t => t.json());
        const token = res.token;
        console.log(res.token);

        if (token) {
            const json = jwt.decode(token) as { [key: string]: string };
            console.log(json);

            setMessage(`Welcome ${json.username} and you are ${json.admin ? " an admin" : " not an admin"}`);

            const res = await fetch('/api/secret', {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ token })
            }).then(t => t.json());

            if(res.secretAdminCode){
                setSecret(res.secretAdminCode);
            }else{
                setSecret("Nothing availabe");
            }


        } else {
            setMessage("Something went wrong");
        }
    }
    return (
        <div className={styles.wrapper}>
            <h2>{message}</h2>
            <h5>Secret: {secret}</h5>
            <form className={styles.form} onSubmit={submitForm} >
                <input
                    onChange={e => setUsername(e.target.value)}
                    className={styles.input}
                    type="text"
                    value={username}
                    placeholder="Enter your username"
                />
                <br />
                <input
                    onChange={e => setPassword(e.target.value)}
                    className={styles.input}
                    value={password}
                    type="password"
                    placeholder="Enter your password"
                />
                <br />
                <input className={styles.submit} type="submit" value="submit" />
            </form>
        </div>
    )
}

export default auth;