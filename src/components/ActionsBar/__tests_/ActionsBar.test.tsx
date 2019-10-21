import React from "react";
import { render } from "@testing-library/react";
import ActionsBar from "../ActionsBar";

it("Render Hotels Count and location", () => {
  const props = {
    hotelCount: 10,
    location: "mars",
    handleHotelsSort: jest.fn((x: number) => {})
  };
  const { getByText } = render(<ActionsBar {...props} />);
  expect(getByText(/10 hotels in mars/i)).toBeInTheDocument();
});

it("Render Hotel Count and location", () => {
  const props = {
    hotelCount: 1,
    location: "mars",
    handleHotelsSort: jest.fn((x: number) => {})
  };
  const { getByText } = render(<ActionsBar {...props} />);
  expect(getByText(/1 hotel in mars/i)).toBeInTheDocument();
});

it("Render hotel sorter button", () => {
  const props = {
    hotelCount: 10,
    location: "mars",
    handleHotelsSort: jest.fn((x: number) => {})
  };
  const { getByText } = render(<ActionsBar {...props} />);
  expect(getByText(/Price low-high/i)).toBeInTheDocument();
});
