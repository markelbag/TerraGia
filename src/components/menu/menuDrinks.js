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
            <h1 className="pt-6 pb-4 text-4xl font-extralight">
              {drinkCategory.category}
            </h1>
            {drinkCategory.drinks.map(drink => (
              <div
                role="button"
                tabindex={0}
                onClick={() => handleClick(drink)}
                onKeyDown={() => handleClick(drink)}
                key={drink.id}
              >
                <h2 className="flex justify-between pb-1 text-xl w-72 font-extralight">
                  <div>{drink.name}</div>
                  <div>{drink.basePrice}</div>
                </h2>
                <p className="flex w-64 pb-4 text-sm text-left tgGreen">
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
