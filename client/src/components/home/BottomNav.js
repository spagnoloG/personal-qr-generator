import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import ListIcon from '@material-ui/icons/List';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import PersonIcon from '@material-ui/icons/Person';
import { useHistory } from "react-router-dom";


export const BottomNav = () => {
    const [value, setValue] = React.useState(0);

    const history = useHistory();

    return (
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          switch (newValue) {
            case 0:
              console.log("list");
              history.push("/list");
            case 1:
              console.log("new");
              history.push("/add");
              break;
            case 2:
              console.log("profile");
              history.push('/profile')
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
    );
}