import React from 'react';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import Box from '@material-ui/core/Box';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => createStyles({
  profile: {
    backgroundImage: 'url(https://images.unsplash.com/photo-1542297919088-a2b78b2c578b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80)',
  },
}));

const ClassList = () => {
  const classes = useStyles();
  return (
    <>
      <Box width="50px" height="50px" className={classes.profile} />
      <Typography variant="h3">
        Jasmine
      </Typography>
      <Typography>
        Year 7, Morley High School
      </Typography>
      <Divider />
      <List>
        <ListItem button>
          <ListItemText primary="All Classes" />
        </ListItem>
        {['Maths', 'Science', 'English', 'History', 'Chinese'].map((text) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default ClassList;
