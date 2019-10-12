import React from 'react';
import { Button, Grid, Fab } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';
const useStyles = makeStyles(theme => ({
  fab: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  center:{
    textAlign: 'center'
  }
}));
export function Dashboard() {
  const classes = useStyles();
  return (
    <Grid className={classes.center} container={true}>
      <Grid item xs ={12}>
      <Paper>
       Redeem a Meal:
     </Paper>
      </Grid>
     
     <Grid className={classes.center} item xs={12}>
     <Fab variant="extended" aria-label="delete" className={classes.fab}>
        <LocalGroceryStoreIcon className={classes.extendedIcon} />
        Order Groceries
      </Fab>

    </Grid>
     <Grid className={classes.center} item xs={12}>
     
     <Fab variant="extended" aria-label="delete" className={classes.fab}>
        <RestaurantIcon className={classes.extendedIcon} />
        Find Vendors Near Me
      </Fab>
      
     </Grid>
     <Grid item xs={6}>
     <Paper>
       Meals Redeemed To Date: xxx meals
      </Paper>
      </Grid>
      <Grid item xs={6}>
       Meal Balance: xxx meals
       </Grid>

</Grid>
  );
}

