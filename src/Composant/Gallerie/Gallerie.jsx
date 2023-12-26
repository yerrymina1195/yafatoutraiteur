import React from 'react'
import './Gallerie.css'
import { Gallery } from '../../Data/Data'
import 'aos/dist/aos.css';

const Gallerie = () => {
    return (
        <section id='gallerie' className='gallerie' >
            <div className="container-fluid">
                <div className="row" data-aos="fade-up">
                    <div className="col-12 ms-5">
                        <h6 className='text-white'>GALLERY</h6>
                        <h1>Some photos from Our Restaurant</h1>
                    </div>
                    {Gallery.map((img) => (
                    <div className="col-lg-3 col-md-6 col-sm-12" >
                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <div className='mb-2'>
                                <img src={img.image} alt="image" className='img-fluid image-cartes mx-auto' />
                            </div>
                        </div>
                    </div>
                ))}
                </div>
            </div>

        </section>
    )
}

export default Gallerie