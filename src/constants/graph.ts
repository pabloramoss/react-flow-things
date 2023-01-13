import { Edge, Node } from "reactflow";

export const initialNodes1: Node[] = [
  {
    id: "1",
    data: { label: "Hello", blockId: "1" },
    position: { x: 0, y: 0 },
    type: "sourceNode",
  },
  {
    id: "2",
    data: { label: "World", blockId: "1" },
    position: { x: 100, y: 100 },
    type: "defaultNode",
  },
  {
    id: "3",
    data: { label: "Hola", blockId: "2" },
    position: { x: 100, y: 100 },
    type: "targetNode",
  },
];

export const initialNodes2: Node[] = [
  {
    id: "1",
    data: { label: "Hello", blockId: "1" },
    position: { x: 0, y: 0 },
    type: "sourceNode",
  },
  {
    id: "2",
    data: { label: "World", blockId: "1" },
    position: { x: 400, y: 400 },
    type: "defaultNode",
  },
  {
    id: "3",
    data: { label: "Hola", blockId: "2" },
    position: { x: 200, y: 200 },
    type: "targetNode",
  },
];

export const initialEdges: Edge[] = [];
