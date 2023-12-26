import Gallery1 from '../assets/gallery1.jpg'
import Gallery2 from '../assets/gallery2.jpg'
import Gallery3 from '../assets/gallery3.jpg'
import Gallery4 from '../assets/gallery4.jpg'
import Gallery5 from '../assets/gallery5.jpg'
import Gallery6 from '../assets/gallery6.jpg'
import Gallery7 from '../assets/gallery7.jpg'
import Gallery8 from '../assets/gallery8.jpg'

import Chef1 from '../assets/chef1.jpg'
import Chef2 from '../assets/chef2.jpg'
import Chef3 from '../assets/chef3.jpg'

import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import { FiMapPin } from "react-icons/fi";
import { FaRegClock } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { FiSmartphone } from "react-icons/fi";

export const Gallery = [
    {
        image: Gallery1,
        
    },
    {
        image: Gallery2,
        
    },
    {
        image: Gallery3,
    },
    {
        image: Gallery4,
        
    },
    {
        image: Gallery5,
        
    },
    {
        image: Gallery6,
        
    },
    {
        image: Gallery7,
        
    },
    {
        image: Gallery8,
        
    },
];

export const Chefs = [
    {
        image: Chef1,
        nom : 'Walter White',
        poste : 'Master Chef',
        iconTwitter : <FaTwitter />,
        iconFacebook : <FaFacebook />,
        iconIntagram : <FaInstagram />,
        iconLinkedin : <FaLinkedin />,  
    },
    {
        image: Chef2,
        nom : 'Sarah Jhonson',
        poste : 'Patissier',
        iconTwitter : <FaTwitter />,
        iconFacebook : <FaFacebook />,
        iconIntagram : <FaInstagram />,
        iconLinkedin : <FaLinkedin />,   
    },
    {
        image: Chef3,
        nom : 'William Anderson',
        poste : 'Cook',
        iconTwitter : <FaTwitter />,
        iconFacebook : <FaFacebook />,
        iconIntagram : <FaInstagram />,
        iconLinkedin : <FaLinkedin />,  
    },
];

export const Contactgroup = [
    {
        icon : <FiMapPin />, 
        Location:'Location:',
        paragraph:'A108 Adam Street, New York, NY 535022' 
    },
    {
        icon : <FaRegClock />,
        Location:'Open Hours:',
        paragraph:'Monday-Saturday:',
        text: '11:00 AM - 2300 PM'
    },
    {
        icon : <MdOutlineMail />, 
        Location:'Email:',
        paragraph:'info@example.com' 
    },
    {
        icon : <FiSmartphone />,  
        Location:'Call:',
        paragraph:'+1 5589 55488 55s' 
    },
];