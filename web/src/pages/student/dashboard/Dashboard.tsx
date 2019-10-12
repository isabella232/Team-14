import React from 'react';
import { Button, Grid, Fab } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';
import { getThemeProps } from '@material-ui/styles';
import { useHistory } from 'react-router';
const useStyles = makeStyles(theme => ({
  fab: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  center: {
    textAlign: 'center'
  },
  header: {
    marginBlockStart: '0.1em',
    paddingTop: theme.spacing(2),
    paddingBottom: 0,
  },
  subheader: {
    paddingTop: 0,
    paddingBottom: '1em',
    marginBlockEnd: '0.1em',
  },
  callout: {
    padding: theme.spacing(1),
  }
}));
export function Dashboard() {
  const classes = useStyles();
  const history = useHistory();

  const handleClickMap = () => {
    history.push('/student/map');
  }

  const handleClickVendors = () => {
    history.push('/student/vendors');
  }

  return (
    <Grid className={classes.center} container={true}>
      <Grid xs={12} style={{ marginBlockStart: '0.75em', display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
        <img src="/static/img/Logo.png" width="56" height="56" /><h2 style={{ display: 'inline', paddingLeft: '0.2em', fontFamily: "'Bree Serif', serif"}}>USustain</h2>
      </Grid>

      <Grid xs={12} style={{ marginBlockStart: '0.25em'}} classes={{ root: classes.callout }}>
        <Paper>
          <h2 className={classes.header}>
            Meals Balance
          </h2>
          <h3 className={classes.subheader}>
            2 meals
          </h3>
        </Paper>
      </Grid>
      <Grid xs={12} classes={{ root: classes.callout }}>
        <Paper>
          <h2 className={classes.header}>
            Meals Redeemed To Date
       </h2>
          <h3 className={classes.subheader}>
            16 meals
       </h3>
        </Paper>
      </Grid>

      <Grid item xs={12}>
        <h2>
          Redeem a Meal
        </h2>
      </Grid>

      <Grid className={classes.center} item xs={12}>
        <Fab variant="extended" aria-label="delete" className={classes.fab} onClick={handleClickMap}>
          <LocalGroceryStoreIcon className={classes.extendedIcon} />
          Order Groceries
      </Fab>

      </Grid>
      <Grid className={classes.center} item xs={12}>
        <Fab variant="extended" aria-label="delete" className={classes.fab} onClick={handleClickVendors}>
          <RestaurantIcon className={classes.extendedIcon} />
          Find Vendors Near Me
        </Fab>
      </Grid>
    </Grid>
  );
}

