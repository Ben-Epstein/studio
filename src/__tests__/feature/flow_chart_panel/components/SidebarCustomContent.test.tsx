import { renderWithTheme } from "@src/__tests__/__utils__/utils";
import SidebarCustomContent from "@src/feature/flow_chart_panel/components/SidebarCustomContent";
import { fireEvent } from "@testing-library/react";

const onAddNode = jest.fn();

describe("SidebarCustomContent component", () => {
  it("renders correctly with default props", () => {
    const { container, getByTestId } = renderWithTheme(
      <SidebarCustomContent onAddNode={onAddNode} />
    );
    const reqNodeBtn = getByTestId("request-node-btn");
    expect(reqNodeBtn).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
  it("Fires onAddNode function upon clicking on End node button.", () => {
    const { getByTestId } = renderWithTheme(
      <SidebarCustomContent onAddNode={onAddNode} />
    );
    const endNodeBtn = getByTestId("end-node-btn");
    fireEvent.click(endNodeBtn);
    expect(onAddNode).toBeCalledWith("END");
  });
});
