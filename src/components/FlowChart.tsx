import { useState, useCallback } from 'react';
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
} from 'reactflow';
import 'reactflow/dist/style.css';
import SourceNode from "./customNodes/SourceNode";
import DefaultNode from "./customNodes/DefaultNode";
import TargetNode from "./customNodes/TargetNode";

const initialNodes: Node[] = [
  {
    id: "1",
    data: { label: 'Hello', blockId: "1" },
    position: { x: 0, y: 0 },
    type: 'sourceNode',
  },
  {
    id: "2",
    data: { label: 'World', blockId: "1" },
    position: { x: 100, y: 100 },
    type: 'defaultNode'
  },
  {
    id: "3",
    data: { label: 'Hola', blockId: "2" },
    position: { x: 100, y: 100 },
    type: 'targetNode'
  },
];
const initialEdges: Edge[] = []

const nodeTypes = {
  sourceNode: SourceNode,
  targetNode: TargetNode,
  defaultNode: DefaultNode,
};

function FlowChart() {
  const [nodes, setNodes] = useState<Node[]>(initialNodes);
  const [edges, setEdges] = useState<Edge[]>(initialEdges);

  const onNodesChange = useCallback(
    (changes: NodeChange[]) => setNodes((nds) => applyNodeChanges(changes, nds)),
    []
  );
  const onEdgesChange = useCallback(
    (changes: EdgeChange[]) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    []
  );

  const onConnect = useCallback((params: any) => setEdges((eds) => addEdge(params, eds)), []);

  return (
    <div style={{ height: '100%' }}>
      <button onClick={() => console.log(nodes)}>se</button>
      <ReactFlow
        nodes={nodes}
        onNodesChange={onNodesChange}
        edges={edges}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}

export default FlowChart;
