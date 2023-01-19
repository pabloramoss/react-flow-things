import { useState, useCallback, useRef } from "react";
import ReactFlow, {
  Controls,
  Background,
  applyNodeChanges,
  applyEdgeChanges,
  addEdge,
  Edge,
  Node,
  NodeChange,
  EdgeChange,
} from "reactflow";

import "reactflow/dist/style.css";
import { initialNode } from "../../constants/initialNode";
import Toolbar from "../Toolbar/Toolbar";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { addNode, setSidebarOpen } from "../../redux/slices/graphSlice";
import useGraphHandlers from "../../hooks/useGraphHandlers";

import SourceNode from "./customNodes/SourceNode";
import DefaultNode from "./customNodes/DefaultNode";
import TargetNode from "./customNodes/TargetNode";

const nodeTypes = {
  sourceNode: SourceNode,
  targetNode: TargetNode,
  defaultNode: DefaultNode,
};

export const Graph: React.FC = () => {
  const { nodes, edges } = useAppSelector((state) => state.graph);
  const element = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();
  const { onNodesChange, onEdgesChange, onConnect } = useGraphHandlers();

  const handleNewNode = () => {
    const dimensions = element.current?.getBoundingClientRect();
    const position = { x: dimensions!.width / 2 - 100, y: dimensions!.height / 2 };

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
