import React, { useRef } from 'react'
import './SearchPage.scss'
import Footer from '../subcomponents/Footer'
import { Link, useNavigate } from 'react-router-dom'
import CourseCard from '../subcomponents/CourseCard'
import img_card from '../media/course-detail.png'
import know_about from '../media/know-about.webp'

const SearchPage = () => {
  const navigate  = useNavigate()
  const search_input = useRef()
  return (
    <>
    <div className="container-fluid py-5" style={{backgroundColor:'#efeff6'}}>
      <div className="container py-md-3 py-0 ">
        <div className="row g-3">
          <div className="col-md-4">
            <h1 className='fw-bold search-page-form-heading'>Courses</h1>
          </div>
          <div className='col-md-8'>
              <form className='hero-banner-form'>
                <div className='input-group w-100  pe-md-5 flex-nowrap'>
                      <input className='py-3 px-3' onKeyUp={e=>{if(search_input.current.value.length>0){if(e.key === 'ENTER'){navigate(`/searchcourse/${search_input.current.value}`)}}}} placeholder='Search your favourite course' ref={search_input} style={{outline:'0px',border:'0px',flexGrow:'1'}} type="text"  />
                      <button className='input-group-text border-0 text-light' style={{backgroundColor:'#f56962'}} onClick={e=>{
                          e.preventDefault();
                          if (search_input.current.value.length >0) {
                              navigate(`/searchcourse/${search_input.current.value}`)
                          }
                      }}><i className="fa-solid fa-magnifying-glass"></i></button>
                </div>
              </form>            
          </div>
        </div>
      </div>
    </div>
    <div className="container py-5">
      <div className="row my-3 justify-content-sm-center">
        <div className="col-auto">
          <button className='px-3 py-2 border-0 rounded bg-secondary text-light'>All</button>
        </div>
        <div className="col-auto">
          <button className='px-3 py-2 border-0 rounded text-secondary'>Design</button>
        </div>
        <div className="col-auto">
          <button className='px-3 py-2 border-0 rounded text-secondary'>Developement</button>
        </div>
        <div className="col-auto">
          <button className='px-3 py-2 border-0 rounded text-secondary'>Marketing</button>
        </div>
        <div className="col-auto">
          <button className='px-3 py-2 border-0 rounded text-secondary'>Editing</button>
        </div>
      </div>
    </div>
    <div className="container">
    <div className='row row-cols-1  row-cols-md-2 px-sm-5 row-cols-lg-3 row-cols-xxl-4 gy-4 gx-md-2 gx-xxl-3 align-items-stretch'>
              <div>
                  <CourseCard img_source={img_card} rating={4.3} title={'Learn Python Programmin Beginners'} />
              </div>
              <div>
                  <CourseCard img_source={img_card} rating={4.3} title={'Learn Python Programmin Beginners'} />
              </div>
              <div>
                  <CourseCard img_source={img_card} rating={5} title={'Learn Python Programmin Beginners'} />
              </div>
              <div>
                  <CourseCard img_source={img_card} rating={4.3} title={'Learn Python Programmin Beginners'} />
              </div>
              <div>
                  <CourseCard img_source={img_card} rating={3} title={'Learn Python Programmin Beginners'} />
              </div>
              <div>
                  <CourseCard img_source={img_card} rating={4.3} title={'Seo Full Course for beginners download'} />
              </div>
              <div>
                  <CourseCard img_source={img_card} rating={4.3} title={'Learn Python Programmin Beginners'} />
              </div>
              <div>
                  <CourseCard img_source={img_card} rating={4.3} title={'Learn Python Programmin Beginners'} />
              </div>
            </div>

    </div>
    <div className='container-fluid py-5'>
          <div className='container-xl '>
            <div className="row g-5">
              <div className="col-md-6 d-flex align-items-center">
                <div>
                  <h2 className='mb-3 text-start know-more-section-heading fw-bold' style={{letterSpacing:"1px"}}>Get more close with your courses.</h2>
                  <p className='mb-4  text-start homepage-category-section-para' style={{color:"#5f5982"}}>We provide a wide range of courses for the different sectors you can choose from, which suits you perfectly</p>
                  <ul className='p-0 mb-3'>
                    <li className='list-unstyled mb-1  text-start homepage-category-section-list' style={{color:"#5f5982"}}><i class="fa-solid fa-check p-1 me-1 rounded" style={{border:"2px solid #5f5982"}}></i> Detail description of each course</li>
                    <li className='list-unstyled mb-1  text-start homepage-category-section-list' style={{color:"#5f5982"}}><i class="fa-solid fa-check p-1 me-1 rounded" style={{border:"2px solid #5f5982"}}></i> Easy to understand language</li>
                    <li className='list-unstyled mb-1  text-start homepage-category-section-list' style={{color:"#5f5982"}}><i class="fa-solid fa-check p-1 me-1 rounded" style={{border:"2px solid #5f5982"}}></i> Simple and easy to learn courses.</li>
                  </ul>
                  <Link className='text-decoration-none d-inline-block text-light mt-3 py-2 px-3 px-md-4 rounded border fw-bold' style={{backgroundColor:'#f56962',letterSpacing:"1px"}}>Start Learning Now</Link>
                </div>
              </div>
              <div className="col-md-6 px-5 justify-content-center align-items-center  d-flex ">
                  <div  className='know-more-img-div mt-5'>
                    <img className='img-fluid' src={know_about} alt="" />
                  </div>
              </div>
            </div>
          </div>
        </div>
    <Footer/>
    </>

  )
}

export default SearchPage