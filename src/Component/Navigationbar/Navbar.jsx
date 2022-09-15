import { FaSearch, FaHeart } from "react-icons/fa";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import logo from '../../main/assets/img/logo.png'
import cart from '../../main/assets/img/cart.svg'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCustomerCartData } from "../Redux/Redux-Toolkit/reduxSlice/customerCartSlice";



export default function Navigation() {

  const dispatch = useDispatch()


  const navigate = useNavigate();

  const [search, setSearch] = useState('');



  const handleChange = async (e) => {
    e.preventDefault()

    navigate(`/searchbyname/${search}`)
  }

  const { data} = useSelector((state) => state.customerCart)

  const len = data.length

  useEffect(() => {
    dispatch(getCustomerCartData())
  }, [dispatch])


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
                  onChange={(e) => setSearch(e.target.value)}
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
