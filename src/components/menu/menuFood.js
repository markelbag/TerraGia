import * as React from "react"
import { useState } from "react"
import { FoodMenu } from "../../../FoodMenu"
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
      {FoodMenu.map(foodCategory => (
        <div key={foodCategory.category}>
          <div>
            <h1 className="pt-6 text-4xl font-extralight">
              {foodCategory.category}
            </h1>
            {foodCategory.foods.map(food => (
              <div
                role="button"
                tabindex={0}
                onClick={() => handleClick(food)}
                onKeyDown={() => handleClick(food)}
                key={food.id}
              >
                <h2 className="flex justify-between text-xl w-72 font-extralight">
                  <div>{food.name}</div>
                  <div>{food.basePrice}</div>
                </h2>
                <p className="flex w-64 text-sm text-left tgGreen">
                  {food.ingrediants && <i>{food.ingrediants.join(", ")}</i>}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default MenuFood
