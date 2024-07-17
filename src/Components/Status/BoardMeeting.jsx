import React from "react";
import { Card, Button } from "react-bootstrap";
import './Status.css'
function BoardMeeting() {
  return (
    <>
        <Card className="m-4 p-3">
          <div className="d-flex">
            <div>
              <input
                className="form-check-input specifyColor"
                type="radio"
                checked
                disabled
              />
            </div>
            <div className="ps-2">
              <div style={{fontSize:'.9rem',fontWeight:'bold'}}>Board Meeting</div>
              <div style={{fontSize:'.7rem',fontWeight:'500'}}>Mar 22 at 6:00 pm</div>
              <div className="mt-3" style={{fontSize:'.65rem',fontWeight:'500'}}>
              you have been invited to attend a meeting of the Board Directors.
            </div>
            </div>
          </div>
        </Card>
    </>
  );
}

export default BoardMeeting;
