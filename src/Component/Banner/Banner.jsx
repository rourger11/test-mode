import { useState, useEffect } from "react";

import axios from "axios";
import {RotatingLines} from 'react-loader-spinner'

import Carousel from "react-bootstrap/Carousel";

export default function Banner(e) {

  const [isLoading, setLoading] = useState(false);

  const [sliderData, setSliderData] = useState([]);


  const payload = { storeId: "1" };
  const token = "zx647qcilhrmqg1udt56ba82d4s34ck8";
  const url = "https://stgm.appsndevs.com/reactmarketplace/rest/V1/getHomeContent";

  useEffect(() => {
    const bannerData = async () => {
      setLoading(true)
      await axios(url, {
        method: "POST",
        data: payload,

        header: {
          "Content-Length": "<calculated when request is sent>",
          Host: "<calculated when request is sent>",
          "User-Agent": "PostmanRuntime/7.29.2",

          " Accept": "*/*",
          Connection: "keep-alive",
          "Accept-Encoding": "gzip, deflate, br",
          "Content-Type": "application/json",
          " Authorization": `Bearer ${token}`,
        },
      })
        .then((res) => {

          const newData = (res.data[0].slider_banner).filter((item) => {
            return (
              item.banner_id<4
            )
          });
          setSliderData(newData)
           setLoading(false)

        })
        .catch((error) => {
          console.log("this is error", error);
        });
    };
    bannerData();
  }, []);



  return (
    <>
      <div className="main-banner">
        <div className="banner-container">
          <div
            id="carouselExampleSlidesOnly"
            className="carousel slide"
            data-ride="carousel"
          >
            {/* <ol className="carousel-indicators carousel-indicators-numbers">
              <li
                data-target="#carousel-example-generic"
                data-slide-to="0"
                id="1"
                className="active"
              >
                01
              </li>
              <li
                data-target="#carousel-example-generic"
                data-slide-to="1"
                id="2"
              >
                02
              </li>
              <li
                data-target="#carousel-example-generic"
                data-slide-to="2"
                id="3"
              >
                03
              </li>
            </ol> */}

            <div className="carousel-inner">
              <div className="carousel-item active"style={{backgroundColor:"transparent"}}>
                {isLoading ? <div style={{textAlign:"center"}}><RotatingLines
                  strokeColor="grey"
                  strokeWidth="5"
                  animationDuration="0.75"
                  width="96"
                  visible={true}
                  
                /> </div>:

                  <Carousel
                    fade
                    interval={3000}
                    style={{ objectfit: "cover", width: "100vw", height: "70vh" }}
                    pause={false}
                    indicators={false}
                    controls={false}

                  >
                    {sliderData.map((slide, index) => {
                      return (
                        <Carousel.Item  >
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
                      );
                    })}
                  </Carousel>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

