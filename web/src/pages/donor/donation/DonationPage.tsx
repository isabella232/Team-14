import React, { useState } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import TextField from '@material-ui/core/TextField';
import ToggleButton from '@material-ui/lab';
import { Button, Grid } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     formControl: {
//       margin: theme.spacing(3),
//     },
//   }),
// );
const useStyles = makeStyles(theme => ({
  fab: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  formControl: {
    margin: theme.spacing(1),
  },
  removePadding: {
    marginBottom: '0.2em',
  },
  header: {
    paddingTop: theme.spacing(1)
  },
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    flexDirection: 'column',
    textAlign: 'center',
  }
}));

export function DonationPage() {
  const classes = useStyles();
  const history = useHistory();
  const [enableAlmaMater, setEnabledAlmaMater] = useState(null as boolean | null);
  const [cycleKind, setCycleKind] = useState(null as string | null);

  return (
    <Grid container classes={{ root: classes.root }}>
      <h3 className={classes.removePadding}>Do you want to donate to your school?</h3>
      <FormControl name="donate-school-group" component="fieldset" className={classes.formControl}>
        <RadioGroup aria-label="yes" name="donate-school" value={enableAlmaMater} onChange={(e) => setEnabledAlmaMater((e.target as HTMLInputElement).value === "true")}>
          <Grid item xs={12}>
            <FormControlLabel
              value="true"
              control={<Radio color="primary" />}
              label="Yes"
            />
            <FormControlLabel
              value="false"
              control={<Radio color="primary" />}
              label="No"
            />
          </Grid>
        </RadioGroup>
      </FormControl>
      <h3 className={classes.removePadding}>The meal average cost in Chicago</h3>
      <h2>$10</h2>
      <h3 className={classes.removePadding}>How many meals do you want to donate?</h3>
      <TextField type="number"></TextField>

      <h3 className={classes.removePadding}>How would you like to donate?</h3>
      <FormControl name="donate-cycle-group" component="fieldset" className={classes.formControl}>
        <RadioGroup aria-label="Recuring" name="donate-cycle" value={cycleKind} onChange={(e) => setCycleKind((e.target as HTMLInputElement).value)}>
          <FormControlLabel
            value="recurring"
            control={<Radio color="primary" />}
            label="Recurring"
          />
          <FormControlLabel
            value="single"
            control={<Radio color="primary" />}
            label="One-time"
          />
        </RadioGroup>
      </FormControl>

      <div>
        <Button
          variant="contained"
          color="primary"
          onClick={(e) => history.push("/donor/payment")}>Donate Now!
        </Button>
      </div>
    </Grid>
  );
}