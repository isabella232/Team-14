import React from "react";
import { AppBar, Toolbar, Typography, IconButton, Button, createStyles, makeStyles, Theme } from "@material-ui/core";
import BackButtonIcon from '@material-ui/icons/ArrowBack';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);
export function TopBar({title}: {title: string}){
    const classes = useStyles();
    return (
        <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <BackButtonIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {title}
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    )
}