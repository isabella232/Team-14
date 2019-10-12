import React, { useState, useEffect } from "react";
//@ts-ignore
import DropIn from "braintree-web-drop-in-react";
import { RouteComponentProps, withRouter, useHistory } from "react-router";
import { Button, CircularProgress, makeStyles, Theme, createStyles, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      weight: '98vw',
      justifyContent: 'center',
      alignContent: 'center',
    }
  }),
);

function PaymentPageInner(props: RouteComponentProps<any>) {
  const [instance, setInstance] = useState(null as any);
  const [clientToken, setClientToken] = useState(null as string | null);
  const [amount, setAmount] = useState(10.00);
  const history = useHistory();

  useEffect(() => {
    const run = async () => {
      // Get a client token for authorization from your server
      const response = await fetch("http://localhost:8080/paypal/payments/token");
      const clientToken = await response.text(); // If returned as JSON string
      setClientToken(clientToken);
    };

    run();
  }, []);

  const buy = async () => {
    // Send the nonce to your server
    const { nonce } = await instance.requestPaymentMethod();
    console.log('payment', { nonce });
    const data = JSON.stringify({ amount: amount.toFixed(2) })
    const response = await fetch(`http://localhost:8080/paypal/payments/donate/${nonce}`, { method: 'POST', body: data, headers: { 'Content-Type': 'application/json' } });
    const result = await response.json();
    console.log('payment', result);
    if (result.status === 'ok') {
      history.replace('/donor/success');
    }
  }

  const classes = useStyles();

    if (!clientToken) {
      return (
        <Grid container classes={{ root: classes.container }}>
          <CircularProgress />
        </Grid>
      );
    } else {
      return (
        <Grid container classes={{root: classes.container}}>
          <h2 style={{marginBottom: '0.2em'}}>Donation Amount</h2>
          <h1 style={{marginTop: '0.2em' }}>${amount}</h1>
          <div style={{minHeight: '50vh'}}>
          <DropIn
            options={{ authorization: clientToken }}
            onInstance={(instance: any) => setInstance(instance)}
          />
          </div>
          <Button
            variant="contained"
            color="primary"
            onClick={buy}>Donate Now!</Button>
        </Grid>
      );
    }
}

export const PaymentPage = withRouter(PaymentPageInner);