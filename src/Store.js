import React from 'react';
import './Store.modules.css';
import gad3 from './gad3.png';
import gad4 from './gad4.png'
import gad5 from './gad6.png';
import gad6 from './gad8.png';
import gad7 from './gad9.png'
function Store() {
    return (

        <div className='StoreContent'>
            <br />
            OUR PRODUCTS

            <div className='StoreSampleProduct'>
                <div class="wrapper">
                    <div class="card">


                      SMART<br />
                     WATCH
                        <img className='gad3' src={gad3} />


                    </div>
                </div>
                <div class="wrapper">
                    <div class="card">
                        HEAD<br />PHONES
                    <img className='gad4' src={gad4} />
                    </div>

                </div>
                
                <div class="wrapper">
                    <div class="card">
                        APPLE<br />IPHONE
                    <img className='gad5' src={gad5} />
                    </div>
                </div>
                <div class="wrapper">
                    <div class="card">
                        SPEAKERS
                    <img className='gad6' src={gad6} />
                    </div>
                </div>
                <div class="wrapper">
                    <div class="card">
                        CAMERA
                    <img className='gad7' src={gad7} />
                    </div>
                </div>
            </div>
            {/* <button className='VisitStoreButton scale-in-center1'>Visit Store Now</button> */}
        </div>




    )
}

export default Store;