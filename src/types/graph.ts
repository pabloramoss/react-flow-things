import { Node, Edge } from "reactflow";

import { initialNode } from "../constants/initialNode";

export interface Graph {
  nodes: Node[];
  edges: Edge[];
  sidebarOpen: boolean;
}

export const GraphInitialState: Graph = {
  nodes: [initialNode],
  edges: [],
  sidebarOpen: false,
};

export type NodeType = "sourceNode" | "defaultNode" | "targetNode";
