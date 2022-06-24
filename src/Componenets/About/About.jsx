import React from 'react'
import './About.css';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CheckIcon from '@mui/icons-material/Check';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import img, { aboutimg } from '../../img';

export const About = () => {

  const about = {
    width: "100%",
    height: "270px",
    backgroundImage: `url("  ${aboutimg.aboutimg1} ")`,
    backgroundPosition: 'initial',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    //   backgroundAttachment: "fixed"

  }
  return (
    <>
      <section className='About' style={about}>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="aboutContent ">
                <p className='about-text1'>Few Words about <span>Us</span></p>
                <p className='about-text2'>HOME <ArrowForwardIosIcon />  <span className='me-4'>CONTACT US</span></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}


export const About2 = () => {
  const checktik={
    fontSize: "16px",
    fontWeight: "900"
  }

  return (
    <>
      <section className='About2'>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-xl-10 offset-xl-1">
              <div className="">
                <div className="row   align-items-center">
                  <div className="col-lg-6">
                    <div className="About2-text">
                      <h1 className='mb-4'><span className='fw-bold '>We Work</span> <span className='h2'>for your best Success</span></h1>
                      <p className='mb-4 about-subtext'>Consectetur adipiscing  elit. Aliquam sit amet efficitur tortor.Uspendisse efficitur orci urna. In et augue ornare, tempor massa in, luctus sapien.</p>
                      <ul>
                        <li><span className='bg-yellow '><CheckIcon style={checktik}/></span> <span className='text'>Ut enim ad minim veniam</span></li>
                        <li><span className='bg-yellow '><CheckIcon style={checktik}/></span> <span className='text'>Quis nostrud exercitation ullamco laboris</span></li>
                        <li><span className='bg-yellow '><CheckIcon style={checktik}/></span> <span className='text'>Nisi ut aliquip ex ea commodo consequat</span></li>
                      </ul>

                      <div className="about-btn mt-5">
                        <a href="#">View Our Products</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="about2-img ms-md-4 mt-5 mt-lg-0">
                      <img src={aboutimg.aboutimg2} alt=""  className='mt-5 mt-lg-0'/>
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


export const About3 = () => {

  const bg={
        width: "100%",
      // height: "400px",
    backgroundImage: `url("  ${ aboutimg.aboutimg3  } ")`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: "fixed"

}
const feedbackicon={
  fontSize: "35px"
}
    return(
      <>
        <section className='About3 ' style={bg}>
          <div className="bg-effect About2">
          <div className="container ">
            <div className="row">
              <div className="col-lg-12 col-xl-10 offset-xl-1">
                <div className="">
                  <div className="row">
                    <div className="col-lg-8  text-white">
                      <div className="About3-text">
                        <h2>Our <span className=''>Customer</span> Says</h2>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque, eaque ipsa quae ab illo inventore.</p>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="mt-5">
                        <div className="row">
                          <div className="col-md-6 col-lg-4 ">
                            <div className="feedback-box rounded py-4 px-4 mb-4">
                             <p><span className='Quote'><FormatQuoteIcon style={feedbackicon} /></span> Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit.</p>
                            
                            <div className="d-flex mt-4">
                              <div className="feedback-person-img  ">
                                <img src={aboutimg.person1} alt="" className='rounded-circle' />
                              </div>
                              <div className="feedback-person-name ms-3 mt-1">
                                <p className=''><span className='fw-bold text-black'>Petey Cruis</span> <br/> <span className='h6'>Caption Here</span></p>
                                {/* <p>Caption Here</p> */}
                              </div>
                            </div>
                            </div>
                          </div>

                          <div className="col-md-6 col-lg-4">
                            <div className="feedback-box rounded py-4 px-4 mb-4">
                             <p><span className='Quote'><FormatQuoteIcon style={feedbackicon} /></span> Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit.</p>
                            
                            <div className="d-flex mt-4">
                              <div className="feedback-person-img  ">
                                <img src={aboutimg.person2} alt="" className='rounded-circle' />
                              </div>
                              <div className="feedback-person-name ms-3 mt-1">
                                <p className=''><span className='fw-bold text-black'>Molive Joe</span> <br/> <span className='h6'>Caption Here</span></p>
                               
                              </div>
                            </div>
                            </div>
                          </div>
                          
                          <div className="col-md-6 col-lg-4">
                            <div className="feedback-box rounded py-4 px-4 ">
                             <p><span className='Quote'><FormatQuoteIcon style={feedbackicon} /></span> Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit.</p>
                            
                            <div className="d-flex mt-4">
                              <div className="feedback-person-img  ">
                                <img src={aboutimg.person3} alt="" className='rounded-circle' />
                              </div>
                              <div className="feedback-person-name ms-3 mt-1">
                                <p className=''><span className='fw-bold text-black'>Paige Turner</span> <br/> <span className='h6'>Caption Here</span></p>
                             
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
          </div>
          </div>
        </section>
      </>
    )
}