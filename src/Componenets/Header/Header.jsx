import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LoginIcon from '@mui/icons-material/Login';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import SearchIcon from '@mui/icons-material/Search';
import BedtimeIcon from '@mui/icons-material/Bedtime';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import './Header.css'
import { NavLink } from "react-router-dom";
import { city } from '../../img';

// window.onscroll = function() {myFunction()};

// var header = document.getElementById("myHeader");
// var sticky = header.offsetTop;
// function myFunction() {
//   if (window.pageYOffset > sticky) {
//     header.classList.add("sticky");
//   } else {
//     header.classList.remove("sticky");
//   }
// }


// const unique = [...new Set(city.map(item => item.state))];
// console.log(unique);



export const Header = () => {
  
  



  const mystyle = {
        fontSize: "17px",
        marginTop: "-1px"
      };
    
  return (
    <>
    <section className='border-bottom'>
        <div className='container'>
            <div className="row">
                <div className="col-lg-12 col-xl-10 offset-xl-1">
                    <div className='bg-white mb-0 py-2 pt-3 '>
                        <div className="row ">
                            <div className="col-md-4 col-sm-12">
                                <div className='header-title  mb-2'>
                                <p className='mb-0'>WELCOME TO OUR SHOP!</p>
                                </div>
                            </div>
                            <div className="col-md-8 col-sm-12 text-md-end text-center ">
                                <div className=''>
                                 <ul className='header-text-set mb-0'>
                                   <li className='' ><a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal" ><LocationOnIcon style={mystyle} />Select Location</a></li>
                                   <li ><a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal2"><LoginIcon style={mystyle} /> Log In</a></li>
                                   <li><a href="#"  data-bs-toggle="modal" data-bs-target="#exampleModal3"><ExitToAppIcon style={mystyle} /> Register</a></li>
                                 </ul> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>


   

 {/* Modal */}
<div class="modal fade " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content py-4">
      <div class="modal-header">
        <h5 class="text-center" id=""><LocationOnIcon style={mystyle} /> Please Select Your Location</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <select name="city" id="city" className='py-3'>
      <option value="volvo">Select City</option>
      
      {
        
        city.map((citydata,index) =>{
      
         if(index<=100)
         {
          return(
            
            <option value="volvo">{citydata.city}</option>
          
      
          );
          
         }
        
        })
      }
      </select>
      </div>
     
    </div>
  </div>
</div>





{/* model2 */}
<div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title h3 fw-bold" id="exampleModalLabel">Log In</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
       <div className="loginform mb-3">
         <input type="text" placeholder='Username' />
       </div>
       <div className="loginform mb-4 pb-2">
         <input type="password" placeholder='Password' />
       </div>
       <div className="loginform mb-4">
         <a class="btn btn-primary" id='btn-color-change' href="#" role="button"  >Log in</a>
       </div>
       <div className="mb-4 check-box-for">
         <input type="checkbox" /> <span>Remember me?</span>
       </div>
       <div className="text-center loginform mb-4">
        <p>Don't have an account? <span>Register Now</span></p>
       
       </div>
       <div className="text-center social-media-icon2">
       <p>(Or)</p>
        
       <div className="social-media-icon">
          
              <ul className='footer-icon'>
                <li className='bg-blue'><FacebookIcon /></li>
                <li className='bg-light-blue '><TwitterIcon /></li>
               <li className='bg-orange'><GoogleIcon /></li>
             </ul>
        </div>
       </div>
      </div>
     
    </div>
  </div>
</div>



{/* model3 */}
<div class="modal fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title h3 fw-bold" id="exampleModalLabel">Register</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
       <div className="loginform mb-3">
         <input type="text" placeholder='Username' />
       </div>
       <div className="loginform mb-3 ">
         <input type="email" placeholder='Email' />
       </div>
       <div className="loginform mb-3">
         <input type="password" placeholder='Password'/>
       </div>
       <div className="loginform mb-4 pb-2">
         <input type="password" placeholder='Confirm Password'/>
       </div>
       <div className="loginform mb-4">
         <a class="btn btn-primary" id='btn-color-change' href="#" role="button"  >Register</a>
       </div>
       <div className="mb-4 check-box-for">
         <input type="checkbox" /> <span>I Accept to the Terms & Conditions</span>
       </div>
      
       <div className="text-center social-media-icon2">
       <p>(Or)</p>
        
       <div className="social-media-icon">
          
              <ul className='footer-icon'>
                <li className='bg-blue'><FacebookIcon /></li>
                <li className='bg-light-blue '><TwitterIcon /></li>
               <li className='bg-orange'><GoogleIcon /></li>
             </ul>
        </div>
       </div>
      </div>
     
    </div>
  </div>
</div>



    </>
  )
}

export const Header2 = () => {

    const mystyle2 = {
        fontSize: "20px",
        fontWeight: "bold",
     
      };
      const iconhead2 = {
        fontSize: "26px",
     
      };
      const icon2head2 = {
        marginLeft: "28px"
     
      };
  return (
      <>
          <section>
              <div className='container '>
                <div className="row">
                    <div className="col-lg-12 col-xl-11 offset-xl-1 ">
                      <div className="py-md-4">
                          <div className="row">
                              <div className="col-md-4 col-sm-12 col-lg-3">
                                 <div className='header2-title text-center text-md-start '>
                                  <p><span className='header2-title-firt-char'>E</span>lectronics <span className='header2-title-firt-char'>M</span>art</p>
                                 </div>
                              </div>
                              <div className="col-md-5 col-lg-6 col-sm-12">
                                  <div className="header2-search-bar mt-md-3 ">
                                    <input type="search" placeholder='Search for products, brands and more'/>
                                    <button className=''><SearchIcon style={mystyle2}/></button>
                                  </div> 
                              </div>
                              <div className="col-md-3 col-lg-3 col-sm-12">
                                  <div className=" pt-1">
                                    <ul className='header2-text-set mt-md-4 mt-3 text-center '>
                                        <li><BedtimeIcon style={iconhead2}/></li>
                                        <li className='head2icons' ><FavoriteBorderIcon style={iconhead2}/></li>
                                        <li className='head2icons' ><ShoppingCartCheckoutIcon style={iconhead2}  /> Cart</li>
                                    </ul>
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


export const Header3 = () => {
  return(
      <>
          <section className='Header3 py-3 ' id="myHeader">
              <div className="container">
                  <div className="row">
                      <div className="col-lg-12 col-xl-11 offset-xl-1">
                          <div className="">
                              <div className="row">
                                  <div className="col-md-4 col-lg-3 col-8 d-lg-block d-none">
                                    <div className='select-option '>
                                       <select id="agileinfo-nav_search" name="agileinfo_search" required="">
                                            <option value="">All Categories</option>
                                            <option value="Televisions">Televisions</option>
                                            <option value="Headphones">Headphones</option>
                                            <option value="Computers">Computers</option>
                                            <option value="Appliances">Appliances</option>
                                            <option value="Mobiles">Mobiles</option>
                                            <option value="Fruits &amp; Vegetables">Tv &amp; Video</option>
                                            <option value="iPad &amp; Tablets">iPad &amp; Tablets</option>
                                            <option value="Cameras &amp; Camcorders">Cameras &amp; Camcorders</option>
                                            <option value="Home Audio &amp; Theater">Home Audio &amp; Theater</option>
					                           	</select>
                                    </div>
                                  </div>
                                  <div className="col-lg-9  d-lg-block">
                                    <div className="">
                                        <ul className="header3-text-set  ">
                                           <li><NavLink to='/Ecommerce' activeClassName='active' className="manu-activ-link" exact >HOME</NavLink></li>
                                            <li className='d-none'>ELECTRONICS <ArrowDropDownIcon/></li>
                                            <li className='d-none'>APPLIANCES <ArrowDropDownIcon/></li>
                                           <li><NavLink to='/About' activeClassName='active' className="manu-activ-link" exact >ABOUT US</NavLink></li>
                                            <li className='d-none'>NEW ARRIVALS</li>
                                            <li className='d-none'>PAGES <ArrowDropDownIcon/></li>
                                            <li><NavLink to='/contact' activeClassName='active' className="manu-activ-link" exact >CONTACT US</NavLink></li>
                                        </ul>
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