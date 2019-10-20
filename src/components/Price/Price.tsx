import React from "react";
import { ListItem, ListItemText, List } from "@material-ui/core";

const Price = (props: PriceProps) => {
  const { amount, currency, savings } = props;
  return (
    <List dense={true}>
      <ListItem>
        <ListItemText
          primary={`$${amount}`}
          secondary={`1 Night total ${currency}`}
        />
      </ListItem>
      {savings ? (
        <ListItem>
          <ListItemText primary={`Savings $${savings}~`} />
        </ListItem>
      ) : null}
    </List>
  );
};

export default Price;
