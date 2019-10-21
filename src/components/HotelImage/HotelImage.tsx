import React from "react";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import ProgressiveImage from "react-progressive-image";
import Skeleton from "@material-ui/lab/Skeleton";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100% !important"
    },
    fullHeight: {
      height: "100%"
    },
    image: {
      width: "100%",
      height: "100%"
    }
  })
);

const placeholder = <Skeleton variant="rect" width="100%" height="100%" />;

const HotelImage = (props: HotelImageProps) => {
  const classes = useStyles();
  const { imageSrc, caption, offer } = props;

  return (
    <GridList>
      <GridListTile
        classes={{ root: classes.root, imgFullHeight: classes.fullHeight }}
      >
        <ProgressiveImage src={imageSrc} placeholder="">
          {(src: string, loading: boolean) => {
            return loading ? (
              placeholder
            ) : (
              <>
                <img src={src} alt={caption} className={classes.image} />
                <noscript>
                  <img
                    className="progressive-image no-script"
                    src={src}
                    alt={caption}
                  />
                </noscript>
              </>
            );
          }}
        </ProgressiveImage>
        ;{offer ? <GridListTileBar title={offer} /> : null}
      </GridListTile>
    </GridList>
  );
};

export default HotelImage;
