import React from "react";
import './Status.css'
import Icons from "./Icons";
import FormationStatus from "./FormationStatus";
import TodoContent from "./TodoContent";
import BoardMeeting from "./BoardMeeting";
function Status() {
  return (
    <>
      <div className="main-div">
        <Icons/>
        <FormationStatus/>
        <TodoContent/>
        <BoardMeeting/>
             
      </div>
    </>
  );
}

export default Status;
