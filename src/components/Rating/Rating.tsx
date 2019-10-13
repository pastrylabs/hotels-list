import React from "react";

import "./styles.css";

// Ideally these should be configurable
const MIN_RATING_SCORE = 0,
  MAX_RATING_SCORE = 5;
const DEFAULT_RATING_SYMBOL = "circle";

const parseRating = (rating: Number) => {
  if (rating < MIN_RATING_SCORE) {
    return MIN_RATING_SCORE;
  }

  if (rating > MAX_RATING_SCORE) {
    return MAX_RATING_SCORE;
  }

  return rating;
};

const Rating = (props: RatingProps) => {
  if (!props.rating) {
    return null;
  }

  // While this may seem overdefensive
  // this data could be from a 3rd party API and hence the data is unreliable
  // So instead of validating the data at the render site
  // It's better to validate in the library and switch to defaults
  const rating = parseRating(props.rating);
  const shapeSymbol =
    (props.shape as RatingSymbolShape) || DEFAULT_RATING_SYMBOL;

  return (
    <div
      className={`shape ${shapeSymbol}`}
      style={{ "--rating": rating } as React.CSSProperties}
      aria-label={`Rating is ${rating} out of 5.`}
    ></div>
  );
};

export default Rating;
