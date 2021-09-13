import React from 'react';
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';
const axios = require('axios').default;

export const Register = () => {

    const [name, set_name] = React.useState("");
    const [email, set_email] = React.useState("");
    const [password, set_password] = React.useState("");

    const register = () => {
        const user_data = {
            name: name,
            email: email,
            password: password
        }

        axios.post('http://localhost:4200/register',
            user_data)
            .then(response => {
                if (response.status == 200) {
                    // display message
                    console.log(response)
                }
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        register();
    }
    return (
        <div>
            <h1>
                Register
            </h1>
            <br />
            <form onSubmit={handleSubmit}>
                <TextField id="name-reg" label="Name" onChange={e => set_name(e.target.value)} />
                <br />
                <TextField id="email-reg" label="Email" onChange={e => set_email(e.target.value)} />
                <br />
                <TextField id="password-reg" label="Password" onChange={e => set_password(e.target.value)} />
                <br />
                <br />
                <Button color="primary" type="submit">Register</Button>
            </form>
            <br />
        </div>
    )
}