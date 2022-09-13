import React from 'react'
import vector from '../../main/assets/img/icon/Vector.png'
import vector1 from '../../main/assets/img/icon/Vector-1.png'
import sale from '../../main/assets/img/icon/sale.png'
import vector3 from '../../main/assets/img/icon/Vector-3.png'




export default function Service() {
  return (
<>
<div className="services-quilty">
          <div className="ser-1 wow animate__animated animate__slideInLeft">
            <div className="icon-1">
              <img
                className="d-block"
                src={vector}
                alt="Second slide"
              />
            </div>
            <div className="icon-text">
              <p>Free Shipping</p>
              <label>Free Shipping World Wide</label>
            </div>
          </div>
          <div className="ser-1 wow animate__animated animate__slideInLeft">
            <div className="icon-1">
              <img
                className="d-block"
                src={vector1}
                alt="Second slide"
              />
            </div>
            <div className="icon-text">
              <p>24X7 Service</p>
              <label>Online Service For New Customer</label>
            </div>
          </div>
          <div className="ser-1 wow animate__animated animate__slideInRight">
            <div className="icon-1">
              <img
                className="d-block"
                src={sale}
                alt="Second slide"
              />
            </div>
            <div className="icon-text">
              <p>Festival Offer</p>
              <label>Lorem Ipsum is simply dummy text </label>
            </div>
          </div>
          <div className="ser-1 wow animate__animated animate__slideInRight">
            <div className="icon-1">
              <img
                className="d-block"
                src={vector3}
                alt="Second slide"
              />
            </div>
            <div className="icon-text">
              <p>Superior Quality</p>
              <label>Lorem Ipsum is simply dummy text </label>
            </div>
          </div>
        </div>
</>
  )
}
