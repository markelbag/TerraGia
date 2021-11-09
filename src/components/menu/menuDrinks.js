import * as React from "react"
import {useState} from 'react'
import { Drinks } from "../../../data"
import AddToCartModal from "../addToCartModal/addToCartModal"

const MenuDrinks = (props) => {
  const [show, setShow] = useState(false)

return (
    <div>
        {Drinks.map((item, itemIdx) => (
            <div key={item.id} className={itemIdx % 2 === 0 }>
              <div >
             <h1 className="text-4xl font-extralight pt-6">{item.type}</h1>
             <button onClick={() => setShow(true)}>
             <h2 className="flex w-56 justify-between font-extralight text-xl">
               {item.item}
               <div>{item.name}</div><div>{item.price} </div></h2>
             <p className="flex tgGreen text-sm w-48 text-left"><i>{item.ingrediants}{item.blend}</i></p>
              </button>
              <AddToCartModal show={show} setShow={setShow}/>
              </div>
            </div>
          ))}
    </div>
)}

export default MenuDrinks;