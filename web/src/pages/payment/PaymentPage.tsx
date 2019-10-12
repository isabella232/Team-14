import React from "react";
//@ts-ignore
import DropIn from "braintree-web-drop-in-react";
import { Router, RouteComponentProps, withRouter } from "react-router";
import { Button } from "@material-ui/core";

class PaymentPageInner extends React.Component<RouteComponentProps<any>> {
  instance: any;

  state = {
    clientToken: null
  };

  constructor(props: any) {
    super(props);
  }

  async componentDidMount() {
    // Get a client token for authorization from your server
    const response = await fetch("http://localhost:8080/paypal/payments/token");
    const clientToken = await response.text(); // If returned as JSON string

    this.setState({
      clientToken
    });
  }

  readonly buy = async () => {
    // Send the nonce to your server
    const { nonce } = await this.instance.requestPaymentMethod();
    console.log('payment', { nonce });
    const data = JSON.stringify({ amount: '10.00' })
    const response = await fetch(`http://localhost:8080/paypal/payments/donate/${nonce}`, { method: 'POST', body: data, headers: { 'Content-Type': 'application/json'} });
    const result = await response.json();
    console.log('payment', result);
    if (result.status === 'ok') {
      this.props.history.replace('/donor/success');
    }
  }

  render() {
    if (!this.state.clientToken) {
      return (
        <div>
          <h1>Loading...</h1>
        </div>
      );
    } else {
      return (
        <div>
          <DropIn
            options={{ authorization: this.state.clientToken }}
            onInstance={(instance: any) => (this.instance = instance)}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={this.buy}>Donate Now</Button>
        </div>
      );
    }
  }
}

export const PaymentPage = withRouter(PaymentPageInner);