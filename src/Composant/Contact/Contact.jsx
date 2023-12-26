import React from 'react'
import './Contact.css';
import Satelite from '../../assets/satelite.png'
import 'aos/dist/aos.css';

import { FiMapPin } from "react-icons/fi";
import { FaRegClock } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { FiSmartphone } from "react-icons/fi";
// import { Contactgroup } from '../../Data/Data';

const Contact = () => {
    return (
        <section id='contact' className='contact'>
            <div className='container-fluid'>
                <div className='row' data-aos='fade-up'>
                    <div className='col-12 ms-5 mb-3'>
                        <h6 className='text-white'>CONTACT</h6>
                        <h1>Contact Us</h1>
                    </div>
                    <div className="col-12">
                        <img src={Satelite} alt="Satelite" className="img-fluid mx-auto" />
                    </div>

                </div>
                <div className="row mt-3">
                    <div className="col-lg-4 col-md-6 col-sm-12 d-flex flex-column justify-content-center">
                        <div className='group d-flex flex-row'>
                            <div className='icon-group rounded-circle d-flex justify-content-center align-items-center'>
                                <FiMapPin className='icons' />
                            </div>

                            <div className="texte mt-2 ms-2">
                                <h5 className='text-white fw-bold'>Location:</h5>
                                <p className='text-secondary'>A108 Adam Street, New York, NY 535022</p>
                            </div>
                        </div>

                        <div className='group d-flex flex-row'>
                            <div className='icon-group rounded-circle d-flex justify-content-center align-items-center'>
                                <FaRegClock className='icons' />
                            </div>

                            <div className="texte mt-2 ms-2">
                                <h5 className='text-white fw-bold'>Open Hours:</h5>
                                <p className='text-secondary'>Monday-Saturday <br />11:00 AM - 2300 PM</p>

                            </div>
                        </div>

                        <div className='group d-flex flex-row'>
                            <div className='icon-group rounded-circle d-flex justify-content-center align-items-center'>
                                <MdOutlineMail className='icons' />
                            </div>

                            <div className="texte mt-2 ms-2">
                                <h5 className='text-white fw-bold'>Email:</h5>
                                <p className='text-secondary'>info@example.com</p>
                            </div>
                        </div>

                        <div className='group d-flex flex-row'>
                            <div className='icon-group rounded-circle d-flex justify-content-center align-items-center'>
                                <FiSmartphone className='icons' />
                            </div>

                            <div className="texte mt-2 ms-2">
                                <h5 className='text-white fw-bold'>Call:</h5>
                                <p className='text-secondary'>+1 5589 55488 55s</p>
                            </div>
                        </div>

                        {/* {Contactgroup.map((img, index) => (
                            <div className='group d-flex flex-row' key={index}>
                                <div className='icon-group rounded-circle d-flex justify-content-center align-items-center'>
                                    <p className='icons px-auto mx-auto'>{img.icon}</p>
                                </div>

                                <div className="texte mt-2 ms-2">
                                    <h5 className='text-white fw-bold'>{img.Location}</h5>
                                    <p className='text-secondary'>{img.paragraph}</p>
                                </div>
                            </div>
                        ))} */}

                    </div>

                    <div className="col-lg-8 col-md-6 col-sm-12">
                    <form
            action="forms/book-a-table.php"
            method="post"
            role="form"
            class="php-email-form"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div class="row">
              <div class="col-md-6 form-group">
                <input
                  type="text"
                  name="name"
                  class="form-control"
                  id="name"
                  placeholder="Your Name"
                  data-rule="minlen:4"
                  data-msg="Please enter at least 4 chars"
                />
                <div class="validate"></div>
              </div>
              <div class="col-md-6 form-group mt-3 mt-md-0">
                <input
                  type="email"
                  class="form-control"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                  data-rule="email"
                  data-msg="Please enter a valid email"
                />
                <div class="validate"></div>
              </div>
              
              <div class="col-12 form-group mt-3">
                <input
                  type="text"
                  class="form-control"
                  name="time"
                  id="time"
                  placeholder="Subject"
                  data-rule="minlen:4"
                  data-msg="Please enter at least 4 chars"
                />
                <div class="validate"></div>
              </div>
              
            </div>
            <div class="form-group mt-3">
              <textarea
                class="form-control"
                name="message"
                rows="5"
                placeholder="Message"
              ></textarea>
              <div class="validate"></div>
            </div>
            <div class="mb-3">
              <div class="loading">Loading</div>
              <div class="error-message"></div>
              <div class="sent-message">
                Your booking request was sent. We will call back or send an
                Email to confirm your reservation. Thank you!
              </div>
            </div>
            <div class="text-center">
              <button type="submit">Book a Table</button>
            </div>
          </form>

                    </div>

                </div>
            </div>

        </section>
    )
}

export default Contact