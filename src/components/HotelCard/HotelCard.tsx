import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Price from "../Price/Price";
import HotelImage from "../HotelImage/HotelImage";
import HotelAddress from "../HotelAddress/HotelAddress";
import { Chip } from "@material-ui/core";
import HotelTitle from "../HotelTitle/HotelTitle";
import CancellationOption from "../CancellationOption/CancellationOption";
import Rating from "../Rating/Rating";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(1),
    margin: theme.spacing(1),
    width: "80%"
  }
}));

const HotelCard = (props: HotelCardProps) => {
  const {
    imageSrc,
    caption,
    offer,
    street,
    city,
    amount,
    currency,
    savings,
    title,
    cancellationType,
    roomOffer
  } = props;
  const classes = useStyles();
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Paper className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={3}>
            <HotelImage imageSrc={imageSrc} caption={caption} offer={offer} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <HotelTitle title={title} />
            <HotelAddress street={street} city={city} />
            <div style={{ margin: "20px 0px" }}>
              <Rating rating={4.3} shape="star" />
            </div>
            <div style={{ margin: "20px 0px" }}>
              <CancellationOption cancellationType={cancellationType} />
            </div>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Price amount={amount} currency={currency} savings={savings} />
            <Chip size="small" label={roomOffer} />
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default HotelCard;
