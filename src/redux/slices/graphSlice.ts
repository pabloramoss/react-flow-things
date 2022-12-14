import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { Node } from "reactflow";
import { GraphInitialState as initialState } from "../../types/graph"

const graphSlice = createSlice({
  name: "graph",
  initialState,
  reducers: {
    addNode: (state, action: PayloadAction<Node>) => {
      state.nodes.push(action.payload);
    },
    deleteNode: (state, action: PayloadAction<Node>) => {
      state.nodes = state.nodes.filter(node => node.id !== action.payload.id)
    }
  },
});

export const {
  addNode,
  deleteNode,
} = graphSlice.actions;

export default graphSlice.reducer;