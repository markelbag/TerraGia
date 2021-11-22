import * as React from "react"
import { useState } from "react"
import { Drinks } from "../../../data2"
import AddToCartModal from "../addToCartModal/addToCartModal"

const MenuDrinks = props => {
  const [show, setShow] = useState(false)
  const [menuItem, setMenuItem] = useState({})

  const handleClick = item => {
    setShow(true)
    setMenuItem(item)
    console.log(item.price)
  }

  return (
    <div>
      {show && <AddToCartModal item={menuItem} show={show} setShow={setShow} />}
      {Drinks.map(item => (
        <div key={item.id}>
          <div>
            <h1 className="text-4xl font-extralight pt-6">{item.type}</h1>
            <button onClick={() => handleClick(item)}>
                {item.items.map((item) => ( 
              <h2 className="flex w-64 justify-between font-extralight text-xl">
                <div>{item.name}</div>
                <div>{item.price} </div>
                <p className="flex tgGreen text-sm w-48 text-left">
                {item.ingrediants && <i>{item.ingrediants.join(", ")}</i>}
                {/* {item.options.map((option)=> (
                  <div>{option.type}</div>
                ))} */}
              </p>
                </h2>

                ))}
            </button>
          </div>
        </div>

      ))}
    </div>
  )
}

export default MenuDrinks
