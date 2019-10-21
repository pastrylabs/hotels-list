import React from "react";
import Typography from "@material-ui/core/Typography";

const HotelAddress = (props: HotelAddressProps) => {
  const { street, city } = props;

  return <Typography>{street.concat(", ", city)}</Typography>;
};

export default HotelAddress;
