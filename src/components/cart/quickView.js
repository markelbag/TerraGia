import React from "react"
import { createPortal } from "react-dom"
import "./quickview.css"

const QuickView = ({ show, setShow, props }) => {
  const content = show && (
    <div>
      <div className="backdrop" >
        <div className="flex h-full">
          <div className="flex w-full justify-center items-center">
            <div className=" w-80 h-auto modal pl-6">
              items
              <button className="pl-28" onClick={() => setShow(false)}>
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
  return createPortal(content, document.body)
}

export default QuickView
