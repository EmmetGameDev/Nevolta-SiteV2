import PageTopperHeading from '../helper/PageTopperHeading.tsx';
import ScrollToTop from '../helper/ScrollToTop.tsx';
import Navbar from '../Navbar.tsx';
import SiteFooter from '../SiteFooter.tsx';
import ProductColumn from '../helper/ProductColumn.tsx';

import { PhotoGrid, PhotoQuarter, PhotoPCBQuarter } from '../../assets/photos/index.js';
import PageTopperPhoto from '../helper/PageTopperPhoto.tsx';

function ProductsSite(){
    return(
        <div className="container-fluid m-0 p-0">
            <ScrollToTop/>
            <Navbar/>
            <PageTopperPhoto photoSrc={PhotoGrid} />
            <div className="container">
                <PageTopperHeading title="Products" />
                <div className='row'>
                    <ProductColumn title="Nevolta V" price={49.99} previousPrice={64.99} imageSrc={PhotoQuarter} productLink="kits.html" isWorkInProgress={false}/>
                    <ProductColumn title="" price={0} previousPrice={0} imageSrc={PhotoPCBQuarter} productLink="" isWorkInProgress={true}/>
                </div>
            </div>
            <SiteFooter/>
            <script src="js/specsScript.js"></script>
        </div>
    )
}

export default ProductsSite;