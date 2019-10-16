import React from "react";
import { render } from "@testing-library/react";
import CancellationOption from "../CancellationOption";

it("Render Free Cancellation Offer", () => {
  const props = {};
  const { getByText } = render(
    <CancellationOption cancellationType="FREE_CANCELLATION" />
  );
  expect(getByText(/Free Cancellation/i)).toBeInTheDocument();
});

it("Render null for Non Refundable Offer", () => {
  const props = {};
  const { container } = render(
    <CancellationOption cancellationType="NOT_REFUNDABLE" />
  );
  const rating = container.querySelector("p");
  expect(rating === null);
});
