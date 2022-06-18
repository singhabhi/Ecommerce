import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LoginIcon from '@mui/icons-material/Login';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import SearchIcon from '@mui/icons-material/Search';
import BedtimeIcon from '@mui/icons-material/Bedtime';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import './Header.css'

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
                                   <li><a href="#"><LoginIcon style={mystyle} /> Log In</a></li>
                                   <li><a href="#"><ExitToAppIcon style={mystyle} /> Register</a></li>
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
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
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
                                  <div className="col-md-4 col-lg-3 col-8 ">
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
                                  <div className="col-lg-9 d-none d-lg-block">
                                    <div className="">
                                        <ul className="header3-text-set  ">
                                            <li>HOME</li>
                                            <li>ELECTRONICS <ArrowDropDownIcon/></li>
                                            <li>APPLIANCES <ArrowDropDownIcon/></li>
                                            <li>ABOUT US</li>
                                            <li>NEW ARRIVALS</li>
                                            <li>PAGES <ArrowDropDownIcon/></li>
                                            <li>CONTACT US</li>
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