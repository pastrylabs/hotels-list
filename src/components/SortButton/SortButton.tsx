import React, { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import SortIcon from "@material-ui/icons/Sort";
import Grid from "@material-ui/core/Grid/Grid";

const options = ["Price Low-High", "Price High-Low"];

const ITEM_HEIGHT = 48;

export default function SortButton(props: { dataSortHandler: any }) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event: React.MouseEvent<HTMLElement>) => {
    if (event.currentTarget && event.currentTarget.innerText) {
      props.dataSortHandler(
        options.indexOf(event.currentTarget.innerText) === 0 ? 1 : -1
      );
    }

    setAnchorEl(null);
  };

  return (
    <Grid container direction="column" alignItems="flex-end">
      <Grid item xs={10}>
        <IconButton
          aria-label="sort"
          aria-controls="long-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          <SortIcon />
        </IconButton>
        <Menu
          id="long-menu"
          anchorEl={anchorEl}
          keepMounted
          open={open}
          onClose={handleClose}
          PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: 200
            }
          }}
        >
          {options.map(option => (
            <MenuItem key={option} onClick={handleClose}>
              {option}
            </MenuItem>
          ))}
        </Menu>
      </Grid>
    </Grid>
  );
}
