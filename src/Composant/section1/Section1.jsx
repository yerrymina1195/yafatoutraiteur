import React, { useEffect } from 'react';
import "./Section1.css";
import Menu from '../menu/Menu';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

 

export default function Section1() {
  useEffect(() => {
    AOS.init();
  }, []); 
  return (
    <div className='mySection'>
        <p className='text-white'>+221 77 256 64 08</p>
        < Menu />
        <div
        class="container position-relative text-center text-lg-start"
        data-aos="zoom-in"
        data-aos-delay="100"
      >
        <div class="row text-white mt-5 pt-5">
          <div class="col-lg-8">
            <h1>Bienvenue à<span className='text-warning'>Ya Fatou Traiteur</span></h1>
            <h3>"Offrir une excellente cuisine depuis plus de 5 ans !"</h3>

            <div class="btns">
              <a href="#menu" class="btn btn-menu animated fadeInUp scrollto">Nos Menus </a>
              <a
                href="#book-a-table"
                class="btn btn-book animated fadeInUp scrollto" >Passer une Commande</a>
            </div>
          </div>
          <div
            class="col-lg-4 d-flex align-items-center justify-content-center position-relative"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
          <a href="assets/traiteur.mp4" class="glightbox play-btn">play<i class="bi bi-play-circle width=1040 height=1060"></i></a>
          </div>
        </div>
      </div>
    </div>
  )
}
