import React, {memo} from "react";
import {Handle, Position} from "reactflow";

import Node, {contentStyle as style} from "./Node";

// @ts-ignore
const SourceNode = ({data, selected, id}) => {
  return (
    <Node
      id={data.blockId}
      color="#add5fa"
      content={
        // @ts-ignore
        <div style={style.io}>
          {"Source"}
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

export default memo(SourceNode);