import React, { useEffect, useState, useRef } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Slider from 'react-slick'
import Loading from "../Loadinganimation/Loading";
import { getUsers } from "../Redux/Redux-Toolkit/reduxSlice/bannerSlice";

export default function Blogs() {
  const dispatch = useDispatch()
  // const [isLoading, setLoading] = useState(false)

  const sliderRef = useRef(null)

  // const [blog, setBlog] = useState([]);

  // const payload = { storeId: "1" };

  // const token = "zx647qcilhrmqg1udt56ba82d4s34ck8";
  // const url = "https://stgm.appsndevs.com/reactmarketplace/rest/V1/getHomeContent";

  // useEffect(() => {
  //   const blogData = async () => {
  //     setLoading(true)
  //     await axios(url, {
  //       method: "POST",
  //       data: payload,

  //       header: {
  //         "Content-Length": "<calculated when request is sent>",
  //         "Host": "<calculated when request is sent>",
  //         "User-Agent": "PostmanRuntime/7.29.2",
  //         " Accept": "*/*",
  //         "Connection": "keep-alive",
  //         "Accept-Encoding": "gzip, deflate, br",
  //         "Content-Type": "application/json",
  //         " Authorization": `Bearer ${token}`,
  //       },
  //     })
  //       .then((res) => {
  //         setBlog(res.data[2].blogs);
  //         setLoading(false)



  //       })
  //       .catch((error) => {
  //         console.log("this is error", error);
  //       });
  //   };
  //   blogData();
  // }, []);
  const { data, loading, error } = useSelector((state) => state.banner)

  const blog = data?.[2]?.blogs
  // const banner = data?.[0]?.slider_banner
  //   const sliderData = banner?.filter((ele)=> ele.banner_id <4)


  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch])

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnHover: false,
    autoplay: true
  };

  const responsive = [{
    breakpoint: 768,
    settings: { slidesToShow: 1 }
  },
  { breakpoint: 1024, settings: { slidesToShow: 3, swipe: true } }
  ]

  return (
    <>
      <div className="sec-blog">
        <div className="sec-blog-inner">
          <h3>LATEST BLOG</h3>

          <div className="container-fluid">
            <div
              id="carouselExample"
              className="carousel slide"
              data-ride="carousel"
              data-interval="9000"
            >

              <div className="carousel-inner row w-100 mx-auto" role="listbox">

                <div className="carousel-item   active">
                  <div className="carousel-control-outer">


                    <a
                      className="carousel-control-prev"
                      role="button"
                      onClick={() => sliderRef.current.slickPrev()}


                    >
                      <i>
                        <FaAngleLeft className="mb-1" />
                      </i>
                      <span className="sr-only">Previous</span>
                    </a>
                    <a
                      className="carousel-control-next text-faded"
                      role="button"
                      onClick={() => sliderRef.current.slickNext()}

                    >
                      <i>
                        <FaAngleRight className="mb-1" />
                      </i>
                      <span className="sr-only">Next</span>
                    </a>
                  </div>
                  {loading ? <Loading /> :

                    <Slider {...settings} className="row" ref={sliderRef} responsive={responsive}>
                      {blog?.map((ele) => {
                        return (
                          <NavLink key={ele.post_id} to=''>
                            <div className="blog-item">
                              <img
                                className="d-block"
                                src={ele.image}
                                alt="blog"
                              />
                              <div className="blog-dec">
                                <label>
                                  {ele.short_description}
                                </label>
                                <h4>
                                  {ele.post_content}
                                </h4>
                              </div>
                            </div>
                          </NavLink>
                        )

                      })}
                    </Slider>
                  }


                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
