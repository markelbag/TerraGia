import * as React from "react"
import { Drinks } from "../../../data"

const MenuItem = (props) => (
    <div>
        {Drinks.map((item, itemIdx) => (
            <div key={item.id} className={itemIdx % 2 === 0 }>
              <div >
             <h1 className="text-4xl font-extralight">{item.type}</h1>
             <h2 className="flex w-56 justify-between font-extralight text-xl">
               <div>{item.name}</div><div>{item.price}</div></h2>
             <p className="tgGreen text-sm w-48"><i>{item.ingrediants}</i></p>
              </div>
            </div>
          ))}
    </div>
)

export default MenuItem;