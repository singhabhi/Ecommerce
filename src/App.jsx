import React from 'react'
import '/node_modules/bootstrap/dist/css/bootstrap.css'
import { Electronics } from './Componenets/Electronics/Electronics'
import { ProductType } from './Componenets/Product-Type/ProductType'
import { Filter } from './Componenets/Product/Filter'
import { Product } from './Componenets/Product/Product'
import { Silder } from './Componenets/Slider/Silder'
import { AboutMain } from './Componenets/About/AboutMain'
import { Rout } from './Componenets/Routing/Rout'


export const App = () => {
  return (
    <>
     <Rout/>
    </>
  )
}
