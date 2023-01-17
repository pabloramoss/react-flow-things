import "./App.css";
import FlowChart from "./components/Graph/FlowChart";
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
      <FlowChart />
      <SidebarNode />
    </div>
  );
}

export default App;
