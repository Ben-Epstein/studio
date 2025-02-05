import { renderHook, act } from "@testing-library/react";
import { useResultsTabState } from "@src/feature/results_panel/ResultsTabState";
import { NOISY_SINE } from "@src/data/RECIPES";

describe("useResultsTabState", () => {
  it("should initialize resultNodes to an empty array", () => {
    const { result } = renderHook(() => useResultsTabState());
    expect(result.current.resultNodes).toEqual([]);
  });

  it("should set resultNodes to a new array", () => {
    const { result } = renderHook(() => useResultsTabState());
    act(() => {
      result.current.setResultNodes(NOISY_SINE.nodes);
    });
    expect(result.current.resultNodes).toEqual(NOISY_SINE.nodes);
  });
});
