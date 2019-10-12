import React from 'react';
import DoneIcon from '@material-ui/icons/Done';
import { makeStyles, Theme, createStyles, Button } from '@material-ui/core';
import { useHistory } from 'react-router';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    check: {
      padding: 60,
      borderRadius: '100%',
      backgroundColor: 'green',
      color: 'white',
    },
  }),
);

export function PaymentSuccessPage() {
  const classes = useStyles();
  const history = useHistory();

  const handleDone = () => {
    history.push('/donor');
  }

  return (
    <>
      <div className={classes.check}><DoneIcon /></div>
      <h2>You've now made an immediate impact on students struggling for food!</h2>
      <Button onClick={handleDone}>Awesome!</Button>
    </>
  );
}