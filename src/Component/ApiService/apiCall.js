import axios from "axios";


const client = axios.create({
    baseURL: "https://stgm.appsndevs.com" 
  });
// for home page api


const payload = {
    storeId: "1",
    categories: "categories"
};


let response;

const BannerData = async () => {

    await client('/reactmarketplace/rest/V1/getHomeContent', {
            method: "POST",
            data: payload
        })
        .then((res) => {
            response = res
        })
        .catch((error) => {
            return error
        });
    console.log(response, "check")
    return response.data
};

// api for brands logo


const BrandsLogo = async () => {

    await client(`/reactmarketplace/rest/V1/image`,{method:"GET"})
        .then((res) => {
            response = res
        })
        .catch((error) => {
            return error
        });
    return response.data
};


// all added items in cart

const cartPayload = {
    "cart_id":"26"
} 
    const newUrl = 'http://10.8.11.171/magento/rest/V1/get-customer-cart-products-by-cart-id'
    const token = '3sechtv3hibu69fu97xpq2zxmh9dvh0g'

    const CustomerCart = async ()=>{
        await axios(newUrl, {
            method: "POST",
            data: cartPayload,
            header: {
                " Authorization": `Bearer ${token}`,
            },
        }).then((res)=>{
            response = res
        }).catch((error)=>{
            return error

        })
        console.log(response,"responsedata")
        return response.data

      }



export const ApiService = {
    BannerData,
    BrandsLogo,
    CustomerCart
}