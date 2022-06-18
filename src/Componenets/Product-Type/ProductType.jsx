import React from 'react'
import img from '../../img'

import './ProductType.css'

export const ProductType = () => {
    const bg={
        width: "100%",
//   height: "400px",
  backgroundImage: `url("  ${ img.bgImg  } ")`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundAttachment: "fixed"
  
    }
  return (
    <>
        <section className='productType ' style={bg}>
          <div className="container">
            <div className="row">
                <div className="col-lg-12 col-xl-10 offset-xl-1">
                    <div className="m">
                        <div className="row">

                            <div className="col-md-12 col-lg-6">
                              <div className="productType-div  py-md-4 py-5 mb-5 mb-xl-0">
                                <div className="row">
                                    <div className="col-md-6">
                                     <div className="productType-div-contenr mt-md-5 pt-md-5 mt-xl-5 pt-xl-5 lg-md-4 pt-lg-4 ps-4">
                                      <p className='mb-0'>New Collection, New Trendy</p>
                                      <h3>Smart Watches</h3>
                                      <p className='pt-2'>Sale up to 25% off all in store</p>
                                     </div>
                                    </div>
                                    <div className="col-md-6 ">
                                        <div className="productType-div-contenr-img   text-center">
                                            <img src={`${img.Off1}`} alt="" />
                                        </div>
                                    </div>
                                </div>
                              </div>
                            </div>


                            <div className="col-md-12 col-lg-6">
                              <div className="productType-div  py-md-4 py-5">
                                <div className="row">
                                    <div className="col-md-6">
                                     <div className="productType-div-contenr mt-md-5 pt-md-5 mt-xl-5 pt-xl-5 lg-md-4 pt-lg-4 ps-4">
                                      <p className='mb-0'>Top Brands, lowest Prices</p>
                                      <h3>Smart Phones</h3>
                                      <p className='pt-2'>Free shipping order over $ 100</p>
                                     </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="productType-div-contenr-img text-center">
                                            <img src={`${img.Off2}`} alt="" />
                                        </div>
                                    </div>
                                </div>
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
