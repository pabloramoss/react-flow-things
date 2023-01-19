import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Node } from "reactflow";

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
      state.nodes = state.nodes.filter((node) => node.id !== action.payload);
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
    setSidebarOpen: (state, action: PayloadAction<boolean>) => {
      state.sidebarOpen = action.payload;
    },
  },
});

export const { addNode, deleteNode, copyNode, setSidebarOpen } = graphSlice.actions;

export default graphSlice.reducer;
