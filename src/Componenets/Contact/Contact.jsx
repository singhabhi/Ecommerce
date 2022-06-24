import React from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import img, { aboutimg , contactimg } from '../../img';
import { About } from '../About/About'
import GoogleMapReact from 'google-map-react';
import './Contact.css'
import PublicIcon from '@mui/icons-material/Public';
import { Electronics } from '../Electronics/Electronics'
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import EmailIcon from '@mui/icons-material/Email';
import HeadphonesIcon from '@mui/icons-material/Headphones';

export const Contact = () => {
    const contact = {
        width: "100%",
        height: "270px",
        backgroundImage: `url("  ${contactimg.contactimg1} ")`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        //   backgroundAttachment: "fixed"
    
      }
  return (
    <>
     <section className='About' style={contact}>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="aboutContent ">
                <p className='about-text1'>Contact withnpm  <span>Us</span></p>
                <p className='about-text2'>HOME <ArrowForwardIosIcon />  <span className='me-4'>CONTACT US</span></p>
              </div>
            </div>
          </div>
        </div>
      </section>
   
   

    
    </>
  )
}


export const ContactForm = () => {
   return(
   <>
    <section className='contact-form '>
      <div className="container">
        <div className="row">
            <div className="col-lg-12 col-xl-10 offset-xl-1">
                <div className="">
                    <div className="row">
                        <div className="col-md-5">
                           <div className="">
                            <h3 className='fw-bold'>Connect Us</h3>
                            
                            <div className='d-flex mt-4'>
                                <div className="contact-icon">
                                   <PublicIcon/>
                                </div>
                                <div className="ms-3 contact-text">
                                    <p className='fw-bold h4 '>Company Address</p>
                                    <p className='subtext'>10001, 5th Avenue, 12202 street, USA.</p>
                                </div>
                            </div>

                            <div className='d-flex mt-4'>
                                <div className="contact-icon">
                                   <AddIcCallIcon/>
                                </div>
                                <div className="ms-3 contact-text">
                                    <p className='fw-bold h4 '>Call Us</p>
                                    <p className='subtext'>+1(21) 112 7368</p>
                                </div>
                            </div>

                            <div className='d-flex mt-4'>
                                <div className="contact-icon">
                                   <EmailIcon/>
                                </div>
                                <div className="ms-3 contact-text">
                                    <p className='fw-bold h4 '>Email Us</p>
                                    <p className='subtext'>example@mail.com</p>
                                </div>
                            </div>

                            <div className='d-flex mt-4'>
                                <div className="contact-icon">
                                   <HeadphonesIcon/>
                                </div>
                                <div className="ms-3 contact-text">
                                    <p className='fw-bold h4 '>Customer Support</p>
                                    <p className='subtext'>info@support.com</p>
                                </div>
                            </div>


                           </div>
                        </div>
                        <div className="col-md-7 col-lg-7 col-xl-6 ">
                            <div className="contact-form-input">
                              <input type="text" placeholder='Your Name*' />
                              <input type="email" placeholder='Your Email*' />
                              <input type="text" placeholder='Subject*' />
                              <input type="text" placeholder='Website URL*' />
                              <textarea name="" id=""  placeholder='Type your message here*' ></textarea>
                            </div>
                            <div className="contact-form-btn mt-5">
                              <a href="#">SEND MESSAGE</a>
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