import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MobileScreenShareIcon from '@mui/icons-material/MobileScreenShare';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import SendIcon from '@mui/icons-material/Send';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import img from '../../img';
import './Footer.css'


export const Footer = () => {
    return (
        <>
            <section className='footer bg-black py-5'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-xl-11 offset-xl-1">
                            <div className="">
                                <div className="row">
                                    <div className="col-md-3">
                                        <div className='footer-text'>
                                            <ul className=''>
                                                <li className='footer-titles'>Categories</li>
                                                <li>Mobiles</li>
                                                <li>Computers</li>
                                                <li>TV, Audio</li>
                                                <li>Smartphones</li>
                                                <li>Washing Machines</li>
                                                <li className='mb-0'>Refrigerators</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className='footer-text'>
                                            <ul className=''>
                                                <li className='footer-titles mt-4 mt-md-0'>Quick Links</li>
                                                <li>About Us</li>
                                                <li>Contact Us</li>
                                                <li>Help</li>
                                                <li>Faqs</li>
                                                <li>Terms of use</li>
                                                <li className='mb-0'>Privacy Policy</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className='footer-text'>
                                            <ul className=''>
                                                <li className='footer-titles mt-4 mt-md-0'>Get in Touch</li>
                                                <li><span><LocationOnIcon /></span> Mkc, 123 Sebastian, USA.</li>
                                                <li><span><MobileScreenShareIcon /></span> 12 2345 6790</li>
                                                <li><span><LocalPhoneIcon /></span> +11 3672 1890</li>
                                                <li><span><EmailIcon /></span> mail 1@example.com</li>
                                                <li><span><EmailIcon /></span> mail 2@example.com</li>
                                                {/* <li className='mb-0'>Refrigerators</li> */}
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className='footer-text'>
                                            <ul className=''>
                                                <li className='footer-titles'>Newsletter</li>
                                                <li>Free Delivery on your first order!</li>
                                            </ul>
                                            <div className="footer-search-bar mt-md-3 ">
                                                <input type="gmail" placeholder='Email' />
                                                <button className=''><SendIcon /></button>
                                            </div>

                                        </div>
                                        <div className="social-media-icon">
                                            <p>Follow Us on</p>
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
                </div>
            </section>
        </>
    )
}


export const Footer2 = () => {
    return (
        <>
            <section className='footer2 py-5'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-xl-11 offset-xl-1">
                            <div className="">
                                <div className="row">
                                    <div className="col-12 ">
                                        <div className='footer2-content'>
                                            <p>Mobile & Tablets :</p>
                                            <ul>
                                                <li className='ml-0'>Android Phones</li>
                                                <li>Smartphones</li>
                                                <li>Feature Phones</li>
                                                <li>Unboxed Phones</li>
                                                <li>Refurbished Phones</li>
                                                <li>Tablets</li>
                                                <li>CDMA Phones</li>
                                                <li>Value Added Services</li>
                                                <li>Sell Old</li>
                                                <li>Used Mobiles</li>


                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-12 ">
                                        <div className='footer2-content'>
                                            <p>Computers :</p>
                                            <ul>
                                                <li className='ml-0'>Laptops</li>
                                                <li>Printers</li>
                                                <li>Routers</li>
                                                <li>Ink & Toner Cartridges</li>
                                                <li>Monitors</li>
                                                <li>Video Games</li>
                                                <li>Unboxed & Refurbished Laptops</li>
                                                <li>Assembled Desktops</li>
                                                <li>Data Cards</li>

                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-12 ">
                                        <div className='footer2-content'>
                                            <p>TV, Audio & Large Appliances :</p>
                                            <ul>
                                                <li className='ml-0'>TVs & DTH</li>
                                                <li>Home Theatre Systems</li>
                                                <li>Hidden Cameras & CCTVs</li>
                                                <li>Refrigerators</li>
                                                <li>Washing Machines</li>
                                                <li>Air Conditioners</li>
                                                <li>Cameras</li>
                                                <li>Speakers</li>

                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-12 ">
                                        <div className='footer2-content'>
                                            <p>Mobile & Laptop Accessories :</p>
                                            <ul>
                                                <li className='ml-0'>Headphones</li>
                                                <li>Power Banks</li>
                                                <li>Backpacks</li>
                                                <li>Mobile Cases & Covers</li>
                                                <li>Pen Drives</li>
                                                <li>External Hard Disks</li>
                                                <li>Mouse</li>
                                                <li>Smart Watches & Fitness Bands</li>
                                                <li>MicroSD Cards</li>

                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-12 ">
                                        <div className='footer2-content'>
                                            <p>Appliances :</p>
                                            <ul>
                                                <li className='ml-0'>Trimmers</li>
                                                <li>Hair Dryers</li>
                                                <li>Emergency Lights</li>
                                                <li>Water Purifiers</li>
                                                <li>Electric Kettles</li>
                                                <li>Hair Straighteners</li>
                                                <li>Induction Cooktops</li>
                                                <li>Sewing Machines</li>
                                                <li>Geysers</li>

                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-12 ">
                                        <div className='footer2-content'>
                                            <p>Popular on Electronics Mart</p>
                                            <ul>
                                                <li className='ml-0'>Offers & Coupons</li>
                                                <li>Couple Watches</li>
                                                <li>Gas Stoves</li>
                                                <li>Air Coolers</li>
                                                <li>Air Purifiers</li>
                                                <li>Headphones</li>
                                                <li>Headsets</li>
                                                <li>Pressure Cookers</li>
                                                <li>Sandwich Makers</li>
                                                <li>Air Friers</li>
                                                <li>Irons</li>
                                                <li>LED TV</li>
                                                <li>Sandwich Makers</li>
                                            </ul>
                                        </div>

                                    </div>

                                    <div className="col-12 ">
                                        <div className='footer2-content footer-icon'>
                                            <p>Popular on Electronics Mart</p>
                                            <ul>
                                                <li className='footer-m-0'><img src={img.payone} alt="" /></li>
                                                <li><img src={img.paytwo} alt="" /></li>
                                                <li><img src={img.paythree} alt="" /></li>
                                                <li><img src={img.payfour} alt="" /></li>
                                                <li><img src={img.payfive} alt="" /></li>
                                                <li><img src={img.paysix} alt="" /></li>
                                                <li><img src={img.payseven} alt="" /></li>
                                                <li><img src={img.payeight} alt="" /></li>
                                                <li><img src={img.paynine} alt="" /></li>
                                               
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
    );
}

export const Footer3 = () => {
    return(
         <>
            <section className='footer3 text-center py-3'>
              <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className=" footer3-content">
                            <ul>
                                <li className='footer3-border'>© 2021 Electronics Mart. All rights reserved</li>
                                <li className='ms-1'>Design by <span className='text-white footer3-hover'>Abhishek Singh</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
              </div>
            </section>
         </>
    );
}
