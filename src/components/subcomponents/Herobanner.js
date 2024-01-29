import React, { useRef } from 'react'
import './Herobanner.scss'
import bannerImg from '../media/banner-img.jpg'
import { useNavigate } from 'react-router-dom'
const Herobanner = () => {
    const navigate  = useNavigate()
    const search_input = useRef()
  return (
    <div className='container-fluid py-5 hero-banner'>
        <div className="container p-0 py-3 pt-0 pt-md-3">
            <div className="row">
                <div className="col-md-7 d-flex justify-content-center gap-3 flex-column pt-5">
                    <h1 className='hero-banner-heading'>Learn more and make success the result of perfection.</h1>
                    <p className='hero-banner-para'>Pick from over 100,000 online video courses with new additions published every month.</p>
                    <form className='hero-banner-form'>
                        <div className='input-group w-100  pe-md-5 flex-nowrap'>
                            <input className='py-3 px-3' onKeyUp={e=>{if(search_input.current.value.length>0){if(e.key === 'ENTER'){navigate(`/searchcourse/${search_input.current.value}`);window.scrollTo(0,0)}}}} placeholder='Search your favourite course' ref={search_input} style={{outline:'0px',border:'0px',flexGrow:'1'}} type="text"  />
                            <button className='input-group-text border-0 text-light' style={{backgroundColor:'#f56962'}} onClick={e=>{
                                e.preventDefault();
                                if (search_input.current.value.length >0) {
                                    navigate(`/searchcourse/${search_input.current.value}`)
                                    window.scrollTo(0,0)
                                }
                            }}><i className="fa-solid fa-magnifying-glass"></i></button>
                        </div>
                    </form>
                </div>
                <div className="col-md-5 hero-banner-img-section d-flex  justify-content-center align-items-center ">
                    <div>
                    <img className='img-fluid position-relative mt-md-0 mt-5 ' src={bannerImg}  style={{borderRadius:"5%"}} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Herobanner