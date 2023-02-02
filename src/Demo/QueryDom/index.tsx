import React from "react";

const QueryDom = () => {
  return (
    <div>
      QueryDom
      <button>123</button>
      <label id="username">Username</label>
      <input aria-labelledby="username" />
      {/* <span aria-labelledby="username">请输入用户名</span> */}
      <input aria-label="age" placeholder="99" />
      <input value="12333" />
      <img alt="this is a alt" src="/some.png" />
      <span title="this is a title">123</span>
      <svg>
        <title>other title</title>
        <g>
          <path />
        </g>
      </svg>
      <div data-testid="test-id">some ...</div>
    </div>
  );
};

export default QueryDom;
