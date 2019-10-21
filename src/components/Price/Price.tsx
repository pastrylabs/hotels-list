import React from "react";
import { ListItem, ListItemText, List } from "@material-ui/core";

const Price = (props: PriceProps) => {
  const { amount, currency, savings } = props;
  return (
    <List dense={true}>
      <ListItem style={{ padding: 0 }}>
        <ListItemText
          primary={`$${amount}`}
          primaryTypographyProps={{ variant: "h4" }}
          secondary={`1 Night total ${currency}`}
        />
      </ListItem>
      {savings ? (
        <ListItem style={{ padding: 0 }}>
          <ListItemText
            primary={`Savings $${savings}~`}
            style={{ color: "red" }}
          />
        </ListItem>
      ) : null}
    </List>
  );
};

export default Price;
