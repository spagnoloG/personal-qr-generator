import React from 'react';
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { useHistory } from "react-router-dom";
import Alert from '@material-ui/lab/Alert';

const axios = require('axios').default;

export const Login = () => {

    const [email, set_email] = React.useState("");
    const [password, set_password] = React.useState("");
    const [error, setError] = React.useState(false);

    const history = useHistory();

    const login = () => {
        const user_data = {
            email: email,
            password: password
        }

        axios.post('http://localhost:4200/login',
            user_data)
            .then(response => {
                if (response.status == 200) {
                    // redirect
                    setError(false);
                    localStorage.setItem('auth', response.data.token);
                    localStorage.setItem('email', response.data.user.email);
                    history.push("/home");
                } else {
                    setError(true);
                }
            })
            .catch((err) => {
                setError(true);
            })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        login();
    }

    return (
        <div>
            <h1>Login</h1>
            <br />
            <form onSubmit={handleSubmit}>
                <TextField id="email" label="Email" onChange={e => set_email(e.target.value)}/>
                <br />
                <TextField id="password" label="Password" type="password" onChange={e => set_password(e.target.value)} />
                <br />
                <br />
                <Button color="primary" type="submit">Login</Button>
            </form>
            <br />
            {error && (
                <Alert severity="error">Error, check your input!</Alert>
            )}
        </div>
    )
}