import { useState, useEffect} from "react";
import {useSelector,useDispatch} from "react-redux"
import Carousel from "react-bootstrap/Carousel";
import { getUsers } from "../Redux/Redux-Toolkit/reduxSlice/bannerSlice";
import Loading from "../Loadinganimation/Loading";

export default function Banner() {
  const dispatch =useDispatch()

  // fetched data from redux 
   const { data, loading, error } = useSelector((state) => state.banner)

const banner = data?.[0]?.slider_banner
  const sliderData = banner?.filter((ele)=> ele.banner_id <4)


useEffect(()=>{
dispatch(getUsers())
},[dispatch])



  return (
    <>
      <div className="main-banner">
        <div className="banner-container">
          <div
            id="carouselExampleSlidesOnly"
            className="carousel slide"
            data-ride="carousel"
          >
          

            <div className="carousel-inner">
              <div className="carousel-item active"style={{backgroundColor:"transparent"}}>
                
              {loading?<Loading/>:null}
                  <Carousel
                    fade
                    interval={3000}
                    style={{ objectfit: "cover", width: "100vw", height: "70vh" }}
                    pause={false}
                    indicators={false}
                    controls={false}

                  >
                       {sliderData?.map((slide)=>{
                          return(

                        <Carousel.Item key={slide.banner_id} >
                          <img
                            className="d-block"
                            src={slide.image}
                            name={slide.name}
                            style={{ objectfit: "cover", width: "100vw", height: "70vh" }}
                            id="1"
                            alt="slide1"
                            value="item"
                          />
                        </Carousel.Item>
                        )
                      })}
                  </Carousel>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

