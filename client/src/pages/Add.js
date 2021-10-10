import React from 'react';
import { Container } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
const axios = require('axios').default;

export const Add = (props) => {

    const [redirect_url, set_redirect_url] = React.useState("");
    const [permament_url, set_permament_url] = React.useState("");
    const [title, setTitle] = React.useState("");
    const [error, setError] = React.useState(false);
    const [succes, setSuccess] = React.useState(false);


    const get_auth = () => {
        return localStorage.getItem('auth');
    }

    const generate = () => {

        set_permament_url(window.location.host + "/" + redirect_url);

        const params = {
            redirect_url: redirect_url,
            permament_url: permament_url,
            title: title,
            id: props.user.ID
        }

        axios.defaults.headers.common = { 'Authorization': `bearer ${get_auth()}` }
        axios.post('http://localhost:4200/new-url',
            params)
            .then(response => {
                if (response.status == 200) {
                    // redirect
                    setError(false);
                    setSuccess(true);
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
        generate();
    }

    return (
        <div>
            <Container maxWidth="sm">
                <h1>Generate a new qr code</h1>
                <Paper>
                    <form onSubmit={handleSubmit}>
                        <TextField id="email" label="Title" onChange={e => setTitle(e.target.value)} />
                        <br />
                        <TextField id="password" label="Redirect URL" onChange={e => set_redirect_url(e.target.value)} />
                        <br />
                        <br />
                        <Button color="primary" type="submit">Generate</Button>
                    </form>
                    <br />
                    {error && (
                        <Alert severity="error">Error, check your input!</Alert>
                    )}
                    {succes && (
                        <div>
                            <Alert severity="success">Successfully generated</Alert>
                            <Button color="primary" onChange={event => {
                                setSuccess(false);
                                setError(false);
                            }}>CLEAR</Button>
                        </div>
                    )}
                </Paper>
            </Container>
        </div>
    );
}
