import { useRef } from "react";
import ReactFlow, { Controls, Background } from "reactflow";

import "reactflow/dist/style.css";
import { useStore } from "reactflow";

import { nodeTypes } from "../../constants/nodes";
import Toolbar from "../Toolbar/Toolbar";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setSidebarOpen } from "../../redux/slices/graphSlice";
import useGraphHandlers from "../../hooks/useGraphHandlers";
import useUpdateGraph from "../../hooks/useUpdateGraph";

export const Graph: React.FC = () => {
  const { nodes, edges } = useAppSelector((state) => state.graph);
  const element = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();
  const { onNodesChange, onEdgesChange, onConnect } = useGraphHandlers();
  const { addNewNode } = useUpdateGraph();

  const onNodeClick = () => {
    dispatch(setSidebarOpen(true));
  };
  const onPaneClick = () => {
    dispatch(setSidebarOpen(false));
  };

  const handleNewNode = () => {
    const dimensions = element.current?.getBoundingClientRect();

    addNewNode({ width: dimensions!.width, height: dimensions!.height });
  };

  return (
    <div ref={element} style={{ height: "100%", width: "100%" }}>
      <button
        style={{ zIndex: 700, position: "absolute", top: "0", left: "0" }}
        onClick={handleNewNode}
      >
        New node
      </button>
      <Toolbar />
      <ReactFlow
        edges={edges}
        id="este-es-un-id"
        nodeTypes={nodeTypes}
        nodes={nodes}
        onConnect={onConnect}
        onEdgesChange={onEdgesChange}
        onNodeClick={onNodeClick}
        onNodesChange={onNodesChange}
        onPaneClick={onPaneClick}
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default Graph;
