import { render } from "@testing-library/react";
import App from "../App";
import React from "react";

it("renders welcome message", () => {
  const { getByText } = render(<App />);
  // expect(getByText("Learn React")).toBeInTheDocument();
});
