import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import image from '../../main/assets/img/donwait.png'
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../Redux/Redux-Toolkit/reduxSlice/bannerSlice';
import Loading from '../Loadinganimation/Loading';


export default function Collection() {
  const dispatch = useDispatch();

  

  const { data, loading, error } = useSelector((state) => state.banner)

  const collection = (data?.[1]?.categories)?.filter((item) => {
    return (
      item.entity_id == 8
    )
  })
  const collection2 = (data?.[1]?.categories)?.filter((item) => {
    return (
      item.entity_id == 9
    )
  })
  const collection3 = (data?.[1]?.categories)?.filter((item) => {
    return (
      item.entity_id == 10
    )
  })
  const collection4 = (data?.[1]?.categories)?.filter((item) => {
    return (
      item.entity_id == 11
    )
  })



  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch])


  return (
    <>
      <div className="tab-sec " data-wow-duration="2s" data-wow-delay="5s">

        <div className="tab-inner">
          <img className="d-block m-auto" src={image} alt="Second slide" />
          <h3>Shopping Everyday</h3>
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item">
              <NavLink to="/productlist/3" className="nav-link active" id="one" data-toggle="tab" role="tab" aria-controls="home" aria-selected="true">All</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/productlist/5" className="nav-link" id="two" data-toggle="tab" role="tab" aria-controls="profile" aria-selected="false">Watches</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/productlist/4" className="nav-link" id="three" data-toggle="tab" role="tab" aria-controls="contact" aria-selected="false">Camera</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/productlist/3" className="nav-link" id="four" data-toggle="tab" role="tab" aria-controls="contact" aria-selected="false">Bags</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/productlist/5" className="nav-link" id="five" data-toggle="tab" role="tab" aria-controls="contact" aria-selected="false">Lighting</NavLink>
            </li>
          </ul>
          <div className="tab-content" id="myTabContent">
            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="one">

              {loading?<Loading/>:
              <div className="d-flex ec-home-shopping-products">

                {collection?.map((item) => {
                  return (
                    <>
                      <div key={item.sku} className="c-img-1 pr-3 wow  animate__animated animate__fadeInLeft">
                        <NavLink to="/productlist/5">
                          <img className="d-block " src={item.image} alt="Second slide" />
                        </NavLink >
                      </div>
                    </>
                  )
                })}


                <div className="c-img-2 wow animate__animated animate__fadeInUp">
                  {collection2?.map((item2) => {
                    return (
                      <>

                        <NavLink to='/productlist/4'>
                          <img className="d-block " src={item2.image} alt="Second slide" />
                        </NavLink>
                      </>
                    )
                  })}

                  {collection3?.map((item3) => {
                    return (
                      <>
                        <NavLink to="/productlist/4">
                          <img className="d-block mt-3 " src={item3.image} alt="Second slide" />
                        </NavLink>
                      </>
                    )
                  })}
                </div>
                {collection4?.map((item4) => {
                  return (
                    <>
                      <NavLink to="/productlist/4">
                        <div className="c-img-3 pl-3 wow animate__animated animate__fadeInLeft">
                          <img className="d-block" src={item4.image} alt="Second slide" />
                        </div>
                      </NavLink>

                    </>
                  )
                })}
              </div>
              } {error?<h1>{error}</h1>:null}
            </div>
            <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="two">...</div>
            <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="three">...</div>
            <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="four">...</div>
            <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="five">...</div>
          </div>
        </div>

      </div>
    </>
  )
}
