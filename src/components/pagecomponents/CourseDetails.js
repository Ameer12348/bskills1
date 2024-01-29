import React from 'react'
import Footer from '../subcomponents/Footer'
import './CourseDetails.scss'
const CourseDetails = () => {
  return (
    <>
      <div className="container-fluid py-5 course-detail-banner" style={{backgroundColor:"#fef0ef"}}>
        <div className="container">
          <div className="row">
            <div className="col-md-8 d-flex flex-column justify-content-center">
              <div>
                <h1 className='course-detail-banner-heading mb-5' >Learn Python Programmin Beginners</h1>
                <p className='course-detail-banner-para mt-3'>In this course you will learn about Python programming language and its advance technologies and about framework django.</p>
                <div>
                  <span className='me-1'>4.9 </span>
                  <i  className="fa-solid fa-star me-1" style={{ backgroundColor: 'yellow', WebkitTextStroke: "1px black", backgroundClip: 'text', color: 'transparent' }}> </i>
                  <i  className="fa-solid fa-star me-1" style={{ backgroundColor: 'yellow', WebkitTextStroke: "1px black", backgroundClip: 'text', color: 'transparent' }}> </i>
                  <i  className="fa-solid fa-star me-1" style={{ backgroundColor: 'yellow', WebkitTextStroke: "1px black", backgroundClip: 'text', color: 'transparent' }}> </i>
                  <i  className="fa-solid fa-star me-1" style={{ backgroundColor: 'yellow', WebkitTextStroke: "1px black", backgroundClip: 'text', color: 'transparent' }}> </i>
                  <i  className="fa-solid fa-star me-1" style={{ backgroundColor: 'yellow', WebkitTextStroke: "1px black", backgroundClip: 'text', color: 'transparent' }}> </i>
                  (343)

                </div>
              </div>
            </div>
            {/*heading and text end */}
            <div className="col-md-4 d-flex flex-column justify-content-center">
              <form  className='border border-1 border-secondary p-3 bg-light' >
                <h3 className='mb-4'>Get Register Yourselft</h3>
                <div className='mb-3' >
                  <input className='w-100 p-2 border-1 border-secondary' style={{outline:'0px',backgroundColor:"#fef0ef"}} placeholder='Name'  type="text"  />
                </div>
                <div className='mb-3'>
                  <input className='w-100 p-2 border-1 border-secondary' style={{outline:'0px',backgroundColor:"#fef0ef"}} placeholder='Email'  type="email"  />
                </div>
                <div className='mb-3'>
                  <input className='w-100 p-2 border-1 border-secondary' style={{outline:'0px',backgroundColor:"#fef0ef"}}  placeholder='Phone Number' type="tel"  />
                </div>
                <div className='d-flex justify-content-center'>
                  <button className=' border-0 text-light px-5 py-2'style={{backgroundColor:'#f56962',fontSize:'18px'}} type='submit' onClick={e=>{e.preventDefault()}}>Submit</button>
                </div>
              </form>
              {/*course detail registration detail end */}
            </div>
          </div>
          {/*row end */}
        </div>
      </div>
      {/*course details banner end */}
      <div className='container-fluid py-5'>
        <div className="container">
          <div className='mb-5'>
            <h2 className='course-details-description-heading'>Course Description</h2>
            <p className='course-details-description-para'>In this course, you will learn Photoshop, Illustrator, Adobe XD, InDesign & more. Also, you will learn how to bring out the best in your photographs with this beginner's course on Adobe Lightroom Classic, the photo editing app that's optimized for desktops.</p>
          </div>
          <div className='mb-5'>
            <h2 className='course-details-description-heading'>Course Description</h2>
            <p className='course-details-description-para'>In this course, you will learn Photoshop, Illustrator, Adobe XD, InDesign & more. Also, you will learn how to bring out the best in your photographs with this beginner's course on Adobe Lightroom Classic, the photo editing app that's optimized for desktops.</p>
          </div>
          <div className='mb-5'>
            <h2 className='course-details-description-heading'>Course Description</h2>
            <p className='course-details-description-para'>In this course, you will learn Photoshop, Illustrator, Adobe XD, InDesign & more. Also, you will learn how to bring out the best in your photographs with this beginner's course on Adobe Lightroom Classic, the photo editing app that's optimized for desktops.</p>
          </div>
          <div className='mb-5'>
            <h2 className='course-details-description-heading'>Course Description</h2>
            <p className='course-details-description-para'>In this course, you will learn Photoshop, Illustrator, Adobe XD, InDesign & more. Also, you will learn how to bring out the best in your photographs with this beginner's course on Adobe Lightroom Classic, the photo editing app that's optimized for desktops.</p>
          </div>
        </div>
      </div>
      {/*course details description end */}
      <Footer/>
    </>
  )
}

export default CourseDetails