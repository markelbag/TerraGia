import * as React from "react"
import { useState } from "react"
import { DrinksMenu } from "../../../DrinksMenu"
import AddToCartModal from "../addToCartModal/addToCartModal"

const MenuDrinks = props => {
  const [show, setShow] = useState(false)
  const [menuItem, setMenuItem] = useState({})

  const handleClick = item => {
    setShow(true)
    setMenuItem(item)
  }

  return (
    <div>
      {show && <AddToCartModal item={menuItem} show={show} setShow={setShow} />}
      {DrinksMenu.map(drinkCategory => (
        <div key={drinkCategory.category}>
          <div>
            <h1 className="text-4xl font-extralight pt-6">
              {drinkCategory.category}
            </h1>
            {drinkCategory.drinks.map(drink => (
              <div key={drink.id}>
                <h2 onClick={() => handleClick(drink)}className="flex w-72 justify-between font-extralight text-xl">
                  <div>{drink.name}</div>
                  <div>{drink.basePrice}</div>
                </h2>
                <p className="flex tgGreen text-sm w-64 text-left">
                  {drink.ingrediants && <i>{drink.ingrediants.join(", ")}</i>}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default MenuDrinks
