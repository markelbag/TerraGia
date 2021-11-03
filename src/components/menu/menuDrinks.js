import * as React from "react"
import { Drinks } from "../../../data"

const MenuDrinks = (props) => (
    <div>
        {Drinks.map((item, itemIdx) => (
            <div key={item.id} className={itemIdx % 2 === 0 }>
              <div >
             <h1 className="text-4xl font-extralight pt-6">{item.type}</h1>
             <h2 className="flex w-56 justify-between font-extralight text-xl">
               {item.item}
               <div>{item.name}</div><div>{item.price} </div></h2>
             <p className="tgGreen text-sm w-48"><i>{item.ingrediants}{item.blend}</i></p>
              </div>
            </div>
          ))}
    </div>
)

export default MenuDrinks;