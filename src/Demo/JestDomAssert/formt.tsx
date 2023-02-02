import { Form, Input, Radio } from "antd";
import React from "react";

const Formt = () => {
  return (
    <form aria-label="form">
      <input
        type="text"
        className="classTest"
        disabled
        style={{ backgroundColor: "red", color: "blue" }}
        required
        data-testid="inp1"
      />
      <input type="number" name="num" required data-testid="inp2" value={99} />
      <input type="checkbox" />
      <input type="radio" checked />
    </form>
  );
};

export default Formt;
