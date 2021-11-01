import * as React from "react"
import { Link } from "gatsby"
import "./nav.css"

const NavItem = (props) => (
 <div className="flex h-full font-bold nitem pb-6 pt-6">
     <div>
         {props.children}
     </div>
 </div> 
)

export default NavItem;
