import React from "react";
import { render } from "@testing-library/react";
import HotelAddress from "../HotelAddress";

it("Render hotel Address", () => {
  const props = {};
  const { getByText } = render(
    <HotelAddress street="333 Collins St" city="Melbourne" />
  );
  expect(getByText(/333 Collins St, Melbourne/i)).toBeInTheDocument();
});
