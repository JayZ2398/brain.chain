import React from 'react';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Avatar from './avatar';

const ClassList = () => (
  <>
    <Avatar />
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

export default ClassList;
