import React from 'react';
import './Contact.modules.css';

function Contact() {
    return (

        <div className='ContactContent'>

            <b>CONTACT US</b>
            <br />

            <div className='ContactCardBox'>
                <div className='CCB'>
                    <i class="fas fa-mobile-alt ico"></i>
                    <br />
                    <br />
                    <b className='ContactCardHeading'>CALL US</b>
                    <br />
                    0321-1939600
                </div>
                <div className='CCB'>
                    <i class="fas fa-paper-plane ico"></i>
                    <br />
                    <br />
                     <b className='ContactCardHeading'>EMAIL US</b>
                    <br />
                    m.anasseth00@gmail.com
                </div>
                <div className='CCB'>
                    <i class="fas fa-map-marker-alt ico"></i>
                    <br />
                    <br />
                    <b className='ContactCardHeading'> VISIT US</b>
                    <br />
                    Bahadurabad Chowrangi Near Oppo Official Outlet
                    <br />
                </div>
            </div>

            <div className='ContactSocial'>
                <a href="#" class="fa fa-facebook"></a>
                <a href="#" class="fa fa-twitter"></a>
                <a href="#" class="fa fa-google"></a>
                <a href="#" class="fa fa-linkedin"></a>
                <a href="#" class="fa fa-youtube"></a>
            </div>

        </div>




    )
}

export default Contact;