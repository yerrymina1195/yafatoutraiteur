import React from 'react';
import './Chef.css';
import { Chefs } from '../../Data/Data';
import 'aos/dist/aos.css';

const Chef = () => {
  const handleMouseEnter = (index) => {
    const chefDetails = document.getElementById(`chef-details-${index}`);
    if (chefDetails) {
      chefDetails.style.display = 'block';
    }
  };

  const handleMouseLeave = (index) => {
    const chefDetails = document.getElementById(`chef-details-${index}`);
    if (chefDetails) {
      chefDetails.style.display = 'none';
    }
  };

  return (
    <section id='chefs' className='chefs'>
      <div className='container'>
        <div className='row' data-aos='fade-up'>
          <div className='col-12 ms-5 mb-3'>
            <h6 className='text-white'>CHEFS</h6>
            <h1>Our Professional Chefs</h1>
          </div>
          {Chefs.map((chef, index) => (
            <div className='col-lg-4 col-md-6 col-sm-12 chef-card' key={index}>
              <div
                className='mb-4 divImage'
                data-aos='zoom-in'
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
              >
                <img src={chef.image} alt='Chef' className='img-fluid image-cartes mx-auto' />
                <div id={`chef-details-${index}`} className='chef-details'>
                  <h3 className='d-flex justify-content-center align-items-center'>{chef.nom}</h3>
                  <p className='p-chef d-flex justify-content-center align-items-center'>{chef.poste}</p>
                  <div className='social-icons d-flex flex-row justify-content-around'>
                    <p className='icon'>{chef.iconTwitter}</p>
                    <p className='icon ms-2'>{chef.iconFacebook}</p>
                    <p className='icon ms-2'>{chef.iconIntagram}</p>
                    <p className='icon ms-2'>{chef.iconLinkedin}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Chef;