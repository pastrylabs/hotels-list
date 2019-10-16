import React from "react";
import Typography from "@material-ui/core/Typography";

const HotelAddress = (props: HotelAddressProps) => {
  const { street, city } = props;

  return (
    <Typography variant="h5" component="h3">
      {street.concat(", ", city)}
    </Typography>
  );
};

export default HotelAddress;
