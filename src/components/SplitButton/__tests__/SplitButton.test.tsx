import React from "react";
import { render, fireEvent } from "@testing-library/react";
import SplitButton from "../SplitButton";

it("Render split button", () => {
  const handler = jest.fn((index: number) => {});
  const props = { handleClick: handler };
  const { getByText } = render(<SplitButton {...props} />);
  expect(getByText(/Price low-high/i)).toBeInTheDocument();
});

it("Should not trigger handler when the option hasn't changed", () => {
  const handler = jest.fn((index: number) => {});
  const props = { handleClick: handler };
  const { getByText } = render(<SplitButton {...props} />);
  expect(getByText(/Price low-high/i)).toBeInTheDocument();

  fireEvent.click(getByText(/Price low-high/i));
  expect(handler).toHaveBeenCalledTimes(0);
});
