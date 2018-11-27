import React from 'react';

import { Link } from 'react-router-dom';
import * as routes from '../constants/routes';

// material UI imports
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = {
    root: {
      flexGrow: 1,
    },
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },
  };

const Navigation = (props) => {

    const { classes } = props;

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" color="inherit" className={classes.grow}>
                        My Blog
                    </Typography>
                    <Button color="inherit"><Link to={routes.SIGN_IN}>Sign In</Link></Button>
                    <Button color="inherit"><Link to={routes.LANDING}>Landing</Link></Button>
                    <Button color="inherit"><Link to={routes.HOME}>Home</Link></Button>
                    <Button color="inherit"><Link to={routes.ACCOUNT}>Account</Link></Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}

Navigation.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(Navigation);