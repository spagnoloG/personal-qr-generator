import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import ListIcon from '@material-ui/icons/List';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import PersonIcon from '@material-ui/icons/Person';


export const BottomNav = () => {
    const [value, setValue] = React.useState(0);
  
    return (
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
            console.log(newValue)
            console.log(event);
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