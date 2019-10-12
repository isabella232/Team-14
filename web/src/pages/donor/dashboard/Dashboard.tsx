import React from 'react';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router';

export function Dashboard() {
  const history = useHistory();

  const handleClick = () => {
    history.push('/donor/donate')
  }

  return (
    <>
      <p>THERE'S MORE TEXT THAT GOES HERE BRO FOR DONOR</p>
      <Button size="large" onClick={handleClick}>
        Large
      </Button>
    </>
  );
}