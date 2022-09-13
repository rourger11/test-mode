import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import { useNavigate } from 'react-router-dom';

export default function Mostviewed() {
    const navigate = useNavigate();
    const sortItem=[
        {
            id:"1",
            name:"A-Z"
        },
        {
            id:"2",
            name:"Z-A"
        }
    ]
    
    const  sortbyName =(e) =>{
        const filterId = e
        if(filterId==="1"){
            navigate(`/sortbyname/${filterId}`)
        }

        if(filterId==="2"){
            navigate(`/sortbyname/${filterId}`)
        }
    }


    return (
        <>
            <div className="short-bar">
                <h4>12 Result</h4>
                <div className="Sort-by d-flex">
                    <h4>Sort-by</h4>
                    <Dropdown>
                        <Dropdown.Toggle variant="light" id="dropdown-basic">
                            Sort-Products
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                        {sortItem.map((items)=>{
                            return(

                                <Dropdown.Item key={items.id}id={items.id} onClick={(e)=>sortbyName(e.target.id)}>{items.name}</Dropdown.Item>
                            )

                        })}
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div></>
    )
}
