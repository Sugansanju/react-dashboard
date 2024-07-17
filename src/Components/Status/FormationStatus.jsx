import React from 'react'
import './Status.css'
import { Image, Card, ProgressBar,Button } from "react-bootstrap";
function FormationStatus() {
  return (
   <>
   <div>
          <Card className="m-3 p-3">
            <div className="" style={{ fontWeight: "600" }}>
              {" "}
              Formation Status
            </div>
            <div style={{ fontSize: ".8rem", fontWeight: "400" }}>
              In Progress
            </div>
            <ProgressBar now={60} className="mt-3" />
            <div className="text-center">
              <div style={{fontSize:'.8rem',fontWeight:'600'}}>Estimated processing</div>
              <div style={{fontSize:'.7rem',fontWeight:'600'}}>4-5 business days</div>
              <div className="pt-3">
                <Button  size="sm"className='btn custom-color' style={{width:"100px"}}>
                  view status
                </Button>{" "}
              </div>
            </div>
          </Card>
        </div>
   </>
  )
}

export default FormationStatus