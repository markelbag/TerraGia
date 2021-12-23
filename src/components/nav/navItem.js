import * as React from "react"
// import { Link } from "gatsby"
import "./nav.css"

const NavItem = props => (
  <div className="flex h-full pt-6 pb-6 font-bold nitem">
    <div>{props.children}</div>
  </div>
)

export default NavItem
