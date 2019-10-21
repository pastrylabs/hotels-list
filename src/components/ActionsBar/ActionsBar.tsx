import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
// import SplitButton from "../SplitButton/SplitButton";
import SortButton from "../SortButton/SortButton";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      padding: theme.spacing(1)
    },
    title: {
      flexGrow: 1,
      alignItems: "center"
    },
    appBar: {
      background: "#fff"
    },
    toolBar: {
      color: "#323232"
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
  const hotelString = hotelCount > 1 ? "hotels" : "hotel";

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar variant="dense" className={classes.toolBar}>
          <Grid container spacing={2}>
            <Grid
              item
              xs={9}
              sm={6}
              style={{ display: "flex", alignItems: "center" }}
            >
              <Typography variant="h6" className={classes.title}>
                {`${hotelCount} ${hotelString} in ${location}`}
              </Typography>
            </Grid>
            <Grid item xs={3} sm={6}>
              <SortButton dataSortHandler={(x: any) => handleHotelsSort(x)} />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}
