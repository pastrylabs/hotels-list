import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import SplitButton from "../SplitButton/SplitButton";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    title: {
      flexGrow: 1
    }
  })
);

export default function ActionsBar(props: {
  hotelCount: number;
  location: string;
  handleHotelsSort: (index: number) => void;
}) {
  const classes = useStyles();
  const { hotelCount, handleHotelsSort, location } = props;

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            {`${hotelCount} hotels in ${location}`}
          </Typography>
          <SplitButton handleClick={handleHotelsSort} />
        </Toolbar>
      </AppBar>
    </div>
  );
}
