import * as React from "react"
import NavItem from "./navItem"
import { Link } from "gatsby"

const NavBar = props => (
  <div className="flex w-full h-full justify-evenly hover:text-[#940436]">
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
