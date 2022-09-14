import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { NavLink, useNavigate } from 'react-router-dom';
import { RotatingLines } from 'react-loader-spinner';


export default function Categories() {
  const [isLoading, setLoading] = useState(false);


  
  const [categories, setCategories] = useState([]);
  const payload = {
    storeId: "1",

    categories: "categories"
  };

  const token = "zx647qcilhrmqg1udt56ba82d4s34ck8"
  // const url = "http://10.8.11.171/magento/rest/V1/getHomeContent";

  const url = "https://stgm.appsndevs.com/reactmarketplace/rest/V1/getHomeContent"


  useEffect(() => {
    category();
  }, []);

  const category = async () => {

    
    setLoading(true)
    await axios(url, {
      method: "POST",
      data: payload,

      header: {
        "Content-Length": "<calculated when request is sent>",
        "Host": "<calculated when request is sent>",
        "User-Agent": "PostmanRuntime/7.29.2",

        " Accept": "*/*",
        "Connection": "keep-alive",
        "Accept-Encoding": "gzip, deflate, br",
        "Content-Type": "application/json",
        " Authorization": `Bearer ${token}`,
      },


    })
      .then((res) => {

        const newdata = (res.data[1].categories).filter((item) => {
          return (
            item.entity_id > 2 &&item.entity_id < 7 
          )

        });
        setLoading(false)

        setCategories(newdata)
      })
      .catch((error) => {
        console.log("this is error", error);
      });
  };





  return (
    <>
      <div className="container-fluid">
        <div className="add-slider my-4 pb-5 ">
          <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel" >
            <div className="carousel-inner">
              <div className="carousel-item active">
              
              {isLoading ? <div style={{textAlign:"center"}}><RotatingLines
                  strokeColor="grey"
                  strokeWidth="5"
                  animationDuration="0.75"
                  width="96"
                  visible={true}
                  
                /> </div>:
                <div className="row add-slider-row">
                  {categories.map((product) => {
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



                </div>}
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
