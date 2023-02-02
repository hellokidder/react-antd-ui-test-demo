import { render, screen } from "@testing-library/react";
import QueryDom from ".";

it("query", () => {
  render(<QueryDom />);
  let but = screen.getByRole("button");
  let label = screen.getAllByLabelText("Username");
  let agelabel = screen.getByLabelText("age");
  let placeholder = screen.getByPlaceholderText("99");
  let text = screen.getByText("Username");
  let display = screen.getByDisplayValue("12333");
  let alt = screen.getByAltText("this is a alt");
  let title = screen.getByTitle("this is a title");
  let otherTitle = screen.getByTitle("other title");
  let testId = screen.getByTestId("test-id");
  expect(but).toBeInTheDocument();
  expect(label[0]).toBeInTheDocument();
  expect(agelabel).toBeInTheDocument();
  expect(placeholder).toBeInTheDocument();
  expect(text).toBeInTheDocument();
  expect(display).toBeInTheDocument();
  expect(title).toBeInTheDocument();
  expect(alt).toBeInTheDocument();
  expect(otherTitle).toBeInTheDocument();
  expect(testId).toBeInTheDocument();
});
