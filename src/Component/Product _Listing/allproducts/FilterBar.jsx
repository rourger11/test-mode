import React, { useState } from 'react'

import Accordion from 'react-bootstrap/Accordion'
import Form from 'react-bootstrap/Form'
import {useNavigate } from 'react-router-dom';

export default function Sidebar() {
    const [New, SetNew] = useState('');
    const navigate = useNavigate();



const dataCheck=[
    {
        id: "101",
        name: "Watches"

    },
    {
        id: "102",
        name: "Tablets"
    }
]


    const dataCheck1 = [
        {
            id: "1",
            name: "Low-High"
        },
        {
            id: "2",
            name: "High-Low"
        },
       
    ]


   


  

    function handleChange(e) {
        const filterId = e
        console.log(filterId)

        if(filterId==="1"){
            navigate(`/filterbyprice/${filterId}`)
        }

        if(filterId==="2"){
            navigate(`/filterbyprice/${filterId}`)
        }


    }

    const checkedItem = (e)=>{
    const id = e.id;
    const isChecked = e.checked;

    if( id == 101 && isChecked === true){
        navigate('/productlist/5')
    }
    if(id == 102 && isChecked === true){
        navigate('/productlist/4')
    }

    }
    return (
        <>
            <div className="side-bar">
                <div className="accordion-container">
                    <h3>Filters	</h3>
                    <img className="d-block" src="../main/assets/img/bar.png" alt="" />

                    <div className="accordion" id="accordionExample">

                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="1">
                                <Accordion.Header><h5>Type</h5></Accordion.Header>
                                <Accordion.Body>
                                    <Form className="collapse show">
                                        {dataCheck.map((type) => (
                                            <div key={type.id} className="mb-3 ml-5">
                                                <Form.Check
                                                    type="checkbox"
                                                    id = {type.id}
                                                    label={type.name}
                                                    className="card-body"
                                                    onChange={(e)=>checkedItem(e.target)}
                                                />
                                            </div>
                                        ))}

                                    </Form>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="0" className=''>
                                <Accordion.Header><h5>Range</h5></Accordion.Header>
                                <Accordion.Body className="card-head" style={{ lineheight: '.9rem' }}>
                                    <Form class="collapse show">
                                        {dataCheck1.map((type) => (

                                            <div key={type.id} className="mb-3 ml-5" >
                                                {/* { console.log(type,"type")} */}
                                                {/* <Form.Check
                                                    type="checkbox"
                                                    id={type.id}
                                                    label={type.name}
                                                    className="card-body"
                                                    onChange={handleChange}
                                                /> */}
                                                <p className='price_Name' id={type.id}onClick={(e)=>handleChange(e.target.id)}>{type.name} </p>


                                            </div>
                                        ))}

                                    </Form>
                                </Accordion.Body>

                            </Accordion.Item>


                            

                        </Accordion>
                    </div>
                </div>
            </div>

        </>)
}
