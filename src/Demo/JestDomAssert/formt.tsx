import React from "react";

const Formt = () => {
  return (
    <form aria-label="form">
      <button>按钮</button>
      <button>按钮2</button>
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
