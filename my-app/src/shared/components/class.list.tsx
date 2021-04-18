import React from "react";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
// import Avatar from "./avatar";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      "& > *": {
        margin: theme.spacing(1),
      },
    },
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
  })
);

const ClassList = () => {
  const classes = useStyles();

  return (
    <>
      <Box width="280px" padding="0px" paddingTop="50px" height="100%">
        <Box paddingLeft="15px" paddingBottom="30px">
          <Avatar
            alt="Jasmine"
            src="https://images.unsplash.com/photo-1542297919088-a2b78b2c578b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
            className={classes.large}
          />
        </Box>
        <Box padding="15px">
          <Typography variant="h6">Jasmine</Typography>
          <Typography>Year 7, Morley High School</Typography>
        </Box>
        <Divider />
        <List>
          {["Account Settings", "Sign Out"].map((text) => (
            <ListItem button key={text} >
              <Typography variant="subtitle2">
                
              <ListItemText primary={text} disableTypography/>
              </Typography>
            </ListItem>
          ))}
        </List>
        {/* <Box marginTop="15px">
          <Button variant="contained" style={{ width: "100%" }} color="secondary">
            Account Settings
          </Button>
        </Box> */}
        {/* <Box position="absolute" bottom="0">
          <Button variant="outlined" style={{ width: "100%" }}>
            Sign out
          </Button>
        </Box> */}
      </Box>
    </>
  );
};

export default ClassList;
