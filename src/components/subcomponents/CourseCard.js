import React from 'react'
import { Link } from 'react-router-dom';
import './CourseCard.scss'



const CourseCard = ({ img_source, title, rating }) => {
    const rateloop = [0, 1, 2, 3, 4];
    const ratingloader = Math.floor(rating)
    let ratecounter = 0
    return (
        <Link className='course-card h-100 d-flex align-items-center flex-column text-decoration-none' to={'/coursedetails'}>
            <div className="img-card w-100 rounded overflow-hidden" style={{height:'260px'}}>
                <img className='w-100' style={{objectFit:'cover',height:'250px'}} src={img_source} alt="" />
            </div>
            <div className='py-2 d-flex justify-content-center align-items-center' style={{ borderBottom: "1px solid rgba(142, 140, 140, 0.356)",color:'#302D3A' }}> 
                <span className='me-2'>{rating} </span> {
                        rateloop.map(ele => {
                            if (ratecounter < ratingloader) {
                                ratecounter++
                                return <i key={ele} className="fa-solid fa-star me-1" style={{ backgroundColor: 'yellow', WebkitTextStroke: "1px black", backgroundClip: 'text', color: 'transparent' }}> </i>
                            } else {
                                return <i className="fa-solid fa-star me-1" style={{ WebkitTextStroke: "1px black", backgroundClip: 'text', color: 'transparent' }}> </i>
                            }
                        })
                    }
            </div>
            <div className='p-2'>
                <h3 style={{color:'#302D3A',fontSize:"22px",fontWeight:'550'}}>{title}</h3>
            </div>
        </Link>
    )
}

export default CourseCard