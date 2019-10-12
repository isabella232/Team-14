import React from "react";
import { Theme, makeStyles, createStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import { FancyRadioButtons } from "../../../components/fancy-radio-buttons/FancyRadioButtons";
import { Button } from "@material-ui/core";

export function HelloStep() {
  return (
    <>
      <h1>USustain</h1>
      <img src="/static/img/Logo.png" />
      <h3>Now you can have a direct impact on the 36% of students who are struggling to eat today. And be helped with your next meal as a college student.</h3>
      <Button 
        variant="contained"
        color="primary">
        Start Now!
      </Button>
    </>
  );
}