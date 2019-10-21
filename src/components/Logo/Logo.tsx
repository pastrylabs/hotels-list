import React from "react";
import Grid from "@material-ui/core/Grid/Grid";

const Logo = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={3}>
        <header style={{ padding: "2em 0 " }}>
          <img src="/qantas-logo.png" alt="Qantas Logo" width="100%" />
        </header>
      </Grid>
    </Grid>
  );
};

export { Logo };
