/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
/* eslint-disable testing-library/no-debugging-utils */
import { render, screen } from "@testing-library/react";
import VisibleDemo from ".";
import AntdDemo from "./antd4";
import Formt from "./formt";

describe("可见性断言", () => {
  test("Role", () => {
    render(<VisibleDemo />);
    const dom1 = screen.getByTestId("t1");
    const dom2 = screen.getByRole("alertdialog", { name: "ssss" });
    const dom3 = screen.getByTestId("t3");
    const dom4 = screen.getByTestId("t");
    expect(dom1).toBeEmptyDOMElement();
    expect(dom2).not.toBeEmptyDOMElement();
    expect(dom3).not.toBeVisible();
    expect(dom3).toBeInTheDocument();
    expect(dom3).toHaveTextContent("123");
    expect(dom4).toHaveTextContent("123");
    expect(dom4).not.toHaveTextContent("126");
  });
});

describe("表单", () => {
  it("disabled", () => {
    render(<Formt />);
    const dom = screen.getByTestId("inp1");
    const dom2 = screen.getByTestId("inp2");
    expect(dom).toBeDisabled();
    expect(dom).not.toBeEnabled();
    expect(dom).toBeRequired();

    expect(dom2).not.toHaveFocus();
    dom2.focus();
    expect(dom2).toHaveFocus();
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).not.toBeChecked();

    const radio = screen.getByRole("radio");
    expect(radio).toBeChecked();
    expect(dom2).toHaveValue(99);
    expect(dom2).toHaveDisplayValue("99");

    const form = screen.getByRole("form");
    expect(form).toHaveFormValues({
      num: 99,
    });
  });

  it("元素验证", () => {
    render(<Formt />);
    const inp1 = screen.getByTestId("inp1");
    expect(inp1).toHaveAttribute("type");
    // expect(inp1).toHaveAttribute("type", "test");
    expect(inp1).toHaveAttribute("type", "text");
    expect(inp1).toHaveClass("classTest");
    // expect(inp1).toHaveStyle("backgroundColor: red;color:yellow");
    expect(inp1).toHaveStyle("backgroundColor: red");
    expect(inp1).toHaveStyle("backgroundColor: red;color:blue");
  });
});

describe("antd 组件验证", () => {
  it("inp", () => {
    render(<AntdDemo />);
    const inp = screen.getByRole("textbox");
    expect(inp).toHaveAttribute("type");
    const but = screen.getByRole("button");
    expect(but).toHaveTextContent("测 试");
    const img = screen.getByRole("img");
    expect(img).toBeInTheDocument();
    const drv = screen.getByRole("separator");
    expect(drv).toBeInTheDocument();
  });
});
