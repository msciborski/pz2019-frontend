import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import { Grid, AppBar, Toolbar, IconButton, Typography, Menu, MenuItem } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { profileMenuActions } from "../../actions";

class App extends Component {
  constructor(props) {
    super(props);
  }

  handleProfileMenuOpen = event => {
    // this.setState({ anchorEl: event.currentTarget });
    const { dispatch } = this.props;
    dispatch(profileMenuActions.open(event.currentTarget));
  }

  handleProfileMenuClose = () => {
    const { dispatch } = this.props;
    dispatch(profileMenuActions.close());
  }

  render() {
    const { anchorEl } = this.props.profileMenu;
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
        <Grid container>
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
                  onClick={this.handleProfileMenuOpen}
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

function mapStateToProps(state) {
  console.log(state);
  const { profileMenu } = state;
  return {
    profileMenu,
  }
}
const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App };



