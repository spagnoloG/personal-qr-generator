import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';

export const WelcomeNav = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu">
                    Welcome
                </IconButton>
                <span>to personal-qr-generator</span>
            </Toolbar>
        </AppBar>
    )
}