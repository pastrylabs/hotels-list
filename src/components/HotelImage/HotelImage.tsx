import React from "react";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import ProgressiveImage from "react-progressive-image";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    gridList: {
      width: 500,
      height: 450
    }
  })
);

const dominantImageColor = "#86356B";
const placeholder = (
  <div
    style={{ backgroundColor: dominantImageColor, height: 300, width: 500 }}
  />
);

const HotelImage = (props: HotelImageProps) => {
  const classes = useStyles();
  const { imageSrc, caption, offer } = props;

  return (
    <GridList cellHeight={180} className={classes.gridList}>
      <GridListTile>
        <ProgressiveImage src={imageSrc} placeholder="">
          {(src: string, loading: boolean) => {
            return loading ? (
              placeholder
            ) : (
              <>
                <img src={src} alt={caption} />
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
