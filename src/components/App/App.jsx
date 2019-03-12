import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import { Grid, AppBar, Toolbar, IconButton, Typography, Menu, MenuItem } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { withStyles } from '@material-ui/core/styles';
import { profileMenuActions } from "../../actions";

const styles = {
  root: {
    dispaly: 'flex',
  },
  profileMenu: {
    marginLeft: 'auto',
  }
};

class App extends Component {
  render() {
    const { anchorEl } = this.props.profileMenu;
    const { classes, handleProfileMenuOpen, handleProfileMenuClose } = this.props;
    const isMenuOpen = Boolean(anchorEl);

    const renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMenuOpen}
        onClose={handleProfileMenuClose}
      >
        <MenuItem>Profile</MenuItem>
      </Menu>
    )

    return (
      <div>
        <Grid container className={classes.root}>
          <Grid item xs={12}>
            <AppBar position="static">
              <Toolbar>
                <IconButton
                  color="inherit"
                  aria-label="Open menu"
                >
                  <MenuIcon />
                </IconButton>
                <Typography
                  variant="h6"
                  color="inherit"
                  noWrap
                >
                  Title
                </Typography>
                <IconButton
                  color="inherit"
                  aria-owns="material-appbar"
                  aria-haspopup="true"
                  onClick={handleProfileMenuOpen}
                  className={classes.profileMenu}
                >
                  <AccountCircle />
                </IconButton>
              </Toolbar>
            </AppBar>
          </Grid>
        </Grid>
        {renderMenu}
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { profileMenu } = state;
  return {
    profileMenu,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    handleProfileMenuOpen: event => dispatch(profileMenuActions.open(event.currentTarget)),
    handleProfileMenuClose: () => dispatch(profileMenuActions.close()),
  };
}

const connectedApp = connect(mapStateToProps, mapDispatchToProps)(App);
const styledConnectedApp = withStyles(styles)(connectedApp);
export { styledConnectedApp as App };



