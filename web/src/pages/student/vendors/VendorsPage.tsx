import React from "react";
import { Theme, makeStyles, createStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import { FancyRadioButtons } from "../../../components/fancy-radio-buttons/FancyRadioButtons";

const images = [
  {
    url: '/static/img/BlueApron.jpg',
    title: 'Blue Apron',
    width: '50%',
  },
  {
    url: '/static/img/HelloFresh.jpg',
    title: 'Hello Fresh',
    width: '50%',
  },
  {
    url: '/static/img/PurpleCarrot.jpg',
    title: 'Purple Carrot',
    width: '50%',
  },
  {
    url: '/static/img/Freshly.jpg',
    title: 'Freshly',
    width: '50%',
  },
  {
    url: '/static/img/SunBasket.jpg',
    title: 'Sun Basket',
    width: '50%',
  },
];

export function VendorsPage() {
  return (
    <>
      <FancyRadioButtons items={images} />
    </>
  )
}