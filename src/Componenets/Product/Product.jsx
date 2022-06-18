import React from 'react'
import { Filter } from './Filter'

export const Product = () => {
  return (
     <>
        <section className='py-5 Product'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-xl-11 offset-xl-1">
                        <div className="">
                            <div className="row">
                                <div className="col-12">
                                  <Filter/>
                                </div>
                                 <div className="col">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
     </>
  )
}


export const Product2 = () => {
    return (
       <>
          <section className='py-5 Product-'>
              <div className="container">
                  <div className="row">
                      <div className="col">
                          <div className="">
                              <div className="row">
                                  <div className="col-4">
                                    <div className="">
                                        
                                    </div>
                                  </div> 
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
       </>
    )
  }
