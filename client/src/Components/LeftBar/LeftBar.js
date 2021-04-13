import React from 'react';
import './LeftBar.scss'
import profile from '../../Assets/logo/profilePic.JPG';
import envelope from '../../Assets/icons/envelope.svg';
import phone from '../../Assets/icons/phone.svg';
import map from '../../Assets/icons/map.svg';
import LazyLoad from 'react-lazyload';

function LeftBar(){
    return(
        <section className='leftBar'>
            <LazyLoad  offsetVertical={200}  once>
                <div className='leftBar__imgDiv'>
                    <img className='leftBar__img' src={profile} alt='profile' />
                </div>
            </LazyLoad>
            <div className='leftBar__contact'>
                <h2 className='leftBar__heading'>Contact:</h2>
                <p className='leftBar__address leftBar__address--dept'>Department of Mathematics and Statistics</p>
                <p className='leftBar__address leftBar__address--uni'>Thompson Rivers University</p>
                <div className='leftBar__address--small'>
                    <img src={map} alt='map' className='leftBar__icon'/>
                    <p>805 TRU Way, Kamloops, BC</p>
                </div>
                <div className='leftBar__address--small'>
                    <img src={phone} alt='phone' className='leftBar__icon'/>
                    <p>1.250.828.5210</p>
                </div>
                <div className='leftBar__address--small'>
                    <img src={envelope} alt='envelope' className='leftBar__icon'/>
                    <p>jtomal@tru.ca</p>
                </div>
            </div>
        </section>
    );
}
export default LeftBar;