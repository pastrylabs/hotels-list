import React from "react";
import { render } from "@testing-library/react";
import SortButton from "../SortButton";

it("Render split button", () => {
  const handler = jest.fn((index: number) => {});
  const props = { handleClick: handler };
  const { getByText } = render(<SortButton />);
  expect(getByText(/price high-low/i)).toBeInTheDocument();
  expect(getByText(/price low-high/i)).toBeInTheDocument();
});
