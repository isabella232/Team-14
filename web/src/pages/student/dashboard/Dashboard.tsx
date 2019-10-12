import React from 'react';
import { Button, Grid, Fab } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';
import { getThemeProps } from '@material-ui/styles';
const useStyles = makeStyles(theme => ({
  fab: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  center:{
    textAlign: 'center'
  },
  header:{
    paddingTop: theme.spacing(2)
  }
}));
export function Dashboard() {
  const classes = useStyles();
  return (
    <Grid className={classes.center} container={true}>
      <Grid item xs ={12}>
      <h2>
       Redeem a Meal:
     </h2>
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
     <Grid item xs={12}>
     <h2 className={classes.header}>
       Meals Balance:
      </h2>
       <h2 className={classes.header}>
       xxx meals
       </h2>
       </Grid>
      <Grid item xs={12}>
      <h2 className={classes.header}>
       Meals Redeemed To Date:
       </h2>
       <h2 className={classes.header}>
       xxx meals
       </h2>
       </Grid>
</Grid>
  );
}

