import { Container, Switch } from '@material-ui/core';
import React from 'react';
import { List } from './List';
import { Route } from 'react-router';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import ListIcon from '@material-ui/icons/List';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import PersonIcon from '@material-ui/icons/Person';
import { useHistory } from "react-router-dom";
import { Add } from './Add';
import { Profile } from './Profile';

const axios = require('axios').default;

export const Home = () => {

    const [page, setPage] = React.useState('list');
    const [value, setValue] = React.useState(0);
    const [user, setUser] = React.useState();

    const get_auth = () => {
        return localStorage.getItem('auth');
    }

    const get_mail = () => {
        return localStorage.getItem('email');
    }

    const get_user_data = () => {

        axios.defaults.headers.common = { 'Authorization': `bearer ${get_auth()}` }

        axios.post('http://localhost:4200/get', {
            email: get_mail()
        })
            .then(response => {
                console.log(response)
                if (response.status == 200) {
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
        <div>
            {
                value == 0 &&
                <List></List>
            }

            {
                value == 1 &&
                <Add></Add>
            }

            {
                value == 2 &&
                <Profile></Profile>
            }

            <div className="bottombar">
                <BottomNavigation
                    value={value}
                    onChange={(event, newValue) => {
                        switch (newValue) {
                            case 0:
                                console.log("list");
                                break;
                            case 1:
                                console.log("new");
                                break;
                            case 2:
                                console.log("profile");
                                break;
                        }
                        setValue(newValue);
                    }}
                    className="bottom"
                    showLabels
                >
                    <BottomNavigationAction label="List codes" icon={<ListIcon />} />
                    <BottomNavigationAction label="Add new" icon={<AddCircleOutlineIcon />} />
                    <BottomNavigationAction label="Profile" icon={<PersonIcon />} />
                </BottomNavigation>
            </div>
        </div>
    );
}