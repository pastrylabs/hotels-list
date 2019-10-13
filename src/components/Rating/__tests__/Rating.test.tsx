import { render } from "@testing-library/react";
import Rating from "../Rating";
import React from "react";

it("Render null when rating is empty", () => {
  const props = {};
  const { container } = render(<Rating {...props} />);
  const rating = container.querySelector("div");
  expect(rating === null);
});

it("Render rating with given rating and default shape", () => {
  const props = { rating: 2.8 };
  const { getByLabelText } = render(<Rating {...props} />);
  const rating = getByLabelText(/Rating is 2.8 out of 5./i);
  expect(rating).toBeInTheDocument();
  expect(rating.className === "shape circle");
});

it("Render rating with given shape", () => {
  const { getByLabelText } = render(<Rating rating={4.5} shape={"star"} />);
  const rating = getByLabelText(/Rating is 4.5 out of 5./i);
  expect(rating).toBeInTheDocument();
  expect(rating.className === "shape star");
});

it("Render rating with unknown shape", () => {
  const props = { rating: 2.8, shape: "circus" };
  const { getByLabelText } = render(<Rating {...(props as any)} />);
  const rating = getByLabelText(/Rating is 2.8 out of 5./i);
  expect(rating).toBeInTheDocument();
  expect(rating.className === "shape circle");
});

it("Render rating with rating > MAX", () => {
  const { getByLabelText } = render(<Rating rating={200} />);
  const rating = getByLabelText(/Rating is 5 out of 5./i);
  expect(rating).toBeInTheDocument();
});

it("Render rating with rating < MIN", () => {
  const { getByLabelText } = render(<Rating rating={-200} />);
  const rating = getByLabelText(/Rating is 0 out of 5./i);
  expect(rating).toBeInTheDocument();
});
