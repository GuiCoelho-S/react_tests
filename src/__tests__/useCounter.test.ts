/**
 * @jest-environment jsdom
 */

import { useCounter } from "../hooks/useCounter";
import { act, renderHook } from "@testing-library/react-hooks";

describe("useCounter hook testing methods", () => {

  it("default value as equal to 0", () => {

    const { result } = renderHook(useCounter);

    expect(result.current.count).toBe(0);
  });

  it("increment count by 1", () => {

    const { result } = renderHook(useCounter);

    act(() => {
      result.current.increment()
    })

    expect(result.current.count).toBe(1)
  });


  it("decrement count by 1", () => {
    const { result } = renderHook(useCounter);

    act(() => {
      result.current.decrement()
    })

    expect(result.current.count).toBe(-1);
  });

})

