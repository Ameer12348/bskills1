import { Helmet } from 'react-helmet'
import Herobanner from '../subcomponents/Herobanner'
import { Link } from 'react-router-dom'
import './Homepage.scss'
import CategoryCourse from '../subcomponents/CategoryCourse'
import CourseCard from '../subcomponents/CourseCard'
import know_about from '../media/know-about.webp'
import img_card from '../media/course-detail.png'
import Footer from '../subcomponents/Footer'
import Testimonials from '../subcomponents/Testimonials'
const Homepage = () => {
  return (
    <>
        <Helmet>
            <title>BSkills - IT Training Center</title>
            <meta name='description' content='' />
        </Helmet>
        <Herobanner/>
        <div className='container'>
          <div className='d-flex flex-column flex-lg-row justify-content-between align-items-center mt-5 mb-4'>
            <h2 className='mb-3 homepage-category-section-heading'>Choice favourite course from top category</h2>
            <Link className='text-decoration-none d-block text-light py-2 py-md-3 px-3 px-md-4 rounded' style={{backgroundColor:'#f56962'}}>See All Categories</Link>
          </div>
        </div>
        <CategoryCourse/>
          {/* course category section end */}

      <div className="container-fluid py-5 py-sm-3 py-md-4 mt-5" style={{backgroundColor:'#efeff6'}}>
          <div className='container' >
            <div className='d-flex flex-column flex-lg-row justify-content-between align-items-center mt-5 mb-4'>
              <h2 className='mb-3 homepage-category-section-heading'>Get choice of your course</h2>
              <Link className='text-decoration-none d-block text-light py-2 py-md-3 px-3 px-md-4 rounded' style={{backgroundColor:'#f56962'}}>View All</Link>
            </div>
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
        </div>

        <div className="container-fluid  py-3 py-md-4 py-lg-5 banner-imaginary-2"  style={{backgroundColor:'#fef0ef'}}>
          <div className='container py-3 py-md-4 py-lg-5' >
            <div className='d-flex  flex-column justify-content-between align-items-center py-5'>
              <h2 className='mb-3 homepage-category-section-heading fw-bold' style={{letterSpacing:"1px"}}>Select the best from various online courses.</h2>
              <p className='mb-4 text-center homepage-category-section-para' style={{color:"#5f5982"}}>Our online video courses give you the freedom to learn remotely, and our experts will guide you properly.</p>
              <button className='text-decoration-none d-block text-light py-2 py-md-3 px-3 px-md-4 rounded border fw-bold' style={{backgroundColor:'#f56962',letterSpacing:"1px"}}>Join Today</button>
            </div>
          </div>
        </div>
        {/*know more about section end */}


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
        {/*know more about section end */}
        <div className='container-fluid px-0 py-5 testimonial-div'>
          <h3 className='text-center homepage-category-section-heading fw-bold' style={{letterSpacing:'1px'}}>Student Reviews</h3>
          <Testimonials/>
        </div>
        {/*Testimonials section end */}
        <Footer/>
        {/*footer section section end */}
        
    </>
  )
}

export default Homepage