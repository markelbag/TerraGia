import * as React from "react"
import { useState } from "react"
import { Food } from "../../../data"
import AddToCartModal from "../addToCartModal/addToCartModal"

const MenuFood = props => {
  const [show, setShow] = useState(false)
  const [menuItem, setMenuItem] = useState({})

  const handleClick = item => {
    setShow(true)
    setMenuItem(item)
  }

  return (
    <div>
      {show && <AddToCartModal item={menuItem} show={show} setShow={setShow} />}
      {Food.map(item => (
        <div key={item.id}>
          <div>
            <h1 className="text-4xl font-extralight pt-6">{item.type}</h1>
            <div className="flex w-60 text-left">
              {item.item}
              {item.choice}
            </div>

            <button onClick={() => handleClick(item)}>
              <h2 className="flex w-56 text-left justify-between font-extralight text-xl">
                <div>{item.name}</div>
                <div>{item.price} </div>
              </h2>
              <p className=" tgGreen text-sm w-48 text-left">
                {item.ingrediants && <i>{item.ingrediants.join(", ")}</i>}
                {item.choices && <i>{item.choices.join(" ")}</i>}
              </p>
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default MenuFood
