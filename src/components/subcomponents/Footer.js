import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='container-fluid ' style={{backgroundColor:'#33333d'}}>
        <div className="container px-0 pt-5 pb-4">
            <div className="row row-cols-md-4 row-cols-1 row-cols-sm-2 px-2 gy-4 pb-4" style={{borderBottom:"1px solid #7d8686"}}>
                <div>
                    <h3 className='text-light' >Home</h3>
                    <ul className='p-0'>
                        <li className='list-unstyled py-1'><Link className='text-decoration-none ' style={{color:'#7d8686'}}>Home 1</Link> </li>
                        <li className='list-unstyled py-1'><Link className='text-decoration-none ' style={{color:'#7d8686'}}>Home 2</Link> </li>
                        <li className='list-unstyled py-1'><Link className='text-decoration-none ' style={{color:'#7d8686'}}>Home 3</Link> </li>
                    </ul>
                </div>
                <div>
                    <h3 className='text-light' >Pages</h3>
                    <ul className='p-0'>
                        <li className='list-unstyled py-1'><Link className='text-decoration-none ' style={{color:'#7d8686'}}>About</Link> </li>
                        <li className='list-unstyled py-1'><Link className='text-decoration-none ' style={{color:'#7d8686'}}>All Courses</Link> </li>
                        <li className='list-unstyled py-1'><Link className='text-decoration-none ' style={{color:'#7d8686'}}>Search</Link> </li>
                        <li className='list-unstyled py-1'><Link className='text-decoration-none ' style={{color:'#7d8686'}}>Contact</Link> </li>
                    </ul>
                </div>
                <div>
                    <h3 className='text-light' >Courses</h3>
                    <ul className='p-0'>
                        <li className='list-unstyled py-1'><Link className='text-decoration-none ' style={{color:'#7d8686'}}>Design</Link> </li>
                        <li className='list-unstyled py-1'><Link className='text-decoration-none ' style={{color:'#7d8686'}}>Developement</Link> </li>
                        <li className='list-unstyled py-1'><Link className='text-decoration-none ' style={{color:'#7d8686'}}>Editing</Link> </li>
                        <li className='list-unstyled py-1'><Link className='text-decoration-none ' style={{color:'#7d8686'}}>Marketing</Link> </li>
                    </ul>
                </div>
                <div>
                    <h3 className='text-light' >Features</h3>
                    <ul className='p-0'>
                        <li className='list-unstyled py-1'><Link className='text-decoration-none ' style={{color:'#7d8686'}}>About</Link> </li>
                        <li className='list-unstyled py-1'><Link className='text-decoration-none ' style={{color:'#7d8686'}}>All Courses</Link> </li>
                        <li className='list-unstyled py-1'><Link className='text-decoration-none ' style={{color:'#7d8686'}}>Search</Link> </li>
                        <li className='list-unstyled py-1'><Link className='text-decoration-none ' style={{color:'#7d8686'}}>Contact</Link> </li>
                    </ul>
                </div>
            </div>
            <div>
                <p className='text-center mt-4 mb-0' style={{color:'#7d8686'}}>© 2021 Skilify Education Private Limited. All rights reserved</p>
            </div>
        </div>
    </div>
  )
}

export default Footer