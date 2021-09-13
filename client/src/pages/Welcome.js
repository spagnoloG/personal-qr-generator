import React from 'react';
import { WelcomeNav } from '../components/welcome/WelcomeNav';
import { Container } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import { Login } from '../components/welcome/Login';
import { Register } from '../components/welcome/Register';

export const Welcome = () => {


    React.useEffect(() => {
    }, [])
    return (
        <div className="App">
            <WelcomeNav />
            <Container maxWidth="sm">
                <Paper>
                    <Login></Login>
                </Paper>
            </Container>

            <Container maxWidth="sm">
                <Paper>
                    <Register></Register>
                </Paper>
            </Container>
        </div>
    );
}