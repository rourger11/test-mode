import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FaHeart } from 'react-icons/fa'
import { RotatingLines } from 'react-loader-spinner'



export default function Brands() {
    const [isLoading, setLoading] = useState(false)

    const [logo, setLogo] = useState([])
    useEffect(() => {
        brands()
    }, [])

    const brands = async () => {
        setLoading(true)
        await axios.get('https://stgm.appsndevs.com/reactmarketplace/rest/V1/image')
            .then(response => {
                setLogo(response.data);
                setLoading(false)
            })

            .catch(error => {
                console.log(error)
            })
    }
    
const baseUrl='https://stgm.appsndevs.com/reactmarketplace/pub/media/'
    return (
        <>
            <div className="client-logo">
                <h3 className="my-5">
                    We <FaHeart color="#dc3545" /> To Our Brands
                </h3>
                {isLoading ? <div style={{ textAlign: "center" }}><RotatingLines
                            strokeColor="grey"
                            strokeWidth="5"
                            animationDuration="0.75"
                            width="96"
                            visible={true}

                        /> </div> :
                <div className="brand-logo-outer  wow animate__animated animate__zoomIn">
                    {logo.map((brand)=>{
                        return(

                            <img key={brand.image_id}className="d-block" src={`${baseUrl}${brand.image}`} alt="Second slide" />
                            )
                    })}
                </div>
                    }
            </div>
        </>
    )
}
