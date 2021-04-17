import React from "react";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
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
      <Avatar
        alt="Jasmine"
        src="https://images.unsplash.com/photo-1542297919088-a2b78b2c578b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
        className={classes.large}
      />
      <Typography variant="h3">Jasmine</Typography>
      <Typography>Year 7, Morley High School</Typography>
      <Divider />
      <List>
        <ListItem button>
          <ListItemText primary="All Classes" />
        </ListItem>
        {["Maths", "Science", "English", "History", "Chinese"].map((text) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default ClassList;
