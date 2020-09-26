import React from "react";
import { render } from "@testing-library/react";
// import "@testing-library/jest-dom/extend-expect";
import App from "./App";

describe("<App/>", () => {
  test("renders React Starter Pack", () => {
    const { getByText } = render(<App />);
    expect(getByText(/react starter pack/i)).toBeInTheDocument();
  });
});
