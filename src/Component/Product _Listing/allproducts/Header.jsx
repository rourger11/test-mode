import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { RotatingLines } from 'react-loader-spinner';

export default function Header() {
    const [isLoading, setLoading] = useState(false);

    const [banner, setBanner] = useState([]);


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
                    // console.log("this is resoponse", res.data[0].slider_banner)

                    const newData = (res.data[0].slider_banner).filter((item) => {
                        return (
                            item.banner_id > 4
                        )
                    });
                    setBanner(newData)
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
            <div className="product-banner">
            {isLoading ? <div style={{textAlign:"center"}}><RotatingLines
                  strokeColor="grey"
                  strokeWidth="5"
                  animationDuration="0.75"
                  width="96"
                  visible={true}/>
                   </div>:
                <div className="banner">
                    
                    
                    {banner.map((data) => {
                        return (
                            <>
                            <div key={data.banner_id} className="banner_images">
                                <img src={data.image} alt="banner" className="img-fluid"  />
                            </div>
                            </>
                        )

                    })}
            
                    <div className="banner_cont">
                        <h1>HOME <span className="bg-yellow ">APPLIANCES</span></h1>
                        <p className="text-center">Lorem Ipsum is simply dummy text of the printing</p>
                        <div className="learn text-center">
                            {/* <button type="button" className="btn btn-dark px-3 mx-3 rounded-0">Learn
                                More</button> */}
                        </div>
                    </div>
                </div>
}
            </div>

            <div className="breadcrem-list my-3">
                <ul>
                    <li className="mr-2" >Home </li>/
                    <li className="mx-2">APPLIANCES  </li>/
                    <li className="mx-2"> Home Appliances </li>
                </ul>
            </div>
        </>
    )
}
