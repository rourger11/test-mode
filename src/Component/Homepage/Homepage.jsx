import React from "react";
import Banner from "../Banner/Banner";

import Collection from "../Collection/Collection";
import Brands from "../Brands/Brands";
import Service from "../service-quality/Service";
import Blogs from '../Blog_Section/Blogs'
import Categories from "../categories/Categories";
import Footer from "../Footer_Section/Footer";
export default function Homepage() {
  return (
    <>
  
     <main>

        {/* banner  */}
        <Banner />

        {/* new products or coming soon products */}
        <Categories/>

        {/* colection section */}
        <Collection />

        {/* our brands section */}
        <Brands />

        {/* service-quality section */}
        <Service/>

        {/* Blog Section */}
        <Blogs/>

        
        {/* Footer section */}

        <Footer/>

      </main>
    </>
  );
}
