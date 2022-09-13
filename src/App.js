import { useState,useEffect} from "react";
import Homepage from "./Component/Homepage/Homepage";
import {Route,Routes}from 'react-router-dom'
import Navbar from './Component/Navigationbar/Navbar'
import Productlist from "./Component/Product _Listing/allproducts/Productlist";
import PageNotFound from "./Component/404 Error/PageNotFound";
import CartItems from "./Component/CartPage/CartItems";
import './main/css/main.css'
import SingleProduct from "./Component/Product _Listing/allproducts/ProductPreview/SingleProduct";
import Searchbar from "./Component/FilterProducts/Searchbyname";
import FilterPriceRange from "./Component/Product _Listing/allproducts/FilterPriceRange";
import SortbyName from '../src/Component/Product _Listing/allproducts/SortbyName'
function App() {
 
  return (
    <div className="App">
<Routes>
  <Route path="/" element={<Navbar/>}>
     <Route index element={<Homepage/>}/>
     <Route path="/productlist/:entity_id" element={<Productlist/>}/>
     <Route path="/cartitems"element={<CartItems/>}/>
     <Route path='/singleproduct/:sku' element={<SingleProduct/>}/>
     <Route path='/searchbyname/:name' element={<Searchbar/>}/>
     <Route path='/filterbyprice/:id' element={<FilterPriceRange/>}/>
     <Route path='/sortbyname/:id' element={<SortbyName/>}/>

     <Route path="*" element={<PageNotFound/>}/>

  </Route>
</Routes>
    </div>
  );
}

export default App;
