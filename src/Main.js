import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(10, 1,2,1),
  },
}));

export default function () {
  const classes = useStyles();
  return (
    <Typography align='center' className={classes.root} color="textSecondary">
      Use this timer to stay compliant and productive. Select your work duration and break duration.
    </Typography>
  );
}
