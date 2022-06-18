import React from 'react'
import img from '../../img'
import './Slider.css'

export const Silder = () => {

    const bg={
        // width: "100%",
//   height: "400px",
  backgroundImage: `url("  ${ img.sliderImg } ")`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  
  
    }
  return (
    <>
           

                        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                              <div className="slider-Img" style={bg}>
                               <div className="container">
                                 <div className="row">
                                    
                                 </div>
                               </div>
                              </div>
                            </div>
                            <div className="carousel-item">
                            <div className="slider-Img" style={bg}>
                       
                             </div>
                            </div>
                            <div className="carousel-item">
                            <div className="slider-Img" style={bg}>
                       
                            </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                  </div>
    </>
  )
}
