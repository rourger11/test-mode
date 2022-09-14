import React from 'react'
import { useEffect } from 'react'
import Api from "../Blogapi"
export default function BlogPage() {
  
useEffect(()=>{
Api()
},[])

  return (
      <>
      <div className="container my-5">
          <div className="row sec-blog  bg-trans">
            <div className="col-md-4">
                <div className="blog-item">
                    <img class="d-block" src="../assets/img/blog-1.png" alt="Second slide"/>
                    <div className="blog-dec">
                           <label> January 2020</label>
                           <h4>Lorem ipsum dolor sit consectetur adipiscing elit,</h4>
                       </div>
                   </div>
            </div>
        </div>
       </div> 
      </>
  )
}
