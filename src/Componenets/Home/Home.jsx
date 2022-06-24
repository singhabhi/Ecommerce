import React from 'react'
import { Silder } from '../Slider/Silder'
import { Filter } from '../Product/Filter'
import { Electronics } from '../Electronics/Electronics'
import { ProductType } from '../Product-Type/ProductType'
export const Home = () => {
  return (
    <>
     <Silder/>
     <Filter/>
     <ProductType/>
     <Electronics/>
    </>
  )
}
