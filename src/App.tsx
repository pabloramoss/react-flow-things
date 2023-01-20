import { ReactFlowProvider } from "reactflow";

import "./App.css";
import { Graph } from "./components/Graph";
import SidebarNode from "./components/SidebarNode/SidebarNode";

function App() {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        position: "absolute",
        top: "0",
        left: "0",
        overflow: "hidden",
      }}
    >
      <ReactFlowProvider>
        <Graph />
        <SidebarNode />
      </ReactFlowProvider>
    </div>
  );
}

export default App;
