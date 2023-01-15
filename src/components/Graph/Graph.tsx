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
import { initialNodes1, initialEdges } from "../../constants/graph";

import SourceNode from "./customNodes/SourceNode";
import DefaultNode from "./customNodes/DefaultNode";
import TargetNode from "./customNodes/TargetNode";

const nodeTypes = {
  sourceNode: SourceNode,
  targetNode: TargetNode,
  defaultNode: DefaultNode,
};

export const Graph: React.FC = () => {
  const [nodes, setNodes] = useState<Node[]>(initialNodes1);
  const [edges, setEdges] = useState<Edge[]>(initialEdges);
  const element = useRef<HTMLDivElement>(null);

  const onNodesChange = useCallback(
    (changes: NodeChange[]) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [],
  );
  const onEdgesChange = useCallback(
    (changes: EdgeChange[]) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [],
  );

  const onConnect = useCallback((params: any) => setEdges((eds) => addEdge(params, eds)), []);

  const handleNewNode = () => {
    const dimensions = element.current?.getBoundingClientRect();
    const position = { x: dimensions!.width / 2 - 100, y: dimensions!.height / 2 };

    const newNode = {
      id: String(Date.now()),
      data: { label: "Hello", blockId: "1" },
      position,
      type: "sourceNode",
    };
    const newArray = nodes.concat(newNode);

    setNodes(newArray);
  };

  return (
    <div ref={element} style={{ height: "100%", width: "100%" }}>
      <button style={{ zIndex: 700 }} onClick={handleNewNode}>
        New node
      </button>
      <ReactFlow
        edges={edges}
        id="este-es-un-id"
        nodeTypes={nodeTypes}
        nodes={nodes}
        onConnect={onConnect}
        onEdgesChange={onEdgesChange}
        onNodesChange={onNodesChange}
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default Graph;
