import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom';
import { RotatingLines } from 'react-loader-spinner';
import  image from '../../main/assets/img/donwait.png'
import blogData from '../Blog_Section/Blogapi';

export default function Collection() {
  const [isLoading, setLoading] = useState(false);

  const [collection, setCollection] = useState([]);
  const [collection2, setCollection2] = useState([]);
  const [collection3, setCollection3] = useState([]);
  const [collection4, setCollection4] = useState([]);

  const payload = {
    storeId: "1",

    categories: "categories"
  };

  const token = "zx647qcilhrmqg1udt56ba82d4s34ck8"
  const url = "https://stgm.appsndevs.com/reactmarketplace/rest/V1/getHomeContent";


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

        const newData = (res.data[1].categories).filter((item) => {
          return (
            item.entity_id == 8
          )

        });
        setCollection(newData)
        setLoading(false)



        const newData2 = (res.data[1].categories).filter((item) => {
          return (
            item.entity_id == 9
          )

        });
        setCollection2(newData2)


        const newData3 = (res.data[1].categories).filter((item) => {
          return (
            item.entity_id == 10
          )

        });
        setCollection3(newData3)



        const newData4 = (res.data[1].categories).filter((item) => {
          return (
            item.entity_id == 11
          )

        });
        setCollection4(newData4)


      })
      .catch((error) => {
        console.log("this is error", error);
      });
  };
  const res = async()=>{
    await axios.post(blogData()).then((response)=>{
      console.log(response,"this is ")
    })
  }
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

           {isLoading ? <div style={{textAlign:"center"}}><RotatingLines
                  strokeColor="grey"
                  strokeWidth="5"
                  animationDuration="0.75"
                  width="96"
                  visible={true}
                  
                /> </div>:
              <div className="d-flex ec-home-shopping-products">
              
                {collection.map((item) => {
                  return (
                    <>
                      <div key={item.sku}className="c-img-1 pr-3 wow  animate__animated animate__fadeInLeft">
                        <NavLink to="/productlist/5">
                          <img className="d-block " src={item.image} alt="Second slide" />
                        </NavLink >
                      </div>
                    </>
                  )
                })}


                <div className="c-img-2 wow animate__animated animate__fadeInUp">
                  {collection2.map((item2) => {
                    return (
                      <>

                        <NavLink to='/productlist/4'>
                          <img className="d-block " src={item2.image} alt="Second slide" />
                        </NavLink>
                      </>
                    )
                  })}

                  {collection3.map((item3) => {
                    return (
                      <>
                        <NavLink to="/productlist/4">
                          <img className="d-block mt-3 " src={item3.image} alt="Second slide" />
                        </NavLink>
                      </>
                    )
                  })}
                </div>
                {collection4.map((item4) => {
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
              }
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
