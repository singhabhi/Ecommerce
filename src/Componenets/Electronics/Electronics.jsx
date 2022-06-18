import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import './Electronics.css'

export const Electronics = () => {
    const elec ={
      fontSize: "55px"
    }
  return (
    <>
        <section className='electronics py-5'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-xl-10 offset-xl-1">
                      <div className="">
                        <div className="row">
                            <div className="col-12">
                             <div className='electronics-content'>
                              <p className='electronics-text'>Electronics :</p>
                              <p className='electronics-text2'>If you're considering a new laptop, looking for a powerful new car stereo or shopping for a new HDTV, we make it easy to find exactly what you need at a price you can afford. We offer Every Day Low Prices on TVs, laptops, cell phones, tablets and iPads, video games, desktop computers, cameras and camcorders, audio, video and more.</p>
                             </div>
                            </div>
                            
                        </div>
                        <div className="row">
                          <div className="col-12 ">
                            <div className="mt-5">
                            <div className="row">
                                <div className="col-md-4">
                                    <div class="d-flex mb-3 mb-md-0">
                                      <div class="icon-fot">
                                        <ShoppingCartIcon style={elec}/>
                                       </div>
                                        <div class="text-form-electronics ms-3 ">
                                            <h3>Free Shipping</h3>  
                                            <p>on orders over $100</p>
                                       </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div class="d-flex mb-3 mb-md-0">
                                      <div class="icon-fot">
                                        <LocalShippingIcon style={elec}/>
                                       </div>
                                        <div class="text-form-electronics ms-3 ">
                                            <h3>Fast Delivery</h3>  
                                            <p>World Wide</p>
                                       </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div class="d-flex ">
                                      <div class="icon-fot">
                                        <ThumbUpIcon style={elec}/>
                                       </div>
                                        <div class="text-form-electronics ms-3 ">
                                            <h3>Big Choice</h3>  
                                            <p>of Products</p>
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
            </div>
        </section>
    </>
  )
}
