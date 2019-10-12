import React from "react";
import { Theme, makeStyles, createStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import { FancyRadioButtons } from "../../../components/fancy-radio-buttons/FancyRadioButtons";
import { CardMedia } from '@material-ui/core';

const styles =
{

  media: {
    height: '0',
    paddingTop: '0', // 16:9,
    marginTop: '0',
    width: '0',
  }
};

export function GetMap() {
  return (
    <>
      <CardMedia style={styles.media}>
        <img src={'/static/img/Maps.png'} alt="recipe thumbnail" />
      </CardMedia>
    </>
  )
}
