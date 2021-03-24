import { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import './styles.css';

const Navigation = () => {

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClose = () => {
        setAnchorEl(null);
    }

    const openMenu = (e) => {
        setAnchorEl(e.currentTarget);
    }

    return (
        <AppBar position="static">
            <Toolbar className="navigation" >
                <Typography variant="h6">
                    Ryan Riley Puzon
                </Typography>
                <IconButton onClick={openMenu} edge="end" color="inherit" aria-label="menu">
                    <MenuIcon />
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose}>About</MenuItem>
                        <MenuItem onClick={handleClose}>Projects</MenuItem>
                        <MenuItem onClick={handleClose}>Contact</MenuItem>
                    </Menu>
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}

export default Navigation;