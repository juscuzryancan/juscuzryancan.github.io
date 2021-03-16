import { makeStyles } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/icons/Menu';
import './styles.css';

const Navigation = () => {
    return (
        <AppBar position="sticky">
            <Toolbar className="navigation" >
                <Typography variant="h6">
                    Ryan Riley Puzon
                </Typography>
                <IconButton edge="end" color="inherit" aria-label="menu">
                    <Menu />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}

export default Navigation;