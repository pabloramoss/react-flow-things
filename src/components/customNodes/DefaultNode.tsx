import React, {memo} from "react";
import {Handle, Position} from "reactflow";

import Node, {contentStyle as style} from "./Node";

// @ts-ignore
const DefaultNode = ({data, selected, id}) => {
  return (
    <Node
      id={data.blockId}
      color="lightgrey"
      content={
        // @ts-ignore
        <div style={style.io}>
          {"Default"}
          <Handle
            id="o__data"
            position={Position.Top}
            style={{...style.handle, ...style.right}}
            type="target"
          />
          <Handle
            id="o__data"
            position={Position.Bottom}
            style={{...style.handle, ...style.right}}
            type="source"
          />
        </div>
      }
      label={data.label}
      selected={selected}
    />
  );
};

export default memo(DefaultNode);