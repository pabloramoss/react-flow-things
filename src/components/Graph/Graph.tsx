import { useRef } from "react";
import ReactFlow, { Controls, Background, useReactFlow, useStore } from "reactflow";

import "reactflow/dist/style.css";
import { nodeTypes } from "../../constants/nodes";
import Toolbar from "../Toolbar/Toolbar";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { addNode, setSidebarOpen } from "../../redux/slices/graphSlice";
import useGraphHandlers from "../../hooks/useGraphHandlers";

export const Graph: React.FC = () => {
  const { nodes, edges } = useAppSelector((state) => state.graph);
  const element = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();
  const { onNodesChange, onEdgesChange, onConnect } = useGraphHandlers();
  const { project } = useReactFlow();

  const handleNewNode = () => {
    const dimensions = element.current?.getBoundingClientRect();
    const relativePosition = project({ x: dimensions!.width / 2, y: dimensions!.height / 2 });

    const centerX = relativePosition.x - 100;
    const centerY = relativePosition.y;
    const position = { x: centerX, y: centerY };

    const newNode = {
      id: String(Date.now()),
      data: { label: "Hello", blockId: "1" },
      position,
      type: "defaultNode",
    };

    dispatch(addNode(newNode));
  };
  const onNodeClick = () => {
    dispatch(setSidebarOpen(true));
  };
  const onPaneClick = () => {
    dispatch(setSidebarOpen(false));
  };
  const selectedNodes = useStore((store) => store.getNodes().filter((node) => node.selected));

  return (
    <div ref={element} style={{ height: "100%", width: "100%" }}>
      <button
        style={{ zIndex: 700, position: "absolute", top: "0", left: "0" }}
        onClick={handleNewNode}
      >
        New node
      </button>
      <button onClick={() => console.log(selectedNodes)}>console</button>
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
