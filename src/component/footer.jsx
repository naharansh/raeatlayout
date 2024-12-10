import './data.css';
import Icon from "@mdi/react"
import { mdiMapMarker } from '@mdi/js';
import { mdiPhoneOutline } from '@mdi/js';
import { mdiClockOutline } from '@mdi/js';
import { mdiFacebook } from '@mdi/js';
import { mdiInstagram } from '@mdi/js';
import { mdiLinkedin } from '@mdi/js';
import { mdiFacebookMessenger } from '@mdi/js';
const Foot = () => {
    return (
        <>
            <div className="container-fluid" id='footer' >
                <div className="row">
                    <div className="col-md-3 contain" >
                        <div className='ted'>
                            <Icon path={mdiMapMarker} size={1} className='locat' />
                            <span className='name'>Address</span>
                            <address>
                                A108 Adam Street<br />
                                New York, NY 535022
                            </address>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className='ted'>
                            <Icon path={mdiPhoneOutline} size={1} className='locat' />
                            <span className='name'>Contact</span>
                            <div className='the'>
                                <strong >Phone:-</strong>
                                <div className='pad'>
                                    +1 5589 55488 55
                                </div>
                            </div>
                            <div className='thed'>
                                <strong>Email:-</strong>
                                <div className='pad'>
                                    info@example.com
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className='ted'>
                            <Icon path={mdiClockOutline} size={1} className='locat' />
                                <strong><span>Opening Hours</span></strong>
                            <div className='tdk'> 
                                <span><strong>Mon-Sat:</strong>11AM-23PM</span>
                            </div>
                            <div className='tdk'>
                                <span><strong>Sunday</strong>Closed</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className='te'>
                            <strong><span>Follow Us</span></strong>
                        </div>
                        <div className='first'>
                            <Icon path={mdiFacebook} size={1} />

                        </div>
                        <div className='first'>
                            <Icon path={mdiInstagram} size={1} />
                        </div>
                        <div className='first'>
                            <Icon path={mdiLinkedin} size={1} />
                        </div>
                        <div className='first'>
                            <Icon path={mdiFacebookMessenger} size={1} />
                        </div>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-md-12">
                        <p className='copy'>&#xa9;Copyright<strong>EstateAgency </strong>All Right Reserved</p>
                        <p className='cop'>Designed by <a href="#dhek">BootstrapMade</a></p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Foot;