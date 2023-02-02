import React from "react";
import ReactDOM from "react-dom/client";
import Antd from "./Demo/Antd";
import reportWebVitals from "./reportWebVitals";
import "antd/dist/antd.min.css"; // or 'antd/dist/antd.less'
import Formt from "./Demo/JestDomAssert/formt";
import AntdDemo from "./Demo/JestDomAssert/antd4";
import DebounceButton from "./Demo/EventMock";
import QueryDom from "./Demo/QueryDom";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Antd />
    <Formt />
    <AntdDemo />
    <DebounceButton
      onClick={() => {
        console.log("do");
      }}
    />
    <QueryDom />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
