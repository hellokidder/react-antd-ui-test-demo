import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import DebounceButton from ".";

function sleep(time: number, result?: string) {
  return new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve(result ? result : "");
    }, time);
  });
}
describe("event", () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  test("debounce", async () => {
    // jest.useFakeTimers();

    // 600
    console.time("timer");
    const clickEvent = jest.fn();
    render(<DebounceButton onClick={clickEvent} />);
    const btn = screen.getByTestId("but1");
    // const btn = screen.getByRole("button");
    userEvent.click(btn);
    userEvent.click(btn);
    sleep(5000);
    // jest.runAllTimers();
    jest.runOnlyPendingTimers();
    userEvent.click(btn);
    sleep(300);
    jest.runOnlyPendingTimers();

    expect(clickEvent).toBeCalled();
    expect(clickEvent).toHaveBeenCalledTimes(2);
    console.timeEnd("timer");
  });
  it("timer", async () => {
    jest.useFakeTimers();
    // jest.useRealTimers();
    console.time("timer");
    let res = sleep(4000, "this is a string");
    // jest.runOnlyPendingTimers();
    jest.runAllTimers();
    await expect(res).resolves.toBe("this is a string");
    console.timeEnd("timer");
  });
});

it("message", async () => {
  render(<DebounceButton onClick={() => {}} />);
  const btn = screen.getByTestId("but2");
  userEvent.click(btn);
  const message = await screen.findByText("this is a error");
  expect(message).toBeInTheDocument();
});
