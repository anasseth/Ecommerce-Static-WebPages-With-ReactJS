import React , { useState } from 'react';

import './Outlets.modules.css';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
// import Iframe from 'react-iframe'

function Outlets() {
    const [src, setSrc] = useState("https://maps.google.com/maps?q=bahadurabad&t=&z=19&ie=UTF8&iwloc=&output=embed")





    return (

        <div className='OutletsContent'>
<br />
<br />
<br />
            <div class="mapouter">
                <div class="gmap_canvas">
                    <iframe width="600" height="500" id="gmap_canvas" src={src} frameborder="0" scrolling="no" marginheight="0" marginwidth="0" />
                </div>
            </div>

            <div className='OutletLine'>
                <button className='OutletButton' onClick={() => setSrc("https://maps.google.com/maps?q=bahadurabad&t=&z=19&ie=UTF8&iwloc=&output=embed")}> Outlet 1 </button>
                <button className='OutletButton' onClick={() => setSrc("https://maps.google.com/maps?q=nazimabad&t=&z=19&ie=UTF8&iwloc=&output=embed")} > Outlet 2 </button>
                <button className='OutletButton' onClick={() => setSrc('https://maps.google.com/maps?q=DHA%20phase%208,%20karachi&t=&z=19&ie=UTF8&iwloc=&output=embed')} > Outlet 3 </button>
            </div>
        </div>




    )
}

export default Outlets;

