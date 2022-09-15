import React, { useEffect, useState } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import Loading from '../Loadinganimation/Loading';
import { getUsers } from "../Redux/Redux-Toolkit/reduxSlice/bannerSlice";
export default function Categories() {
  const dispatch = useDispatch()
  
  const { data, loading, error } = useSelector((state) => state.banner)


  const CategoriesData = (data?.[1]?.categories)?.filter((item) => {
            return (
            item?.entity_id > 2 &&item?.entity_id < 7 
           )
            })
  
  useEffect(()=>{
  dispatch(getUsers())
  },[dispatch])


  return (
    <>
      <div className="container-fluid">
        <div className="add-slider my-4 pb-5 ">
          <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel" >
            <div className="carousel-inner">
              <div className="carousel-item active">
              {loading?<Loading/>:
              
                <div className="row add-slider-row">
                  {CategoriesData?.map((product) => {
                    return (
                      <div key={product.entity_id} className="col-md-4 animate__animated animate__fadeInUp" >

                        <NavLink to={`/productlist/${product.entity_id}`} >
                          <div className="slider-bg-card">
                            <img className="d-block" src={product.image} alt="product slide" />
                          </div>
                          <h3>{product.name}</h3>
                          {/* <label>electronics </label> */}
                        </NavLink>
                      </div>
                    )
                  })}


                </div>
                 } {error ? <h1>{error}</h1>:null}
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
