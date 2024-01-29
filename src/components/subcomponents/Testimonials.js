import React from 'react'
import './Testimonials.scss'
const Testimonials = () => {
  return (
    <div className='container-fluid py-5'>
        <div className="container">
            <div className="row row-cols-1 row-cols-md-2 gy-4" >
                <div className='col '>
                    <div className='p-4 border border-1 rounded'>
                        <div>
                            <div className='test-header'>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <div className='d-flex '>
                                        <div className='user-img-div border-1 border border-info rounded-circle' style={{width:"60px",height:"60px",}}>
                                            {/* place img tag here */}
                                        </div>
                                        <div className='ms-3 '>
                                            <h3  className='mb-1' style={{fontSize:'22px'}}>Ameer</h3>
                                            <span style={{fontSize:"15px",color:'#7d8686'}}>student</span>
                                        </div>
                                    </div>
                                    {/* student name and span section end */}
                                    <div className='d-none d-sm-block'>
                                        <i  className="fa-solid fa-star me-1" style={{ backgroundColor: 'yellow', WebkitTextStroke: "1px black", backgroundClip: 'text', color: 'transparent' }}> </i>
                                        <i  className="fa-solid fa-star me-1" style={{ backgroundColor: 'yellow', WebkitTextStroke: "1px black", backgroundClip: 'text', color: 'transparent' }}> </i>
                                        <i  className="fa-solid fa-star me-1" style={{ backgroundColor: 'yellow', WebkitTextStroke: "1px black", backgroundClip: 'text', color: 'transparent' }}> </i>
                                        <i  className="fa-solid fa-star me-1" style={{ backgroundColor: 'yellow', WebkitTextStroke: "1px black", backgroundClip: 'text', color: 'transparent' }}> </i>
                                        <i  className="fa-solid fa-star me-1" style={{ backgroundColor: 'yellow', WebkitTextStroke: "1px black", backgroundClip: 'text', color: 'transparent' }}> </i>
                                    </div>
                                    {/* rating section end */}
                                </div>
                            </div>
                            <div className="test-body">
                                <p className='my-3' style={{color:'#7d8686'}}><i> I would tell all people to register for Skilify now as they offer the best courses at affordable rates.</i></p>
                            </div>
                        </div>    
                    </div>
                </div>
                <div className='col '>
                    <div className='p-4 border border-1 rounded'>
                        <div>
                            <div className='test-header'>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <div className='d-flex '>
                                        <div className='user-img-div border-1 border border-info rounded-circle' style={{width:"60px",height:"60px",}}>
                                            {/* place img tag here */}
                                        </div>
                                        <div className='ms-3 '>
                                            <h3  className='mb-1' style={{fontSize:'22px'}}>Ameer</h3>
                                            <span style={{fontSize:"15px",color:'#7d8686'}}>student</span>
                                        </div>
                                    </div>
                                    {/* student name and span section end */}
                                    <div className='d-none d-sm-block'>
                                        <i  className="fa-solid fa-star me-1" style={{ backgroundColor: 'yellow', WebkitTextStroke: "1px black", backgroundClip: 'text', color: 'transparent' }}> </i>
                                        <i  className="fa-solid fa-star me-1" style={{ backgroundColor: 'yellow', WebkitTextStroke: "1px black", backgroundClip: 'text', color: 'transparent' }}> </i>
                                        <i  className="fa-solid fa-star me-1" style={{ backgroundColor: 'yellow', WebkitTextStroke: "1px black", backgroundClip: 'text', color: 'transparent' }}> </i>
                                        <i  className="fa-solid fa-star me-1" style={{ backgroundColor: 'yellow', WebkitTextStroke: "1px black", backgroundClip: 'text', color: 'transparent' }}> </i>
                                        <i  className="fa-solid fa-star me-1" style={{ backgroundColor: 'yellow', WebkitTextStroke: "1px black", backgroundClip: 'text', color: 'transparent' }}> </i>
                                    </div>
                                    {/* rating section end */}
                                </div>
                            </div>
                            <div className="test-body">
                                <p className='my-3' style={{color:'#7d8686'}}><i> I would tell all people to register for Skilify now as they offer the best courses at affordable rates.</i></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonials