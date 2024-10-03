import React from 'react';
import AboutImg from '../assets/images/about-img.jpg';
import ViewMyWorkBtn from './ViewMyWorkBtn';

function AboutSection() {
    return (
        <div className='bg-dark text-light py-5' id='about'>
            <div className='container'>
                <div className='flex-column-reverse flex-md-row row'>
                    <div className='col-md-6 mt-5 mt-md-0 d-flex flex-column justify-content-center align-items-center'>
                        <img className='img-fluid w-75 shadow' src={AboutImg} alt="about img" />
                    </div>
                    <div className='col-md-6 d-flex flex-column justify-content-center'>
                        <h2 className='mb-5'>About me</h2>
                        <p className='text-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor exercitationem earum asperiores accusantium, possimus sequi at aperiam odit doloremque quasi eum quas assumenda magnam tempora?</p>
                        <p className='text-start mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nihil facilis, velit minima exercitationem commodi ipsa, itaque distinctio voluptatum natus nisi id eum ut, nostrum quibusdam modi debitis doloribus illum.</p>
                        <ViewMyWorkBtn />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutSection;