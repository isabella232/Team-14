import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
export function Dashboard() {
  return (
    <>
      <p>Student Dashboard </p>
      <Button size="large" color="primary" >
        Order Groceries
       </Button>
    
     <Button size="large" color="primary" >
       Find Vendors Near Me
     </Button>
     <Paper>
       Meals Redeemed To Date: xxx meals

      </Paper>
       Meal Balance: xxx meals


</>
  );
}

