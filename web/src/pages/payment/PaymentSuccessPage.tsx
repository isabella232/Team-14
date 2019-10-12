import React from 'react';
import DoneIcon from '@material-ui/icons/Done';
import { makeStyles, Theme, createStyles, Button, Grid } from '@material-ui/core';
import { useHistory } from 'react-router';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    check: {
      marginTop: '4rem',
      padding: 60,
      borderRadius: '100%',
      backgroundColor: 'green',
      color: 'white',
      width: 100,
      height: 100,
    },
    checkIcon: {
      width: 100,
      height: 100,
    },
    root: {
      padding: 10,
      textAlign: 'center',
      display: 'flex',
      justifyContent: 'center',
      alignContent: 'center',
    }
  }),
);

export function PaymentSuccessPage() {
  const classes = useStyles();
  const history = useHistory();

  const handleDone = () => {
    history.push('/donor');
  }

  return (
    <Grid container classes={{root: classes.root}}>
      <div className={classes.check}><DoneIcon classes={{root: classes.checkIcon}} /></div>
      <h2>You've now made an immediate impact on students struggling for food!</h2>
      <Button
        variant="contained"
        color="primary"
        onClick={handleDone}>Awesome!
      </Button>
    </Grid>
  );
}