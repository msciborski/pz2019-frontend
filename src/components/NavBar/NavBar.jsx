import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import { AppBar, Toolbar, IconButton, Typography, Menu, MenuItem } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { withStyles } from '@material-ui/core/styles';

const styles = {
  profileMenu: {
    marginLeft: 'auto',
  }
};

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      anchorEl: null,
    };
  }

  handleProfileMenuOpen = event => this.setState({ anchorEl: event.targetCurrent });
  handleProfileMenuClose = () => this.setState({ anchorEl: null });

  render() {
    const { anchorEl, loggedIn, classes } = this.state;
    const isMenuOpen = Boolean(anchorEl);

    const renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMenuOpen}
        onClose={this.handleProfileMenuClose}
      >
        <MenuItem>Profile</MenuItem>
      </Menu>
    )

    return (
      <div>
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
            {loggedIn &&
              <IconButton
                color="inherit"
                aria-owns="material-appbar"
                aria-haspopup="true"
                onClick={this.handleProfileMenuOpen}
                className={classes.profileMenu}
              >
                <AccountCircle />
              </IconButton>}
          </Toolbar>
        </AppBar>
        {renderMenu}
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { loggedIn } = state.authentication;
  return {
    loggedIn,
  };
}

const connectedNavBar = connect(mapStateToProps)(NavBar);
const styledConnectedNavBar = withStyles(styles)(connectedNavBar);
export { styledConnectedNavBar as NavBar};

