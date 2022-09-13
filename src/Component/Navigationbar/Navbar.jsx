import { FaSearch, FaHeart } from "react-icons/fa";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import logo from '../../main/assets/img/logo.png'
import cart from '../../main/assets/img/cart.svg'
import { useEffect, useState } from "react";
import axios from "axios";



export default function Navigation() {



  const navigate = useNavigate();

  const [search,setSearch]=useState('');

 

const handleChange=async(e) =>{
  e.preventDefault()

  navigate(`/searchbyname/${search}`)
}



  const[item,setItem]=useState();
 

  // getData.splice(0,getData.length) 

 const len=item 

  const id1 = 3

  const token = '3sechtv3hibu69fu97xpq2zxmh9dvh0g'

  const newUrl = 'http://10.8.10.65/magento/rest/V1/get-customer-cart-products-by-cart-id'

  useEffect(()=>{
    productlist()
    
  },[])

  const productlist = async ()=>{
    const payload = {
        "cart_id":"26"} 

        await axios(newUrl, {
            method: "POST",
            data: payload,
            header: {
                "Content-Length": '104',
                'Host': "<calculated when request is sent>",
                "User-Agent": "PostmanRuntime/7.29.2",

                " Accept": "*/*",
                'Connection': "keep-alive",

                "Accept-Encoding": "gzip, deflate, br",
                "Content-Type": "application/json",
                " Authorization": `Bearer ${token}`,
            },
        }).then((response)=>{
            setItem(response.data.length)
            productlist()

        })

    }
  return (

    <>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink to={`/productlist/4`} className="nav-link">MOBILE</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/productlist/4" className="nav-link">TV & AV</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/productlist/5" className="nav-link">APPLIANCES</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/productlist/3" className="nav-link">IT</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/productlist/3" className="nav-link">SHOP</NavLink>
                </li>
              </ul>
              <div className="m-auto">
                <NavLink to="/" className="navbar-brand">  <img className="d-block" src={logo} alt="pp-img" height="40" /></NavLink>

              </div>
              <form className="form-inline my-2 my-lg-0 mr-3">
                <input className="form-control " type="search" placeholder="search your keywords here" aria-label="Search" name="message" value={search}
                onChange={(e)=>setSearch(e.target.value)}
                />
                <button className=" my-2 my-sm-0" type="submit" onClick={handleChange}> <FaSearch />
                </button>
              </form>

              <div className="right-menu d-flex">
                <div className="hrt"> <FaHeart />5</div>
                <NavLink to="/cartitems" style={{ textDecoration: "none" }}>
                  <div className="cart-count">
                    <img src={cart} alt="cart" />
                    <span className="text-mute">{len}</span></div>
                </NavLink>



                <img className="d-block menu-btn" src="./main/assets/img/menu.png" alt="Second slide" />
              </div>
            </div>

          </div>
        </nav>
        <Outlet />
      </div>
    </>
  )
}
