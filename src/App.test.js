import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("<App/>", () => {
  test("renders React Starter Pack", () => {
    render(<App />);
    expect(screen.getByText(/react starter pack/i)).toBeInTheDocument();
  });

  // Below is what our old test example looked like.
  // Updated test following advice from...
  // https://kentcdodds.com/blog/common-mistakes-with-react-testing-library

  // test("renders React Starter Pack", () => {
  //   const { getByText } = render(<App />);
  //   expect(getByText(/react starter pack/i)).toBeInTheDocument();
  // });
});
