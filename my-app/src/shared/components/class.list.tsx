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
import Paper from "@material-ui/core/Paper"
// import Avatar from "./avatar";
import { users } from "../../shared/data";
import { Task as TaskModel, Comment, User } from "../../shared/models";

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

  const curUser: User = users[0];

  return (
    <>
      <Box width="280px" padding="0px" paddingTop="50px" height="100%">
        <Box paddingLeft="15px" paddingBottom="30px">
          <Avatar
            alt="Jasmine"
            src={curUser.displayPicture}
            className={classes.large}
          />
        </Box>
        <Box padding="15px">
          <Typography variant="h6">{curUser.name}</Typography>
          <Typography>Year 7, Morley High School</Typography>
        </Box>
        <Divider />
        <List>
          {["Account Settings", "Sign Out"].map((text) => (
            <ListItem button key={text}>
              <Typography variant="subtitle2">
                <ListItemText primary={text} disableTypography />
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
