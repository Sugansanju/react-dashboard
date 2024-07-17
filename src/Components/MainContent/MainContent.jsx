import React from "react";
import FirstRow from "./FirstRow/FirstRow";
import SecondRow from "./SecondRow/SecondRow";
import ThirdRow from "./ThirdRow/ThirdRow";

function MainContent() {
  return (
    <>
      <div className="fs-4 fw-semibold pb-3">Welcome back, suganya !</div>
      <div>
        <FirstRow />
        <SecondRow />
        <ThirdRow />
      </div>
    </>
  );
}

export default MainContent;
