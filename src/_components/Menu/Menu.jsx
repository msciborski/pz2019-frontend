import React from "react";
import { Drawer, List, ListItemText, Typography, Divider } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";


const styles = {
  root: {
  },
  list: {
    width: 150,
  },
  title: {
    fontSize: '25rem',

  },
  divider: {
    paddingLeft: '0px !important',
  },
  listItem: {
    '&:hover': {

    }
  }
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
          <List className={classes.listItem} >
            <ListItemText primary="Doctors" />
          </List>
        </div>
      </div>
    </Drawer>
  )
}

const styledMenu = withStyles(styles)(Menu);

export { styledMenu as Menu};
