import { Link } from 'react-router-dom'
import './Navbar.scss'
// dependencies and styles import end //

import main_nav_logo from '../media/main_nav_logo.png'
// images import end //

import { FaAngleDown} from "react-icons/fa";
import { useEffect, useRef } from 'react';
// react-icons import end //
const Navbar = () => {
  let hamburgertoggler = 0;
  const hamburger = useRef();
  const main_nav_links = useRef()
  const navbar_main = useRef()
  const burgerfun = ()=>{
    if (hamburgertoggler === 0) {
      main_nav_links.current.style.cssText += 'width:256px'
      hamburger.current.children[0].style.cssText += 'transform: rotate(45deg);'
      hamburger.current.children[1].style.cssText += 'opacity:0'
      hamburger.current.children[2].style.cssText += 'transform: rotate(-45deg);'
      hamburgertoggler = 1
    }
    else{
      main_nav_links.current.style.cssText += 'width:0px'
      hamburger.current.children[0].style.cssText += 'transform: rotate(0deg);'
      hamburger.current.children[1].style.cssText += 'opacity:1'
      hamburger.current.children[2].style.cssText += 'transform: rotate(0deg);'

      hamburgertoggler = 0;
    }
  }
  useEffect(()=>{

    window.addEventListener('scroll',()=>{
      if (window.scrollY > navbar_main.current.offsetHeight) {
        navbar_main.current.style.cssText += 'position:fixed;top:0px;background-color:white;'
      }
      else{
        navbar_main.current.style.cssText += 'position:static;background-color:#fef0ef;'
      }
    })

  },[])
  return (
    <div className='container-fluid px-0 py-3 py-lg-0  navbar-main'  ref={navbar_main} >
        <div className='container-xl '>
            <div className='d-flex  align-items-center '>
              <Link  style={{width:'128px'}} to='/'><img className='img-fluid' src={main_nav_logo} alt="" /></Link>
              {/* nav logo end */}
              <div className='d-flex justify-content-center align-items-center flex-grow-1'>
                <ul className='main-nav-links d-flex  m-0 pt-3 ps-0 p-lg-0 overflow-lg-hidden' ref={main_nav_links}>
                  <li className='list-unstyled text-dark main-nav-links-list mx-3 py-lg-3'><Link className='text-decoration-none' style={{color:"#5f5982"}} to='/'>Home </Link></li>
                  <li className='list-unstyled text-dark main-nav-links-list mx-3 py-lg-3 position-relative overflow-visible pages-sublinks-toggle'><Link className='text-decoration-none' style={{color:"#5f5982"}}>Pages <span className='main-nav-tag-aero span-down'><FaAngleDown /></span></Link>
                    <ul className='d-flex flex-column navbar-sublinks pages-sublinks  ps-0' style={{zIndex:'100'}}>
                      <li className='list-unstyled ps-3 py-2'><Link className='text-decoration-none' style={{color:"#5f5982"}}>about</Link></li>
                      <li className='list-unstyled ps-3 py-2'><Link className='text-decoration-none' style={{color:"#5f5982"}}>All courses</Link></li>
                      <li className='list-unstyled ps-3 py-2'><Link className='text-decoration-none' style={{color:"#5f5982"}}>Search</Link></li>
                      <li className='list-unstyled ps-3 py-2'><Link className='text-decoration-none' style={{color:"#5f5982"}}>Contact</Link></li>
                    </ul>
                  </li>
                  <li className='list-unstyled text-dark main-nav-links-list mx-3 py-3 courses-sublinks-toggle position-relative'><Link className='text-decoration-none' style={{color:"#5f5982"}}>Courses <span className='main-nav-tag-aero span-down'><FaAngleDown /></span></Link>
                    <ul className='d-flex flex-column navbar-sublinks courses-sublinks  ps-0' style={{zIndex:'100'}}>
                        <li className='list-unstyled ps-3 py-2'><Link className='text-decoration-none' style={{color:"#5f5982"}} onClick={()=>{window.scrollTo(0,0)}} to='/searchcourse/'>All Courses</Link></li>
                        <li className='list-unstyled ps-3 py-2'><Link className='text-decoration-none' style={{color:"#5f5982"}} onClick={()=>{window.scrollTo(0,0)}} to='/searchcourse/design'>Design</Link></li>
                        <li className='list-unstyled ps-3 py-2'><Link className='text-decoration-none' style={{color:"#5f5982"}} onClick={()=>{window.scrollTo(0,0)}} to='/searchcourse/developement'>Developemet</Link></li>
                        <li className='list-unstyled ps-3 py-2'><Link className='text-decoration-none' style={{color:"#5f5982"}} onClick={()=>{window.scrollTo(0,0)}} to='/searchcourse/marketing'>Marketing</Link></li>
                        <li className='list-unstyled ps-3 py-2'><Link className='text-decoration-none' style={{color:"#5f5982"}} onClick={()=>{window.scrollTo(0,0)}} to='/searchcourse/photography'>Photography</Link></li>
                        <li className='list-unstyled ps-3 py-2'><Link className='text-decoration-none' style={{color:"#5f5982"}} onClick={()=>{window.scrollTo(0,0)}} to='/searchcourse/editing'>Editing</Link></li>

                    </ul>

                   </li>
                  <li className='list-unstyled text-dark main-nav-links-list position-relative mx-3 py-3 features-sublinks-toggle'><Link className='text-decoration-none' style={{color:"#5f5982"}}>Features <span className='main-nav-tag-aero span-down'><FaAngleDown /></span></Link>
                    <ul className='d-flex flex-column navbar-sublinks features-sublinks  ps-0' style={{zIndex:'100'}}>
                          <li className='list-unstyled ps-3 py-2'><Link className='text-decoration-none' style={{color:"#5f5982"}}>about</Link></li>
                          <li className='list-unstyled ps-3 py-2'><Link className='text-decoration-none' style={{color:"#5f5982"}}>All courses</Link></li>
                          <li className='list-unstyled ps-3 py-2'><Link className='text-decoration-none' style={{color:"#5f5982"}}>Search</Link></li>
                          <li className='list-unstyled ps-3 py-2'><Link className='text-decoration-none' style={{color:"#5f5982"}}>Contact</Link></li>
                    </ul>
                  </li>
                </ul>
              </div>
              {/* main nav-links-div end */}
              <div>
                  <ul className='p-0 m-0 d-flex align-items-center'>
                    <li className='list-unstyled px-1 px-sm-2 px-md-3'><Link className='text-decoration-none' style={{color:"#5f5982"}} to={'/searchcourse'}><i className="fa-solid fa-magnifying-glass"></i> </Link></li>
                    <li className='list-unstyled px-1 px-sm-2 px-md-3 d-block d-lg-none hamburger-icon' ><button  className='border-0 d-flex flex-column hamburger' style={{width:'30px',backgroundColor:'inherit'}} onClick={()=>{burgerfun()}} ref={hamburger}>
                      <span className='rounded' style={{width:'30px',height:'3px',backgroundColor:'#f56962',margin:'3.5px 0px'}} ></span>
                      <span className='rounded' style={{width:'30px',height:'3px',backgroundColor:'#f56962',margin:'3.5px 0px'}} ></span>
                      <span className='rounded' style={{width:'30px',height:'3px',backgroundColor:'#f56962',margin:'3.5px 0px'}} ></span>
                      </button></li>
                      {/* hamburger icon end */}
                    <li className='list-unstyled px-1 '><Link className='text-decoration-none text-light  py-2 px-3' style={{backgroundColor:'#f56962'}} >Register</Link></li>
                  </ul>
              </div>
              {/*  (search cart hamburger online-registration)-div end*/}
            </div>
            {/* main navbar end */}
        </div>
    </div>
  )
}

export default Navbar