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
            <h1 className="text-4xl font-extralight pt-6">
              {foodCategory.category}
            </h1>
            {foodCategory.foods.map(food => (
              <div key={food.id}>
                <h2 onClick={() => handleClick(food)} className="flex w-72 justify-between font-extralight text-xl">
                  <div>{food.name}</div>
                  <div>{food.basePrice}</div>
                </h2>
                <p className="flex tgGreen text-sm w-64 text-left">
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
