import React from 'react'
import './CategoryCourse.scss'
import { categorydata } from '../jsondata/categorydata'
import { Link } from 'react-router-dom'
const CategoryCourse = () => {
  return (
    
    <div className='container-fluid' >
        <div className="container px-4 px-sm-0">
            <div className="row category-course-row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-5 g-3 align-items-stretch">
                {
                    categorydata.map(ele=>{
                        return(
                            <div className=''>
                                <Link className='rounded category-card d-flex flex-column align-items-sm-start align-items-center  p-3 text-decoration-none gap-4 h-100'>
                                    <div className='category-icon-div'> <i className={ele.icon}></i> </div>
                                    <h3 className='category-course-heading'>{ele.title} </h3>
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default CategoryCourse