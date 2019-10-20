import React from "react";
import { render } from "@testing-library/react";
import HotelImage from "../HotelImage";

it("Render image", () => {
  const { container } = render(
    <HotelImage imageSrc="assets/img" caption="description" />
  );
  expect(container).toMatchSnapshot();
});

it("Render image with offer", () => {
  const { getByText, getByAltText } = render(
    <HotelImage
      imageSrc="assets/img"
      caption="description"
      offer="exclusive deal"
    />
  );
  expect(getByText(/exclusive deal/i)).toBeInTheDocument();
});
