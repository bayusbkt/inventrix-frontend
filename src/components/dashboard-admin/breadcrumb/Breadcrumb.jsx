import React from "react";
import "./breadcrumb.css";

export const Breadcrumb = (props) => {
  return (
    <div className="breadcrumb">
      <p>Inventrix</p>
      <p>{`>`}</p>
      <p>{props.page}</p>
    </div>
  );
};
