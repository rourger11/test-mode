import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FaHeart } from 'react-icons/fa'
import { RotatingLines } from 'react-loader-spinner'
import { useDispatch,useSelector } from 'react-redux'
import Loading from '../Loadinganimation/Loading'
import { getUserslogo } from '../Redux/Redux-Toolkit/reduxSlice/brandSlice'



export default function Brands() {
    const dispatch = useDispatch();


    const { data, loading, error } = useSelector((state) => state.brandsLogo)
   
    
    
    useEffect(()=>{
    dispatch(getUserslogo())
    },[dispatch])
    
    
const baseUrl='https://stgm.appsndevs.com/reactmarketplace/pub/media/'
    return (
        <>
            <div className="client-logo">
                <h3 className="my-5">
                    We <FaHeart color="#dc3545" /> To Our Brands
                </h3>
               {loading?<Loading/>:
                <div className="brand-logo-outer  wow animate__animated animate__zoomIn">
                    {data?.map((brand)=>{
                        return(

                            <img key={brand.image_id}className="d-block" src={`${baseUrl}${brand.image}`} alt="Second slide" />
                            )
                    })}
                </div>
                    } {error?<h1>{error}</h1>:null}
            </div>
        </>
    )
}
