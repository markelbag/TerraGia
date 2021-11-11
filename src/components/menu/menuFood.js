import * as React from "react"
import {useState} from 'react'
import { Food } from "../../../data"
import AddToCartModal from "../addToCartModal/addToCartModal"

const MenuFood = (props) => {
    const [show, setShow] = useState(false)
    const [menuItem, setMenuItem] = useState({})

    const handleClick = (item) => {
        setShow(true)
        setMenuItem(item)
    }


    return (
    <div>
        <AddToCartModal item={menuItem} show={show} setShow={setShow}/>
        {Food.map((item, itemIdx) => (
            <div key={item.id} className={itemIdx % 2 === 0 }>
              <div >
             <h1 className="text-4xl font-extralight pt-6">{item.type}</h1>
             <div className="flex w-60 text-left">{item.item}{item.choice}</div>
             
             <button onClick={() => handleClick(item)}>
             <h2 className="flex w-56 text-left justify-between font-extralight text-xl">
               <div>{item.name}</div><div>{item.price} </div></h2>
             <p className="flex tgGreen text-sm w-48 text-left"><i>{item.ingrediants}{item.blend}{item.choices}
             </i></p>
             </button>
              </div>
            </div>
          ))}
    </div>
    )}

export default MenuFood;