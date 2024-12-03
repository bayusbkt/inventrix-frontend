import React from "react";
import { RiAlignItemBottomLine } from "react-icons/ri";
import "./itemStatus.css";

export const ItemStatus = (props) => {
  return (
    <div className="item-status">
      <RiAlignItemBottomLine
        size={50}
        className="p-2 text-white rounded-xl"
        style={{
          backgroundColor: `#${props.color}`,
        }}
      />
      <div className="item-status-description">
        <p className="">{props.status}</p>
        <h2 className="">{props.amount}</h2>
      </div>
    </div>
  );
};
