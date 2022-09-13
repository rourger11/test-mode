import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import fcard from '../../main/assets/img/f-card.png'
import logo from '../../main/assets/img/logo.png'

export default function Footer() {
  return (
    <>
      <footer className="container-fluid py-5">
        <div className="footer-inner">
          <div className="row">
            <div className="col-12 col-md">
              <img
                className="d-block"
                src={logo}
                alt="pp-img"
              />
              <small className="d-block mb-3 text-muted">
                &copy;© Copyright e-commerce
              </small>
            </div>
            <div className="col-12 col-md">
              <h5>Customer Service</h5>
              <ul className="pl-3 text-small">
                <li>
                  <NavLink to="/" className="text-muted" >
                    Help & Contact Us
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/" className="text-muted" >
                    Returns & Refunds
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/" className="text-muted" >
                    Team feature
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/" className="text-muted" >
                    Online Stores
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/" className="text-muted" >
                    Terms & Conditions
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="col-12 col-md">
              <h5>Company</h5>
              <ul className="pl-3 text-small">
                <li>
                  <NavLink to="/" className="text-muted" >
                    What We Do
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/" className="text-muted" >
                    Available Services
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/" className="text-muted" >
                    Latest Posts
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/" className="text-muted" >
                    FAQs
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="col-12 col-md">
              <h5>Profile</h5>
              <ul className="pl-3 text-small">
                <li>
                  <NavLink to="/" className="text-muted" >
                    My Account
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/" className="text-muted" >
                    Checkout
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/" className="text-muted" >
                    Order Tracking
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/" className="text-muted" >
                    Help & Support
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="col-12 col-md-3">
              <form className=" my-2 my-lg-0 d-flex mail-sec">
                <input
                  className="form-control "
                  type="search"
                  placeholder="your email address"
                  aria-label="Search"
                />
                <button className=" my-2 my-sm-0 btn btn-primary" type="submit">
                  sucbribe
                </button>
              </form>
              <div className="s-icon">
                {/* social icons  */}
                <i><FaFacebook /></i>
                <i><FaTwitter /></i>
                <i><FaLinkedin /></i>
                <i><FaInstagram /></i>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="f-bottom">
        <img
          className="d-block"
          src={fcard}
          alt="Second slide"
        />
      </div>
      <div className="s-icon s-icon-list">
        <i><FaFacebook /></i>
        <i><FaTwitter /></i>
        <i><FaLinkedin /></i>
        <i><FaInstagram /></i>
      </div>
    </>
  )
}
