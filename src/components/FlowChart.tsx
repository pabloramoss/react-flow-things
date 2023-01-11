import { useState, useCallback, useRef, useEffect } from 'react';
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
  ReactFlowProvider,
  useReactFlow
} from 'reactflow';
import 'reactflow/dist/style.css';
import SourceNode from "./customNodes/SourceNode";
import DefaultNode from "./customNodes/DefaultNode";
import TargetNode from "./customNodes/TargetNode";
import { initialNodes1, initialNodes2, initialEdges } from "../constants/graph"

const nodeTypes = {
  sourceNode: SourceNode,
  targetNode: TargetNode,
  defaultNode: DefaultNode,
};

interface Props {
  setNodes: (nodes: any) => void;
  nodes: any;
}
export const Flow: React.FC = () => {
  const [nodes, setNodes] = useState<Node[]>(initialNodes1);
  const [edges, setEdges] = useState<Edge[]>(initialEdges);
  const element = useRef<HTMLDivElement>(null);

  const onNodesChange = useCallback(
    (changes: NodeChange[]) => setNodes((nds) => applyNodeChanges(changes, nds)),
    []
  );
  const onEdgesChange = useCallback(
    (changes: EdgeChange[]) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    []
  );

  const onConnect = useCallback((params: any) => setEdges((eds) => addEdge(params, eds)), []);


  const {getViewport, fitView, fitBounds} = useReactFlow()
  const reactFlowInstance = useReactFlow()
  const handleNewNode = () => {
    const dimensions = element.current?.getBoundingClientRect()
    // const position = project({x: (dimensions!.width)/2 as number, y: (dimensions!.height)/2 as number})
    const position = {x: dimensions!.width/2-100, y: dimensions!.height/2}
    console.log("getBoundingRect", element.current?.getBoundingClientRect())

    const newNode =   {
      id: String(Date.now()),
      data: { label: 'Hello', blockId: "1" },
      position,
      type: 'sourceNode',
    }
    const newArray = nodes.concat(newNode)
    setNodes(newArray)
  }
  
  const ref = useRef<HTMLDivElement>(null)
  const {project} = useReactFlow()

  const handleSetNodes = (nodes: Node[]) => {
    setNodes(nodes)
  }
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  
  return (
    <div ref={element} style={{height: "100%", width: "100%"}}>
      <button style={{zIndex: 700}} onClick={handleNewNode}>New node</button>
      <button style={{zIndex: 700}} onClick={() => handleSetNodes(initialNodes1)}>Example 1</button>
      <button style={{zIndex: 700}} onClick={() => handleSetNodes(initialNodes2)}>Example 2</button>
      <button onClick={() => console.log(element)}>asdf</button>
      <button onClick={() => console.log("viewport", dimensions)}>viewport</button>
      <button onClick={() => reactFlowInstance.setViewport({ x: 0, y: 0, zoom: 2 })}>fitBounds</button>
      <ReactFlow
        id="este-es-un-id"
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
  )
}

function FlowChart() {

  return (
    <div style={{ height: '100%'}}>
      <ReactFlowProvider>
        <Flow/>
      </ReactFlowProvider>
    </div>
  );
}

export default FlowChart;
