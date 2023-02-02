/* eslint-disable testing-library/no-debugging-utils */
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import Antd from "./index";

test("Role", () => {
  render(<Antd />);
  const but = screen.getByRole("button");
  userEvent.click(but);
  debugger;
});
