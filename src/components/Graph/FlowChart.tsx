import { ReactFlowProvider } from "reactflow";

import Graph from "./Graph";

function FlowChart() {
  return (
    <div style={{ height: "100%" }}>
      <ReactFlowProvider>
        <Graph />
      </ReactFlowProvider>
    </div>
  );
}

export default FlowChart;
