import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import DebounceButton from ".";

function sleep(time: number) {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
}
describe("event", () => {
  it("debounce", async () => {
    const clickEvent = jest.fn();
    render(<DebounceButton onClick={clickEvent} />);
    const btn = screen.getByRole("button");
    userEvent.click(btn);
    userEvent.click(btn);
    await sleep(300);

    userEvent.click(btn);
    await sleep(300);

    expect(clickEvent).toBeCalled();
    expect(clickEvent).toHaveBeenCalledTimes(2);
  });
});
