import React from 'react';
import Box from '@material-ui/core/Box';
import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => createStyles({
  profile: {
    backgroundImage: 'url(https://images.unsplash.com/photo-1542297919088-a2b78b2c578b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80)',
  },
}));

const Avatar = () => {
  const classes = useStyles();
  return (
    <>
      <Box width="50px" height="50px" className={classes.profile} />
    </>
  );
};

export default Avatar;
