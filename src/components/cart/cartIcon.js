import React from "react"
import { Link } from "gatsby"

const CartIcon = () => {
  return (
    <Link to="/">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="#A4B38B"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
        />
      </svg>
      <div className="-mt-4 ml-2 flex">
        <div className="text-xs w-3 h-3">3</div>
      </div>
    </Link>
  )
}

export default CartIcon
