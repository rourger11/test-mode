import React, { useState, useEffect } from 'react'
import { useParams, NavLink, Navigate } from 'react-router-dom'
import Service from '../../../service-quality/Service';
import Footer from '../../../Footer_Section/Footer';
import Header from '../Header';
import { ToastContainer, toast } from 'react-toastify'
import { Button } from 'react-bootstrap';
import 'react-toastify/dist/ReactToastify.css';
import { RotatingLines } from 'react-loader-spinner'
import star from '../../../../main/assets/img/p-list/star.png'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export default function SingleProduct () {

    const navigate = useNavigate()
  const [isLoading, setLoading] = useState(false)

  const urlId = useParams();

  const [item,setItem] = useState([]);

  useEffect(() => {
    fetchProduct()
  },[]);

  // all product api

  const allproducturl = `http://10.8.11.171/magento/rest/V1/products/${urlId.sku}`;
  const profile_path = "http://10.8.11.171/magento/pub/media/catalog/product/";

  const fetchProduct = async () => {
    setLoading(true)
    await axios.get(allproducturl)
      .then((res) => {
        setItem(res.data);
        setLoading(false)
      })
      .catch((err) => console.log(err));              
  }







  const token = '3sechtv3hibu69fu97xpq2zxmh9dvh0g'
  const url = 'http://10.8.11.171/magento/rest/V1/guest-carts/26/items'
  const newUrl = 'http://10.8.11.171/magento/rest/V1/get-customer-cart-products-by-cart-id'


  const productlist = async ()=>{
      const payload = {
          "cart_id":"26"} 

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
          }).then((response)=>{

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

  const previous = ()=>{
    navigate(-1)
  }



 const addToWishList = () =>{
     

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

                    <div className="right-sec">

                        {/* product data */}
                        {isLoading ? <div className="loader"><RotatingLines
                            strokeColor="grey"
                            strokeWidth="5"
                            animationDuration="0.75"
                            width="96"
                            visible={true}

                        /> </div> :
                            <div className="single_product-list-outer" >
                                    
                                
                                        <div className="product-card">
                                            
                                            <img className="single_img" src={`http://10.8.11.171/magento/pub/media/catalog/product/${item.media_gallery_entries?.[0].file}`} alt="Second slide"  />

                                            <div className="pt-dic">

                                                <img className="d-block star" src={star} alt="ratings" />
                                                <h4>{item.name}</h4>
                                                <p>Price:<span>${item.price}</span></p>
                                            </div>
                                            <Button variant="success" onClick={() => cartitem(item)}>Add to Cart</Button>

                                           <div className='go_Back'> <Button  variant="danger" onClick={previous}>Go Back</Button></div>


                                        </div>

                                        <div className="desciption">
                                          <p>{item.custom_attributes?.[12].value}</p>
                                          <p1>{item.custom_attributes?.[15].value}</p1>

                                          <div className="specifcation">
                                          <p>{item.custom_attributes?.[16].value}</p>
                                          </div>
                                          <div className='wish_list'>
                                          <Button onClick={addToWishList}>Add to wish list</Button>
                                          </div>


                                        </div>
                                 
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
