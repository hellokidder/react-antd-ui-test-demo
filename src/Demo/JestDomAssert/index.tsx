import { Drawer } from "antd";
import React from "react";

const VisibleDemo = () => {
  return (
    <div data-testid="t">
      <div data-testid="t1"></div>
      <div role="alertdialog"> </div>
      <div role="alertdialog" aria-describedby="des" aria-label="ssss">
        123
      </div>
      <div data-testid="t3" style={{ display: "none" }}>
        123
      </div>
    </div>
  );
};

export default VisibleDemo;
