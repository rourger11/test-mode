import { useState, useEffect } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import { Button } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import star from '../../../main/assets/img/p-list/star.png'
import Footer from '../../Footer_Section/Footer'
import Service from '../../service-quality/Service'
import Header from './Header'
import { ToastContainer, toast } from 'react-toastify'
import { RotatingLines } from 'react-loader-spinner'
import 'react-toastify/dist/ReactToastify.css';
import Sidebar from "./FilterBar"
import Mostviewed from "./SortProduct"



export default function FilterPriceRange() {
    const [isLoading, setLoading] = useState(false)

    const [fbyPrice, setFbyPrice] = useState([])
    const param = useParams()
    console.log(param)



    useEffect(() => {
        productlist();
    }, [param])
    const token = '3sechtv3hibu69fu97xpq2zxmh9dvh0g'
    const url = 'http://10.8.10.65/magento/rest/V1/guest-carts/26/items'
    const profile_path = "http://10.8.10.65/magento/pub/media/catalog/product/";

    const ASC_Order = 'http://10.8.10.65/magento/rest/V1/products?searchCriteria[sortOrders][0][field]=name&searchCriteria[sortOrders][0][direction]=ASC'

    const DESC_Order = 'http://10.8.10.65/magento/rest/V1/products?searchCriteria[sortOrders][0][field]=name&searchCriteria[sortOrders][0][direction]=DESC'

    const productlist = async () => {
        setLoading(true)
        if (param.id ==="1") {
            await axios(ASC_Order, {
                method: "GET",
            }).then((response) => {
                setFbyPrice(response.data.items)
                setLoading(false)

            })

        }
        // for high to low price
        if (param.id ==="2") {
            setLoading(true)

            await axios(DESC_Order, {
                method: "GET",
            }).then((response) => {
                setFbyPrice(response.data.items)
                setLoading(false)

            })

        }



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

            <main>
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
                    {/* side bar */}
                    <Sidebar/>

                    <div className="right-sec">
                        <Mostviewed/>

                        {/* product data */}
                        {isLoading ? <div style={{ textAlign: "center" }}><RotatingLines
                            strokeColor="grey"
                            strokeWidth="5"
                            animationDuration="0.75"
                            width="96"
                            visible={true}

                        /> </div> :
                            <div className="product-list-outer" >
                                {fbyPrice.map((item) => {
                                    return (
                                        <div className="product-card" key={item.sku}>
                                            <NavLink to={`/singleproduct/${item.sku}`} style={{ textDecoration: "none" }}>
                                                <img className="d-block p-img" src={`${profile_path}${item.media_gallery_entries[0].file}`} alt="Second slide" />
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
                            </div>
                        }
                    </div>
                </div>
                <Service />
                <Footer />
            </main>

        </>
    )
}
