import React from 'react';
const axios = require('axios').default;
export const Welcome = () => {

    const [user, setUser] = React.useState();


    const login = () => {
        axios.post('http://localhost:4200/login', {
            email: "keka@gmail.ciom",
            password: "kekw"
        })
        .then(response => {
            console.log(response)
            if(response.status == 200) {
                // redirect
                localStorage.setItem('auth', response.data.token);
            }
        })
        .catch((err) => {
            console.log(err);
        })
    }


    const register = () => {
        axios.post('http://localhost:4200/register', {
            email: "keka@google.ciom",
            password: "kekw",
            name: "joze"
        })
        .then(response => {
            console.log(response)
            if(response.status == 200) {
                // display message
            }
        })
        .catch((err) => {
            console.log(err);
        })
    }

    React.useEffect(() => {
        login();
        register();
    }, [])
    // const setApiKey = () => {

    // }

    return (
        <div className="App">
          <h1>HHH</h1>
        </div>
    );
}