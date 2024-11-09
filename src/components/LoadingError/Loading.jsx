import React from "react";
import styled from "styled-components";

const Loading = () => {
  return (
    <div className="d-flex justify-content-center">
      <div
        className="spinner-border text-success"
        role="status"
        style={{ width: "50px", height: "50px" }}
      >
        <span className="sr-only" style={{ color: "#fff" }}>
          Loading...
        </span>
      </div>
    </div>
  );
};

export default Loading;
