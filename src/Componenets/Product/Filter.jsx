import React, { useEffect, useState } from 'react'
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import { BoxCart } from './BoxCart';
import img from '../../img';
import { moveimg } from '../../img';
import './Filter.css'





export const Filter = () => {

  const [data , setdata] = useState([]);

  const getData = async () =>{
   // const response= await fetch('https://fakestoreapi.com/products');
    const response= await fetch('https://api.escuelajs.co/api/v1/products');
   // const response= await fetch('https://dummyjson.com/products');
    setdata(await response.json());
    // const d=await response.json();
    // console.log(d);
  }
  

  useEffect(() =>{
    getData();
  }, [] );
  console.log(data)
  return (
    <>
    
        <section className='Filter'>
         <div className="container">
            <div className="row">
                <div className="col-lg-12 col-xl-10 offset-xl-1">
                    <div className="  py-5 rounded-3">
                        <div className="row">
                            <div className="col-md-12 col-xl-4 order-xl-first order-md-last">
                            <div className='Filter-css p-4 py-5 rounded-3'>
                             <div className='Filter-content mb-4'>
                              <div className="start-filter">
                                <h5 className='mb-4'>CUSTOMER REVIEW</h5>
                                <ul className='mb-1'>
                                    <li className='m-0  '><StarIcon/></li>
                                    <li><StarIcon/></li>
                                    <li><StarIcon/></li>
                                    <li><StarIcon/></li>
                                    <li><StarIcon/></li>
                                    <li className='text-black '>5.0</li>
                                </ul>
                                <ul className='mb-1'>
                                    <li className='m-0'><StarIcon/></li>
                                    <li><StarIcon/></li>
                                    <li><StarIcon/></li>
                                    <li><StarIcon/></li>
                                    <li className='text-black '>4.0</li>
                                </ul>
                                <ul className='mb-1'>
                                    <li className='m-0'><StarIcon/></li>
                                    <li><StarIcon/></li>
                                    <li><StarIcon/></li>
                                    <li><StarHalfIcon/></li>
                                    <li className='text-black '>3.5</li>
                                </ul>
                                <ul className='mb-1'>
                                    <li className='m-0'><StarIcon/></li>
                                    <li><StarIcon/></li>
                                    <li><StarIcon/></li>
                                    <li className='text-black '>3.0</li>
                                </ul>
                                <ul className='mb-1'>
                                    <li className='m-0'><StarIcon/></li>
                                    <li><StarIcon/></li>
                                    <li><StarHalfIcon/></li>
                                    <li className='text-black '>2.5</li>
                                </ul>
                               </div>
                             </div>

                             <div className='Filter-content2 mb-4'>
                              <div className="price-filter">
                                <h5 className='mb-4'>PRICE</h5>
                                <ul className='mb-1'>
                                    <li className='  '>Under $1,000</li>
                                    <li>$1,000 - $5,000</li>
                                    <li>$5,000 - $10,000</li>
                                    <li>$10,000 - $20,000</li>
                                    <li>$20,000 $30,000</li>
                                    <li className='text-black m-0'>Over $30,000</li>
                                </ul>
                               </div>
                             </div>

                             <div className='Filter-content2 mb-4 '>
                              <div className="price-filter">
                                <h5 className='mb-4'>DISCOUNT</h5>
                                <ul className='mb-1'>
                                    <li className=''>
                                        <input type="checkbox" className='' />
                                         <span>5% or More</span>
                                    </li>
                                    <li className=''>
                                        <input type="checkbox" className='' />
                                         <span>10% or More</span>
                                    </li>
                                    <li className=''>
                                        <input type="checkbox" className='' />
                                         <span>20% or More</span>
                                    </li>
                                    <li className=''>
                                        <input type="checkbox" className='' />
                                         <span>30% or More</span>
                                    </li>
                                    <li className=''>
                                        <input type="checkbox" className='' />
                                         <span>40% or More</span>
                                    </li>
                                    <li className='m-0'>
                                        <input type="checkbox" className='' />
                                         <span>50% or More</span>
                                    </li>
                                   
                                </ul>
                               </div>
                             </div>

                             <div className='Filter-content2 mb-4 '>
                              <div className="price-filter">
                                <h5 className='mb-4'>ELECTRONICS</h5>
                                <ul className='mb-1'>
                                    <li className=''>
                                        <input type="checkbox" className='' />
                                         <span>Accessories</span>
                                    </li>
                                    <li className=''>
                                        <input type="checkbox" className='' />
                                         <span>Cameras & Photography</span>
                                    </li>
                                    <li className=''>
                                        <input type="checkbox" className='' />
                                         <span>Car & Vehicle Electronics</span>
                                    </li>
                                    <li className=''>
                                        <input type="checkbox" className='' />
                                         <span>Computers & Accessories</span>
                                    </li>
                                    <li className=''>
                                        <input type="checkbox" className='' />
                                         <span>Headphones</span>
                                    </li>
                                    <li className=''>
                                        <input type="checkbox" className='' />
                                         <span>GPS & Accessories</span>
                                    </li>
                                    <li className=''>
                                        <input type="checkbox" className='' />
                                         <span>Home Audio</span>
                                    </li>
                                    <li className=''>
                                        <input type="checkbox" className='' />
                                         <span>Home Theater, TV & Video</span>
                                    </li>
                                    <li className=''>
                                        <input type="checkbox" className='' />
                                         <span>Mobiles & Accessories</span>
                                    </li>
                                    <li className=''>
                                        <input type="checkbox" className='' />
                                         <span>Portable Media Players</span>
                                    </li>
                                    <li className=''>
                                        <input type="checkbox" className='' />
                                         <span>Tablets</span>
                                    </li>
                                    <li className=''>
                                        <input type="checkbox" className='' />
                                         <span>Telephones & Accessories</span>
                                    </li>
                                    <li className='m-0'>
                                        <input type="checkbox" className='' />
                                         <span>Wearable Technology</span>
                                    </li>  
                                </ul>
                               </div>
                             </div>


                             <div className='Filter-content2 mb-4 '>
                              <div className="price-filter">
                                <h5 className='mb-4'>CASH ON DELIVERY</h5>
                                <ul className='mb-1'>
                                    <li className=''>
                                        <input type="checkbox" className='' />
                                         <span>Eligible for Cash On Delivery</span>
                                    </li>    
                                </ul>
                               </div>
                             </div>

                             <div className='Filter-content2 mb-4 '>
                              <div className="price-filter">
                                <h5 className='mb-4'>NEW ARRIVALS</h5>
                                <ul className='mb-1'>
                                    <li className=''>
                                        <input type="checkbox" className='' />
                                         <span>Last 30 days</span>
                                    </li>   
                                    <li className=''>
                                        <input type="checkbox" className='' />
                                         <span>Last 90 days</span>
                                    </li>   
                                </ul>
                               </div>
                             </div>

                             <div className="row">
                              <div className="col-12">
                                <div className="">
                                <h5 className='mb-4 fw-bold'>BEST SELLER</h5>
                                </div>
                              </div>

                              <div className="main-div-move">
                              <div className="div-move">
                                <div className="row">
                                 <div className="col-12">
                                  <div className="mb-4 mt-2">
                                    <div className="row">

                                      <div className="col-4">
                                        <div className="">
                                          <img src={moveimg.K1} alt="" />
                                        </div>
                                     </div>

                                      <div className="col-8">
                                          <div className="">
                                            <p>Samsung Galaxy F62 (Laser Grey, 128 GB) (6 GB RAM)</p>
                                            <h6>$12,990.00</h6>
                                          </div>
                                      </div>

                                    </div>
                                  </div>

                                  <div className="mb-4">
                                    <div className="row">

                                      <div className="col-4">
                                        <div className="">
                                          <img src={moveimg.K2} alt="" />
                                        </div>
                                     </div>

                                      <div className="col-8">
                                          <div className="">
                                            <p>Samsung 192 L Direct Cool Single Door 3 Star (2021) Refrigerator</p>
                                            <h6>$12,499.00</h6>
                                          </div>
                                      </div>

                                    </div>
                                  </div>

                                  <div className="mb-4">
                                    <div className="row">

                                      <div className="col-4">
                                        <div className="">
                                          <img src={moveimg.K3} alt="" />
                                        </div>
                                     </div>

                                      <div className="col-8">
                                          <div className="">
                                            <p>boAt Rockerz 450 Bluetooth Headset (Luscious Black, On the)</p>
                                            <h6>$1,199.00 </h6>
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

                            <div className='col-md-12 col-xl-8 order-first order-xl-last'>
                             <div className="">
                                <div className="row">

                                {
                                    data.map((d) => {
                                        {/* console.log(d.category.image); */}
                                        var idvalue =d.id
                                       
                                       
                                       if(idvalue<10)
                                       {
                                        return(
                                       
                                        
                                       <BoxCart 
                                       img={d.images[0]}
                                       price={d.price}
                                       name={d.title}
                                        />
                                      

                                      

                                       );
                                       }
                                    })
                                }
                              
                                  
                                    {/* <div className="col-md-4">
                                      <div className="text-center product">
                                        <div className="product-img">
                                            <img src={img.M1} alt="" />
                                        </div>
                                        <div className="product-text">
                                            <p className='mb-0 mt-3'>Redmi 9 Prime</p>
                                            <p className='text-black '><span className='fw-bold'>$200.00</span> <span>$280.00</span></p>
                                        </div>
                                        <button type="button" class="btn btn-primary">ADD TO CART</button>
                                      </div>
                                    </div> */}
                                    {/* <div className="col-md-4">
                                      <div className="text-center product">
                                        <div className=" product-img">
                                            <img src={img.TV} alt="" />
                                        </div>
                                        <div className="product-text">
                                            <p className='mb-0 mt-3'>Redmi 9 Prime</p>
                                            <p className='text-black '><span className='fw-bold'>$200.00</span> <span>$280.00</span></p>
                                        </div>
                                        <button type="button" class="btn btn-primary">ADD TO CART</button>
                                      </div>
                                    </div> */}
                                    {/* <div className="col-md-4">
                                      <div className="text-center product">
                                        <div className=" product-img">
                                            <img src={img.TV2} alt="" />
                                        </div>
                                        <div className="product-text">
                                            <p className='mb-0 mt-3'>Redmi 9 Prime</p>
                                            <p className='text-black '><span className='fw-bold'>$200.00</span> <span>$280.00</span></p>
                                        </div>
                                        <button type="button" class="btn btn-primary">ADD TO CART</button>
                                      </div>
                                    </div> */}
                                    {/* <div className="col-md-4">
                                      <div className="text-center product">
                                        <div className=" product-img">
                                            <img src={img.TV2} alt="" />
                                        </div>
                                        <div className="product-text">
                                            <p className='mb-0 mt-3'>Redmi 9 Prime</p>
                                            <p className='text-black '><span className='fw-bold'>$200.00</span> <span>$280.00</span></p>
                                        </div>
                                        <button type="button" class="btn btn-primary">ADD TO CART</button>
                                      </div>
                                    </div> */}
                                    {/* <div className="col-md-4">
                                      <div className="text-center product">
                                        <div className=" product-img">
                                            <img src={img.TV2} alt="" />
                                        </div>
                                        <div className="product-text">
                                            <p className='mb-0 mt-3'>Redmi 9 Prime</p>
                                            <p className='text-black '><span className='fw-bold'>$200.00</span> <span>$280.00</span></p>
                                        </div>
                                        <button type="button" class="btn btn-primary">ADD TO CART</button>
                                      </div>
                                    </div> */}
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


