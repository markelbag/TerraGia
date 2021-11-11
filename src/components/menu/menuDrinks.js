import * as React from "react"
import {useState} from 'react'
import { Drinks } from "../../../data"
import AddToCartModal from "../addToCartModal/addToCartModal"

const MenuDrinks = (props) => {
  const [show, setShow] = useState(false)
  const [menuItem, setMenuItem] = useState({})

  const handleClick = (item) => {
    setShow(true)
    setMenuItem(item)
  }

return (
    <div>
        {show && <AddToCartModal item={menuItem} show={show} setShow={setShow}/>}
        {Drinks.map((item) => (
            <div key={item.id} >
              <div >
             <h1 className="text-4xl font-extralight pt-6">{item.type}</h1>
             <button onClick={() => handleClick(item)}>
             <h2 className="flex w-56 justify-between font-extralight text-xl">
               {item.item}
               <div>{item.name}</div><div>{item.price} </div></h2>
               <p className="flex tgGreen text-sm w-48 text-left">{item.ingrediants && <i>{item.ingrediants.join(', ')}</i>}{item.blend && <i>{item.blend.join(' ')}</i>}</p>
              </button>
              </div>
            </div>
          ))}
    </div>
)}

export default MenuDrinks;