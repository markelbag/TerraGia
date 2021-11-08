import * as React from "react"
import {useState} from 'react'
import { Food } from "../../../data"
import AddToCartModal from "../addToCartModal/addToCartModal"

const MenuFood = (props) => {
    const [show, setShow] = useState(false)
    // const clickHander = () => {
    //   console.log('Clicked')}

    return (
    <div>
        {Food.map((item, itemIdx) => (
            <div key={item.id} className={itemIdx % 2 === 0 }>
              <div >
             <h1 className="text-4xl font-extralight pt-6">{item.type}</h1>
             <div className="flex w-60 text-left">{item.item}{item.choice}</div>
             
             <button onClick={() => setShow(true)}>
             <h2 className="flex w-56 text-left justify-between font-extralight text-xl">
               <div>{item.name}</div><div>{item.price} </div></h2>
             <p className="flex tgGreen text-sm w-48 text-left"><i>{item.ingrediants}{item.blend}
             <div>{item.choices}</div></i></p>
             </button>
             <AddToCartModal show={show} setShow={setShow}/>
              </div>
            </div>
          ))}
    </div>
    )}

export default MenuFood;