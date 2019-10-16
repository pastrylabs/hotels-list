import React from "react";
import Typography from "@material-ui/core/Typography";
import capitalize from "../../utils/capitalize";

const CancellationOption = (props: CancellationOptionProps) => {
  if (props.cancellationType !== "FREE_CANCELLATION") {
    return null;
  }

  return (
    <Typography component="p" style={{ color: "#044BA0" }}>
      {props.cancellationType
        .split("_")
        .map(capitalize)
        .join(" ")}
    </Typography>
  );
};

export default CancellationOption;
