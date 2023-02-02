import { Button, message } from "antd";
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
  const error = () => {
    message.error("this is a error");
  };
  return (
    <React.Fragment>
      <Button data-testid="but1" onClick={debounce(onClick, 200)}>
        button
      </Button>
      <Button data-testid="but2" onClick={error}>
        massage
      </Button>
    </React.Fragment>
  );
  // return <Button onClick={onClick}>button</Button>;
};

export default DebounceButton;
