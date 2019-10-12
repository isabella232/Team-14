import React from "react";
import { Theme, makeStyles, createStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import { FancyRadioButtons } from "../../../components/fancy-radio-buttons/FancyRadioButtons";

const images = [
  {
    url: '/static/img/category-student.jpg',
    title: 'Student',
    width: '50%',
  },
  {
    url: '/static/img/.jpg',
    title: 'Donor',
    width: '50%',
  },
];

export function UserCategoryStep() {
  return (
    <>
      <FancyRadioButtons items={images} />
    </>
  )
}