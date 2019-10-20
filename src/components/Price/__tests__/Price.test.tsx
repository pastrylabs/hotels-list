import React from "react";
import { render } from "@testing-library/react";
import Price from "../Price";

it("Render Display price in given currency", () => {
  const { getByText } = render(<Price amount={500} currency="AUD" />);
  expect(getByText(/[$]500/i)).toBeInTheDocument();
  expect(getByText(/1 Night total AUD/i)).toBeInTheDocument();
});

it("Render Display price with savings if present", () => {
  const { getByText } = render(
    <Price amount={500} currency="AUD" savings={50} />
  );
  expect(getByText(/Savings [$]50~/i)).toBeInTheDocument();
});
