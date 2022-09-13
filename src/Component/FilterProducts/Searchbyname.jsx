import React, { useState, useEffect } from 'react'
import { RotatingLines } from 'react-loader-spinner'
import axios from 'axios'
import Header from '../Product _Listing/allproducts/Header'
import Blogs from '../Blog_Section/Blogs'
import Footer from '../Footer_Section/Footer'
import Service from '../service-quality/Service'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { NavLink, useParams } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import star from '../../main/assets/img/p-list/star.png'

export default function Searchbyname() {
    const [show, setShow] = useState(false)

    const params = useParams()


    const [data, setData] = useState([])

    useEffect(() => {
        searchData();
    }, [params]);

    const [isLoading, setLoading] = useState(false)
    const profile_path = "http://10.8.10.65/magento/pub/media/catalog/product/";


    // filter api
    const searchUrl = `http://10.8.10.65/magento/rest/V1/products?searchCriteria[filter_groups][0][filters][0][field]=name&searchCriteria[filter_groups][0][filters][0][value]=%25${params.name}%25&searchCriteria[filter_groups][0][filters][0][condition_type]=like&searchCriteria[filter_groups][0][filters][1][field]=name&searchCriteria[filter_groups][0][filters][1][condition_type]=like`

    const searchData = async () => {
        setLoading(true)

        await axios(searchUrl, {
            method: "GET",

        }).then((response) => {

            setData(response.data.items)
            if (response.data.items.length == 0) {
                setShow(true)
            } else {
                setShow(false)

            }
            setLoading(false)


        })
            .catch((error) => {
                console.log(error)
            })
    }




    //  add to cart data api
    const token = '3sechtv3hibu69fu97xpq2zxmh9dvh0g'
    const url = 'http://10.8.10.65/magento/rest/V1/guest-carts/26/items'
    const newUrl = 'http://10.8.10.65/magento/rest/V1/get-customer-cart-products-by-cart-id'


    const productlist = async () => {
        const payload = {
            "cart_id": "26"
        }

        await axios(newUrl, {
            method: "POST",
            data: payload,
            header: {
                "Content-Length": '104',
                'Host': "<calculated when request is sent>",
                "User-Agent": "PostmanRuntime/7.29.2",

                " Accept": "*/*",
                'Connection': "keep-alive",

                "Accept-Encoding": "gzip, deflate, br",
                "Content-Type": "application/json",
                " Authorization": `Bearer ${token}`,
            },
        }).then((response) => {

        })
            .catch((error) => {
                console.log(error)
            })
    }


    const cartitem = async (e) => {

        // add to cart items api 

        const payload = {
            "cartItem": {
                "sku": e.sku,
                "qty": 1,
                "name": e.name,
                "quoteId": "eUGl1nsnbDb3Dlm9s9ufHcYJM0zCI9Sz"
            },
        }

        await axios(url, {
            method: "POST",
            data: payload,
            header: {
                "Content-Length": '104',
                'Host': "<calculated when request is sent>",
                "User-Agent": "PostmanRuntime/7.29.2",

                " Accept": "*/*",
                'Connection': "keep-alive",

                "Accept-Encoding": "gzip, deflate, br",
                "Content-Type": "application/json",
                " Authorization": `Bearer ${token}`,
            },
        })
            .then((response) => {

                productlist()
                toast.success("item added successfully", { autoClose: 1000 });


            })
            .catch((error) => {
                console.log("error", error)
            })
    }


    return (
        <>
            {/*Header*/}
            <Header />
            <ToastContainer
                position="top-center"
                autoClose={100}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={true}
                rtl={false}
            />

            <div className="product-listing">

                <div className="right-sec">

                    {/* product data */}
                    {isLoading ? <div style={{ textAlign: "center" }}><RotatingLines
                        strokeColor="grey"
                        strokeWidth="5"
                        animationDuration="0.75"
                        width="96"
                        visible={true}

                    /> </div> :
                        !show ? <div className="product-list-outer" >

                            {data.map((item) => {
                                return (

                                    <div className="product-card" key={item.sku}>
                                        <NavLink to={`/singleproduct/${item.sku}`} style={{ textDecoration: "none" }}>
                                            <img className="d-block p-img" src={`${profile_path}${item.media_gallery_entries?.[0].file}`} alt="Second slide" />
                                            <div className="pt-dic">

                                                <img className="d-block star" src={star} alt="ratings" />
                                                <h4>{item.name}</h4>
                                                <p>Price:<span>${item.price}</span></p>
                                            </div>
                                        </NavLink>
                                        <Button variant="success" onClick={() => cartitem(item)}>Add to Cart</Button>
                                    </div>

                                )
                            })}

                        </div> : <h1 className="search_Not_matched">OOPS Product Not Found</h1>
                    }
                </div>
            </div>
            <Service />
            <Blogs />
            <Footer />
        </>
    )
}

