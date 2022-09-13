import React from 'react'
import Blogs from '../Blog_Section/Blogs'
import Footer from '../Footer_Section/Footer'
import { Button, Table } from 'react-bootstrap'
import Header from '../Product _Listing/allproducts/Header'
import EmptyCart from './Emptycart/EmptyCart'
import { useSelector } from 'react-redux'
import { decreaseItem, removeFromCart } from '../Redux/ActionPage/Actions'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import '../CartPage/Cartitem.css'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { addToCart } from '../Redux/ActionPage/Actions'
import { RotatingLines } from 'react-loader-spinner'


export default function CartItems() {
  const [isLoading, setLoading] = useState(false)


  const [item, setItem] = useState([])

  const dispatch = useDispatch();

  // const getData = useSelector((state) => state.cartreducer.carts)


  useEffect(()=>{
cartitem()
  },[])
// cartitems
const url = 'http://10.8.10.65/magento/rest/V1/get-customer-cart-products-by-cart-id'

const cartitem = async (e) => {
  setLoading(true)

    // add to cart items api 
    const payload = {
      "cart_id":"26"
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
        },
    })
        .then((response) => {
            setItem(response.data)
            setLoading(false)
        })

        .catch((error) => {
            console.log(error)

        })
}



  
  // delete products

  const del = async (item_id) => {
    
    const url = `http://10.8.10.65/magento/rest/V1/guest-carts/eUGl1nsnbDb3Dlm9s9ufHcYJM0zCI9Sz/items/${item_id}`

    await axios.delete(url)
      .then((response) => {
        dispatch(removeFromCart(item_id));

        cartitem();      
        toast.error("item removed", { autoClose: 1000 });
      })
      .catch((error) => {
        console.log("error", error)

      })
  };




  
  // for update

 
  const increase = async(products)=>{
    const myPayload={
      "cartItem": {
      "item_id":products.item_id, 
      "qty":Math.trunc(products.qty)+1,
      "quote_id": "eUGl1nsnbDb3Dlm9s9ufHcYJM0zCI9Sz"
      }
      
  }
    const updateUrl=`http://10.8.10.65/magento/rest/V1/guest-carts/26/items/${products.item_id}`

    await axios(updateUrl, {
      method:"put",
      data: myPayload,
      header: {
          "Content-Length": '104',
          'Host': "<calculated when request is sent>",
          "User-Agent": "PostmanRuntime/7.29.2",

          " Accept": "*/*",
          'Connection': "keep-alive",

          "Accept-Encoding": "gzip, deflate, br",
          "Content-Type": "application/json"
      },
  }).then((response)=>{
    cartitem();      
  })
  
  
    
  }
  // for update items

  const delOne = async (products) => {
    

    const myPayload={
      "cartItem": {
      "item_id":products.item_id, 
      "qty":Math.trunc(products.qty)-1,
      "quote_id": "eUGl1nsnbDb3Dlm9s9ufHcYJM0zCI9Sz"
      }
      
  }
    const updateUrl=`http://10.8.10.65/magento/rest/V1/guest-carts/26/items/${products.item_id}`

    await axios(updateUrl, {
      method:"put",
      data: myPayload,
      header: {
          "Content-Length": '104',
          'Host': "<calculated when request is sent>",
          "User-Agent": "PostmanRuntime/7.29.2",

          " Accept": "*/*",
          'Connection': "keep-alive",

          "Accept-Encoding": "gzip, deflate, br",
          "Content-Type": "application/json"
      },
  }).then((response)=>{
    cartitem();      

  })
      
  };





  return (
    <>

      <Header />
      {/* toaster */}
      <ToastContainer
        position="top-center"
        autoClose={100}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={true}
        rtl={false}
      />
      
      <Container>
         {isLoading ? <div style={{ textAlign: "center" }}><RotatingLines
                            strokeColor="grey"
                            strokeWidth="5"
                            animationDuration="0.75"
                            width="96"
                            visible={true}

                        /> </div> :
        <div className="Container mt-2" >
       

        
          <h2 className="text-center">Shopping Cart</h2>

          
          {item.length == 0 ? <EmptyCart /> :

            item.map((products) => {
              return (
                <div className="cartitems mb-3"  key={products.item_id}>
                

                  <div className="product_Image">
                    <img src={products.product_image}alt="productImage" style={{width:'20vW'}}/>
                  </div>

                  <div className="product_Details">
                    <Table className="mt-5 mx-5">
                      <tr>
                        <td style={{ borderTop: "none" }}>
                          <p> <strong>Name:</strong> {products.name}</p>
                          <p><strong>Price:</strong>$ {Math.trunc(products.price)}</p>
                        </td>
                      </tr>
                    </Table>
                  </div>
                  <div className="product_Details">
                    <Table className="mt-5 mx-5">
                      <tr>
                        <td style={{ borderTop: "none" }}>
                          <p> <strong>Quantity</strong></p>
                          <div
                            style={{
                              width: 100,
                              cursor: "pointer",
                              background: "#ddd",
                              color: "#111",
                              textAlign: "center"
                            }}
                            id="counter"

                          >
                            <span
                            className='decrease_Item'
                              onClick={products.qty <= 1 ? () => del(products.item_id) : () => delOne(products)}
                            >
                              -
                            </span>
                            <span className='quantity'>{Math.trunc(products.qty)}</span>
                            <span  className='decrease_Item'

                              onClick={()=>increase(products)}
                            >
                              +
                            </span>
                          </div>

                        </td>
                      </tr>
                    </Table>
                  </div>
                  <div className="product_Details">
                    <p className='mt-5'>
                      <strong>
                        Total:
                      </strong>
                      ${products.price * products.qty}
                    </p>

                  </div>
                  <Button
                    style={{ backgroundColor: "brown" }}
                    className="removeItem mt-4"
                    onClick={() => del(products.item_id)}
                  >
                    Remove
                  </Button>

                </div>
              )

            })}
            </div>
          }
      </Container>
      <Blogs />
      <Footer />
    </>
  )
}
