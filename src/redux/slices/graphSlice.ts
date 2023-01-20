import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  Connection,
  Node,
  NodeChange,
  updateEdge,
} from "reactflow";

import { GraphInitialState as initialState } from "../../types/graph";

type NodeId = string;

const graphSlice = createSlice({
  name: "graph",
  initialState,
  reducers: {
    addNode: (state, action: PayloadAction<Node>) => {
      state.nodes.push(action.payload);
    },
    deleteNode: (state, action: PayloadAction<NodeId>) => {
      const nodeId = action.payload;
      const newNodesArray = state.nodes.filter((node) => node.id !== nodeId);

      state.nodes = newNodesArray;
    },
    copyNode: (state, action: PayloadAction<Node>) => {
      const { position } = action.payload;
      const nodePosition = { x: position.x + 100, y: position.y + 100 };
      const node = state.nodes.find((node) => node.id === action.payload.id);

      if (node) {
        const newNode = { ...node, id: `${node.id}-copy`, position: nodePosition };

        state.nodes.push(newNode);
      }
    },
    modifyNode: (state, action: PayloadAction<Node>) => {
      const nodeIndex = state.nodes.findIndex((node) => node.id === action.payload.id);

      state.nodes.splice(nodeIndex, 1, action.payload);
    },
    updateNodes: (state, action: PayloadAction<any>) => {
      state.nodes = action.payload;
    },
    updateEdges: (state, action: PayloadAction<any>) => {
      state.edges = action.payload;
    },
    nodesChange: (state, action: PayloadAction<NodeChange[]>) => {
      const newNodeArray = applyNodeChanges(action.payload, state.nodes);

      state.nodes = newNodeArray;
    },
    edgesChange: (state, action: PayloadAction<any>) => {
      const newEdgeArray = applyEdgeChanges(action.payload, state.edges);

      state.edges = newEdgeArray;
    },
    connectChange: (state, action: PayloadAction<Connection>) => {
      const newEdgeArray = addEdge(action.payload, state.edges);

      state.edges = newEdgeArray;
    },
    updateSingleEdge: (state, action: PayloadAction<any>) => {
      const { oldEdge, newConnection } = action.payload;
      const newEdgesArray = updateEdge(oldEdge, newConnection, state.edges);

      state.edges = newEdgesArray;
    },
    removeEdge: (state, action: PayloadAction<any>) => {
      const edge = action.payload;
      const newEdgesArray = state.edges.filter((e) => e.id !== edge.id);

      state.edges = newEdgesArray;
    },
    setSidebarOpen: (state, action: PayloadAction<boolean>) => {
      state.sidebarOpen = action.payload;
    },
  },
});

export const {
  addNode,
  deleteNode,
  copyNode,
  modifyNode,
  updateNodes,
  updateEdges,
  nodesChange,
  edgesChange,
  connectChange,
  removeEdge,
  updateSingleEdge,
  setSidebarOpen,
} = graphSlice.actions;

export default graphSlice.reducer;
