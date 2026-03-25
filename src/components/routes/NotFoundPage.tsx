import './NotFoundPage.css';
import PageTopperHeading from '../helper/PageTopperHeading';

import { NevoltaLogo } from '../../assets/svgs';
import { Error404 } from '../../assets/svgs';

function NotFoundPage(){
    return (
        <div className="container-fluid m-0 p-0">
            <div className="container notFoundContainer">
                <div className='row errorRow'>
                    <img className='errorImg' src={Error404} alt="404 error"/>
                </div>
                <PageTopperHeading title="Page Not Found" />
                <p style={{ textAlign: 'left', float: 'left' }}>Hello wanderer, you seem to be lost. Come back to the <a href="/Nevolta-SiteV2" className='customLink'>homepage</a>!</p>
            </div>
        </div>
    )
}

export default NotFoundPage;