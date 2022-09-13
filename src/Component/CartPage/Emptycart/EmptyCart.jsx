import React from 'react'
import { NavLink } from 'react-router-dom'
import './Emptycart.style.css'
import emptycart from '../../../main/assets/img/emptycart.webp'

export default function EmptyCart() {
  return (
      <>
    <div className='emptycart'> 
    <img src={emptycart}alt="cart is empty" />
    <h3 style={{textAlign:"center"}}>OOOPPS ! Cart is Empty</h3>
    <NavLink to= '/' className="link"style={{marginLeft:"30rem",textDecoration:"none",fontSize: '20px'}} >See Collection</NavLink>
</div>
</>
  )

}
