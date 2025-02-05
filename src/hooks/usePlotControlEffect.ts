import { PlotTypesManifest } from "@src/feature/controls_panel/manifest/CONTROLS_MANIFEST";
import { NodeInputOptions } from "@src/feature/controls_panel/types/ControlOptions";
import { PlotControlProps } from "@src/feature/controls_panel/views/PlotControl";
import { PlotControlStateType } from "@src/feature/controls_panel/views/PlotControlState";
import { dataContainer2Plotly } from "@src/utils/format_plotly_data";
import { useCallback, useEffect } from "react";
import { v4 as uuid4 } from "uuid";
import { MantineTheme } from "@mantine/core";

const usePlotControlEffect = ({
  selectedKeys,
  setInputOptions,
  setPlotOptions,
  setSelectedKeys,
  inputOptions,
  nd,
  ctrlObj,
  selectedPlotOption,
  setPlotData,
  theme,
}: PlotControlStateType & {
  nd: PlotControlProps["nd"];
  ctrlObj: PlotControlProps["ctrlObj"];
  selectedPlotOption: PlotControlProps["selectedPlotOption"];
  setPlotData: PlotControlProps["setPlotData"];
  theme: MantineTheme;
}) => {
  /**
   * Updates input options from available inputs in a node
   */
  const updateInputOptions = useCallback(() => {
    const inputOptions: NodeInputOptions[] = [];
    const possibleKeys = ["x", "y", "z"];
    if (nd?.result.data) {
      Object.keys(nd.result.data).forEach((key) => {
        if (possibleKeys.includes(key)) {
          inputOptions.push({ label: key, value: nd.result.data[key] });
        }
      });
    }
    setInputOptions(inputOptions);
  }, [nd, setInputOptions]);
  /**
   * Updates plot value from node result using selected keys
   */
  const updatePlotValue = useCallback(() => {
    if (
      nd?.result?.data &&
      selectedPlotOption &&
      selectedPlotOption.value.type &&
      selectedPlotOption.value.mode
    ) {
      const result = dataContainer2Plotly({
        dataContainer: nd.result.data,
        plotType: selectedPlotOption.value.type,
        plotMode: selectedPlotOption.value.mode,
        theme,
        ...(["image", "plotly"].includes(nd.result.data.type) && {
          fig: nd.result.default_fig.data,
        }),
      });
      setPlotData(result);
    }
  }, [nd, selectedKeys, selectedPlotOption, setPlotData]);

  // update input options automatically when result is changed
  useEffect(() => {
    if (nd?.result) {
      updateInputOptions();
    }
  }, [nd?.result, updateInputOptions]);

  // update selected keys of nodes for plot when input options updated
  useEffect(() => {
    setSelectedKeys((prev) => {
      const updatedKeys = {};
      if (prev) {
        for (const [key, value] of Object.entries(prev)) {
          updatedKeys[key] = inputOptions.find(
            (opt) => opt.label === value?.label
          );
        }
      }
      return updatedKeys;
    });
  }, [inputOptions, setSelectedKeys]);

  // update plot values when selected keys are updated
  useEffect(() => {
    updatePlotValue();
  }, [selectedKeys, updatePlotValue]);

  // Initialize plot type options on component did mount
  useEffect(() => {
    Object.values(PlotTypesManifest).forEach((item) => {
      setPlotOptions((prev) => [
        ...prev,
        {
          label: item.name,
          value: {
            id: `plot_${uuid4()}`,
            type: item.type,
            mode: item.mode,
          },
        },
      ]);
    });
    return () => {
      setPlotOptions([]);
    };
  }, [setPlotOptions]);

  // Cleanup selected keys when ctrlobj parameter is updated
  useEffect(() => {
    return () => {
      setSelectedKeys(null);
    };
  }, [ctrlObj.param, setSelectedKeys]);
};

export default usePlotControlEffect;
