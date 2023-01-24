import { Node } from "reactflow";

export function iterateNodes(nodes: Node[], n: number) {
  let newNodes = [];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < nodes.length; j++) {
      let node = nodes[j];

      newNodes.push({
        ...node,
        id: node.id + 1 + i,
        position: { x: node.position.x + 600 * i, y: node.position.y },
        positionAbsolute: { x: node.position.x + 600 * i, y: node.position.y },
      });
    }
  }

  return newNodes;
}

export const initialNodes = [
  {
    id: "1674518494854",
    data: {
      label: "New node",
      text: "",
    },
    position: {
      x: 490.4597610566159,
      y: 221.67337315723074,
    },
    type: "defaultNode",
    width: 200,
    height: 60,
    selected: true,
    positionAbsolute: {
      x: 490.4597610566159,
      y: 221.67337315723074,
    },
    dragging: false,
  },
  {
    id: "1674518499057",
    data: {
      label: "New node",
      text: "",
    },
    position: {
      x: 23.5,
      y: 482.5,
    },
    type: "defaultNode",
    width: 200,
    height: 60,
    selected: false,
    positionAbsolute: {
      x: 23.5,
      y: 482.5,
    },
    dragging: false,
  },
  {
    id: "1674518511354",
    data: {
      label: "New node",
      text: "",
    },
    position: {
      x: 341.49329196762,
      y: 491.6197184173884,
    },
    type: "defaultNode",
    width: 200,
    height: 60,
    selected: false,
    positionAbsolute: {
      x: 341.49329196762,
      y: 491.6197184173884,
    },
    dragging: false,
  },
  {
    id: "1674518521140",
    data: {
      label: "New node",
      text: "",
    },
    position: {
      x: 636.1101005588232,
      y: 497.13688711759823,
    },
    type: "defaultNode",
    width: 200,
    height: 60,
    selected: false,
    positionAbsolute: {
      x: 636.1101005588232,
      y: 497.13688711759823,
    },
    dragging: false,
  },
  {
    id: "1674518530486",
    data: {
      label: "New node",
      text: "",
    },
    position: {
      x: 919.6925717496067,
      y: 496.03345337755616,
    },
    type: "defaultNode",
    width: 200,
    height: 60,
    selected: false,
    positionAbsolute: {
      x: 919.6925717496067,
      y: 496.03345337755616,
    },
    dragging: false,
  },
  {
    id: "1674518538911",
    data: {
      label: "New node",
      text: "",
    },
    position: {
      x: 40.255880936165156,
      y: 700.1686952853187,
    },
    type: "defaultNode",
    width: 200,
    height: 60,
    selected: false,
    positionAbsolute: {
      x: 40.255880936165156,
      y: 700.1686952853187,
    },
    dragging: false,
  },
  {
    id: "1674518545485",
    data: {
      label: "New node",
      text: "",
    },
    position: {
      x: 322.7349183869067,
      y: 707.8927314656124,
    },
    type: "defaultNode",
    width: 200,
    height: 60,
    selected: false,
    positionAbsolute: {
      x: 322.7349183869067,
      y: 707.8927314656124,
    },
    dragging: false,
  },
  {
    id: "1674518551864",
    data: {
      label: "New node",
      text: "",
    },
    position: {
      x: 629.4894981185714,
      y: 707.8927314656124,
    },
    type: "defaultNode",
    width: 200,
    height: 60,
    selected: false,
    positionAbsolute: {
      x: 629.4894981185714,
      y: 707.8927314656124,
    },
    dragging: false,
  },
  {
    id: "1674518552032",
    data: {
      label: "New node",
      text: "",
    },
    position: {
      x: 947.2784152506556,
      y: 716.7202013859481,
    },
    type: "defaultNode",
    width: 200,
    height: 60,
    selected: false,
    positionAbsolute: {
      x: 947.2784152506556,
      y: 716.7202013859481,
    },
    dragging: false,
  },
];

export const initialEdges = [
  {
    source: "1674518494854",
    sourceHandle: "o__data",
    target: "1674518499057",
    targetHandle: "o__data",
    id: "reactflow__edge-1674518494854o__data-1674518499057o__data",
  },
  {
    source: "1674518494854",
    sourceHandle: "o__data",
    target: "1674518511354",
    targetHandle: "o__data",
    id: "reactflow__edge-1674518494854o__data-1674518511354o__data",
  },
  {
    source: "1674518494854",
    sourceHandle: "o__data",
    target: "1674518521140",
    targetHandle: "o__data",
    id: "reactflow__edge-1674518494854o__data-1674518521140o__data",
  },
  {
    source: "1674518494854",
    sourceHandle: "o__data",
    target: "1674518530486",
    targetHandle: "o__data",
    id: "reactflow__edge-1674518494854o__data-1674518530486o__data",
  },
  {
    source: "1674518499057",
    sourceHandle: "o__data",
    target: "1674518538911",
    targetHandle: "o__data",
    id: "reactflow__edge-1674518499057o__data-1674518538911o__data",
  },
  {
    source: "1674518511354",
    sourceHandle: "o__data",
    target: "1674518545485",
    targetHandle: "o__data",
    id: "reactflow__edge-1674518511354o__data-1674518545485o__data",
  },
  {
    source: "1674518521140",
    sourceHandle: "o__data",
    target: "1674518551864",
    targetHandle: "o__data",
    id: "reactflow__edge-1674518521140o__data-1674518551864o__data",
  },
  {
    source: "1674518530486",
    sourceHandle: "o__data",
    target: "1674518552032",
    targetHandle: "o__data",
    id: "reactflow__edge-1674518530486o__data-1674518552032o__data",
  },
];
