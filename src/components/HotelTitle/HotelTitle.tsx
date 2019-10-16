import React, { useState } from "react";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const TITLE_MAX_CHARACTERS = 20;

const useStyles = makeStyles(theme => ({
  popover: {
    pointerEvents: "none"
  },
  paper: {
    padding: theme.spacing(1)
  }
}));

// Can be refactored to a separate component
// As this can be useful to render long Address as well
const MouseOverPopover = (props: { title: string }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handlePopoverOpen = (event: { currentTarget: any }) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = anchorEl !== null;

  return (
    <div>
      <Typography
        variant="h5"
        component="h3"
        aria-owns={open ? "mouse-over-popover" : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
      >
        {props.title.slice(0, 21).concat("...")}
      </Typography>
      <Popover
        id="mouse-over-popover"
        className={classes.popover}
        classes={{
          paper: classes.paper
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left"
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left"
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Typography>{props.title}</Typography>
      </Popover>
    </div>
  );
};

const HotelTitle = (props: HotelTitleProps) => {
  const { title } = props;

  return title.length > TITLE_MAX_CHARACTERS ? (
    <MouseOverPopover title={title} />
  ) : (
    <Typography variant="h5" component="h3">
      {title}
    </Typography>
  );
};

export default HotelTitle;
