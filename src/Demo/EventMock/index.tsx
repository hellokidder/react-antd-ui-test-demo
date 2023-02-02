import { Button } from "antd";
import React from "react";

function debounce(func: () => void, delay: number) {
  let timer: any = null;
  return function () {
    timer && clearTimeout(timer);
    timer = setTimeout(function (this: any, ...args) {
      func.apply(this, args);
      timer = null;
    }, delay);
  };
}

export interface buttonProps {
  onClick: () => void;
}
const DebounceButton = ({ onClick }: buttonProps) => {
  return <Button onClick={debounce(onClick, 200)}>button</Button>;
  // return <Button onClick={onClick}>button</Button>;
};

export default DebounceButton;
