import React from "react";
import "./Companies.css";

const Companies = () => {
  return (
    <>
      <div className="companies">
        <div className="companies__header">
          <h1 className="companies__title">
            Over 32k+ software businesses growing with AR Shakir.
          </h1>
        </div>
        <div className="companies__img">
          <img src="/images/openzeppeir.svg" alt="" />
          <img src="/images/oracle.svg" alt="" />
          <img src="/images/morpheus.svg" alt="" />
          <img src="/images/samsung.svg" alt="" />
          <img src="/images/monday.svg" alt="" />
          <img src="/images/segment.svg" alt="" />
          <img src="/images/protonet.svg" alt="" />
        </div>
      </div>
    </>
  );
};

export default Companies;
