import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

export const Header = (props) => {
    return(
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4" className="to-right">
          {props.user ? props.user.name : "idk"}
          </Typography>
          <Button color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>
    </div>
    );
}