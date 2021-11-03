import * as React from "react"
import { Food } from "../../../data"

const MenuFood = (props) => (
    <div>
        {Food.map((item, itemIdx) => (
            <div key={item.id} className={itemIdx % 2 === 0 }>
              <div >
             <h1 className="text-4xl font-extralight pt-6">{item.type}</h1>
             <div className="w-60">{item.item}{item.choice}</div>
             <h2 className="flex w-56 justify-between font-extralight text-xl">
               <div>{item.name}</div><div>{item.price} </div></h2>
             <p className="tgGreen text-sm w-48"><i>{item.ingrediants}{item.blend}
             <div>{item.choices}</div></i></p>
              </div>
            </div>
          ))}
    </div>
)

export default MenuFood;