import React from "react";
import { render } from "@testing-library/react";
import HotelTitle from "../HotelTitle";

it("Render hotel title", () => {
  const props = {};
  const { getByText } = render(<HotelTitle title="ABC Hotel" />);
  expect(getByText(/ABC Hotel/i)).toBeInTheDocument();
});

it("Wrap hotel title text if it's too long", () => {
  const props = {};
  const { getByText } = render(<HotelTitle title="abababababababababababab" />);
  expect(getByText(/abababababababababab.../i)).toBeInTheDocument();
});
