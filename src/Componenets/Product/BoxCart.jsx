import React from 'react'
import img from '../../img';

export const BoxCart = (props) => {
  return (
    <>
                                  <div className="col-md-4 col-12">
                                      <div className="text-center product">
                                        <div className="product-img">
                                            <img src={props.img} alt="" />
                                        </div>
                                        <div className="product-text">
                                            <p className='mb-0 mt-3'> {props.name}</p>
                                            <p className='text-black '><span className='fw-bold'>₹{props.price}</span> <span></span></p>
                                        </div>
                                        <button type="button" class="btn btn-primary">ADD TO CART</button>
                                      </div>
                                    </div>         
    </>
  )
}
