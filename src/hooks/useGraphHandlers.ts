import { useCallback, useRef } from "react";
import { Connection, Edge, EdgeChange, NodeChange } from "reactflow";

import {
  connectChange,
  edgesChange,
  nodesChange,
  removeEdge,
  updateSingleEdge,
} from "../redux/slices/graphSlice";
import { useAppDispatch } from "../redux/hooks";

/**
 * useGraphHandlers - Custom hook for updating the React Flow graph.
 *
 * @returns {object} An object containing functions for handling changes in nodes, edges, and connections.
 */

const useGraphHandlers = () => {
  const dispatch = useAppDispatch();

  const onNodesChange = useCallback(
    (changes: NodeChange[]) => {
      dispatch(nodesChange(changes));
    },
    [dispatch],
  );

  const onEdgesChange = useCallback(
    (changes: EdgeChange[]) => {
      dispatch(edgesChange(changes));
    },
    [dispatch],
  );

  const onConnect = useCallback(
    (params: Connection) => {
      dispatch(connectChange(params));
    },
    [dispatch],
  );

  const edgeUpdateSuccessful = useRef(true);

  const onEdgeUpdateStart = useCallback(() => {
    edgeUpdateSuccessful.current = false;
  }, []);

  const onEdgeUpdate = useCallback(
    (oldEdge: Edge, newConnection: Connection) => {
      edgeUpdateSuccessful.current = true;

      const payload = {
        oldEdge,
        newConnection,
      };

      dispatch(updateSingleEdge(payload));
    },
    [dispatch],
  );

  const onEdgeUpdateEnd = useCallback(
    (_: React.MouseEvent, edge: Edge) => {
      if (!edgeUpdateSuccessful.current) {
        dispatch(removeEdge(edge));
      }

      edgeUpdateSuccessful.current = true;
    },
    [dispatch],
  );

  return {
    onNodesChange,
    onEdgesChange,
    onConnect,
    onEdgeUpdateStart,
    onEdgeUpdate,
    onEdgeUpdateEnd,
  };
};

export default useGraphHandlers;
