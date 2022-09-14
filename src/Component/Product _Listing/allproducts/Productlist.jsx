import { useState, useEffect } from 'react'
import Blogs from '../../Blog_Section/BlogSlider'
import Footer from '../../Footer_Section/Footer'
import Service from '../../service-quality/Service'
import Header from './Header'
import Mostviewed from './SortProduct'
import Sidebar from './FilterBar'
import axios from 'axios'
import { NavLink, useParams } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { RotatingLines } from 'react-loader-spinner'
import { useDispatch, useSelector } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import star from '../../../main/assets/img/p-list/star.png'


export default function Productlist() {





    const getData = useSelector((state) => state.cartreducer.carts)

    const [isLoading, setLoading] = useState(false)

    const id = useParams();

    const [data, setData] = useState([]);
    const [showFilter, setShowFilter] = useState(false);
    const[showSort,setShowSort] = useState(false);

    //  fetching products data from api
    useEffect(() => {
        fetchProduct();
    }, [id]);

    // all product api
    const allproducturl = `http://10.8.11.171/magento/rest/V1/products?searchCriteria[filterGroups][0][filters][0][field]=category_id& searchCriteria[filterGroups][0][filters][0][value]=3& searchCriteria[filterGroups][0][filters][0][conditionType]=eq&searchCriteria[filterGroups][0][filters][1][field]=visibility& searchCriteria[filterGroups][0][filters][1][value]=4& searchCriteria[filterGroups][0][filters][0][conditionType]=eq&searchCriteria[sortOrders][0][field]=created_at& searchCriteria[sortOrders][0][direction]=DESC& searchCriteria[pageSize]=10& searchCriteria[currentPage]=1`;

    // tablets api
    const tableturl = `http://10.8.11.171/magento/rest/V1/products?searchCriteria[filterGroups][0][filters][0][field]=category_id& searchCriteria[filterGroups][0][filters][0][value]=4& searchCriteria[filterGroups][0][filters][0][conditionType]=eq&searchCriteria[filterGroups][0][filters][1][field]=visibility& searchCriteria[filterGroups][0][filters][1][value]=4& searchCriteria[filterGroups][0][filters][0][conditionType]=eq&searchCriteria[sortOrders][0][field]=created_at& searchCriteria[sortOrders][0][direction]=DESC& searchCriteria[pageSize]=10& searchCriteria[currentPage]=1`

    // watches api
    const watchurl = `http://10.8.11.171/magento/rest/V1/products?searchCriteria[filterGroups][0][filters][0][field]=category_id& searchCriteria[filterGroups][0][filters][0][value]=5& searchCriteria[filterGroups][0][filters][0][conditionType]=eq&searchCriteria[filterGroups][0][filters][1][field]=visibility& searchCriteria[filterGroups][0][filters][1][value]=4& searchCriteria[filterGroups][0][filters][0][conditionType]=eq&searchCriteria[sortOrders][0][field]=created_at& searchCriteria[sortOrders][0][direction]=DESC& searchCriteria[pageSize]=10& searchCriteria[currentPage]=1`

    const newToken = 'o1iehcwcs8vqdswui9f9hdomebbfxs5y'

    const fetchProduct = async () => {
        if (id.entity_id === '3') {
            setLoading(true)
            await axios.get(allproducturl,{
                headers: {
                    'Authorization': `Bearer${newToken}`
                  },
            })
                .then((res) => {
                    setData(res.data.items);
                    setShowFilter(true)
                    setShowSort(true)
                    setLoading(false)
                })
                .catch((err) => console.log(err));
        };

        if (id.entity_id === '4') {
            setLoading(true)

            await axios.get(tableturl)
                .then((res) => {
                    setData(res.data.items);
                    setLoading(false)
                })
                .catch((err) => console.log(err));
        };
        if (id.entity_id === '5') {
            setLoading(true)

            await axios.get(watchurl)
                .then((res) => {
                    setData(res.data.items);
                    setLoading(false)
                })
                .catch((err) => console.log(err));
        };

    }

    // const send = (e) => {

    // }
    const profile_path = "http://10.8.11.171/magento/pub/media/catalog/product/";

    const dispatch = useDispatch();



    const token = '3sechtv3hibu69fu97xpq2zxmh9dvh0g'
    const url = 'http://10.8.11.171/magento/rest/V1/guest-carts/26/items'
    const newUrl = 'http://10.8.11.171/magento/rest/V1/get-customer-cart-products-by-cart-id'


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
                    {showFilter? <Sidebar />:null}

                    <div className="right-sec">
                       {showSort?<Mostviewed />:null}

                        {/* product data */}
                        {isLoading ? <div style={{ textAlign: "center" }}><RotatingLines
                            strokeColor="grey"
                            strokeWidth="5"
                            animationDuration="0.75"
                            width="96"
                            visible={true}

                        /> </div> :
                            <div className="product-list-outer" >
                                {data.map((item) => {
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
                <Blogs />
                <Footer />
            </main>
        </>
    )
}
