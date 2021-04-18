import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";
import ClassList from "./class.list";
import Box from "@material-ui/core/Box";
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  })
);

const LinkBehavior = React.forwardRef<any, Omit<RouterLinkProps, "to">>(
  (props, ref) => <RouterLink ref={ref} to="/dashboard" {...props} />
);

export default function ButtonAppBar() {
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = (open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }

    setDrawerOpen(open);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Box
            display="flex"
            flexDirection="row"
            style={{ justifyContent: "space-between" }}
            width="100%"
          >
            <Box display="flex">
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer(true)}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
              >
                {ClassList()}
              </Drawer>
              <img src={window.location.origin + "/logo.svg"} alt="Logo" />
            </Box>

            <Button color="inherit" component={RouterLink} to="/dashboard">
              <Typography variant="h6" color="secondary" style={{textTransform: "none"}}>
                Home
              </Typography>
            </Button>
          </Box>

          {/* <Button color="inherit">My Progress</Button> */}
        </Toolbar>
      </AppBar>
    </div>
  );
}
