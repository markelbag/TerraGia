import * as React from "react"
import NavItem from "./navItem"
import { Link } from "gatsby"

const NavBar = props => (
  <div className="flex w-3/4 h-full justify-evenly">
    <NavItem>
      <Link to="/menu">cafe</Link>
    </NavItem>
    <NavItem>
      <Link to="/nursery">nursery</Link>
    </NavItem>
    <NavItem>
      <Link to="/classes">classes</Link>
    </NavItem>
    <NavItem>
      <Link to="/contact">contact</Link>
    </NavItem>
  </div>
)

export default NavBar
