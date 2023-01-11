import { Node, Edge } from "reactflow";
import { initialNode } from "../constants/initialNode";

export interface Graph {
  nodes: Node[];
  edges: Edge[];
}

export const GraphInitialState: Graph = {
  nodes: [initialNode],
  edges: [],
}

export type NodeType = "sourceNode" | "defaultNode" | "targetNode"
