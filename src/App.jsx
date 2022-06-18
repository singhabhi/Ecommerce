import React from 'react'
import '/node_modules/bootstrap/dist/css/bootstrap.css'
import { Electronics } from './Componenets/Electronics/Electronics'
import { ProductType } from './Componenets/Product-Type/ProductType'
import { Filter } from './Componenets/Product/Filter'
import { Product } from './Componenets/Product/Product'
import { Silder } from './Componenets/Slider/Silder'


export const App = () => {
  return (
    <>
     
        {/* <Product/> */}
        <Silder/>
        <Filter/>
        <ProductType/>
        <Electronics/>
       
       

    </>
  )
}
