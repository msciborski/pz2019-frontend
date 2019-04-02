import React from "react";
import { Drawer, List, ListItemText, Typography, Divider, ListItem } from "@material-ui/core";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";


const styles = {
  root: {
  },
  list: {
    width: 150,
  },
  title: {
    fontSize: '2rem !important',
    paddingLeft: '30px',

  },
  divider: {
  },
  listItem: {
    marginLeft: '30px',
    '&:hover': {
    }
  },
  link : {
    textDecoration: 'none',
  },
}

const Menu = (props) => {
  const { open, toggleDrawer, classes} = props;

  return (
    <Drawer
      open={open}
      onClose={toggleDrawer}
    >
      <div
        tabIndex={0}
        role="button"
        onClick={toggleDrawer}
        onKeyDown={toggleDrawer}
        className={classes.root}
      >
        <div className={classes.list}>
          <Typography className={classes.title} color="inherit">
            Menu
          </Typography>
          <Divider light className={classes.divider} />
          <List>
            <Link to="/doctors" className={classes.link}>
              <ListItem button>
                <ListItemText primary="Doctors" />
              </ListItem>
            </Link>
          </List>
        </div>
      </div>
    </Drawer>
  )
}

const styledMenu = withStyles(styles)(Menu);

export { styledMenu as Menu};
