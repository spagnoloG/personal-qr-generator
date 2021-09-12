import React from 'react';
const axios = require('axios').default;
export const Home = () => {

    const [user, setUser] = React.useState();

    const get_auth = () => {
        return localStorage.getItem('auth');
    }

    const get_user_data = () => {

        axios.defaults.headers.common = {'Authorization': `bearer ${get_auth()}`}
    
        axios.post('http://localhost:4200/get',{
            email: "keka@google.ciom"
        })
        .then(response => {
            console.log(response)
            if(response.status == 200) {
                setUser(response.data[0]);
            }
        })
        .catch((err) => {
            console.log(err);
        })
    }


    React.useEffect(() => {
        get_user_data()
    }, [])

    return (
        <div className="App">
          <h1>Home</h1>
          <br />
        </div>
    );
}