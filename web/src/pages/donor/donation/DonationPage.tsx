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
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(3),
    },
  }),
);

export function DonationPage() {
  const classes = useStyles();
  const history = useHistory();
  const [enableAlmaMater, setEnabledAlmaMater] = useState(null as boolean | null);
  const [cycleKind, setCycleKind] = useState(null as string | null);

  return (
    <>
      <p>Do you want to donate to your school?</p>
      <FormControl name="donate-school-group" component="fieldset" className={classes.formControl}>
        <RadioGroup aria-label="yes" name="donate-school" value={enableAlmaMater} onChange={(e) => setEnabledAlmaMater((e.target as HTMLInputElement).value === "true")}>
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
        </RadioGroup>
      </FormControl>
      <p>The meal average cost in Chicago is $10</p>
      <p>How many meals do you want to donate?</p>
      <TextField> </TextField>

      <p>How would you like to donate?</p>
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
    </>
  );
}