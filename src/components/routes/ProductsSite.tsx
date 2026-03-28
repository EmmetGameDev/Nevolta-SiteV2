import PageTopperHeading from '../helper/PageTopperHeading.tsx';
import ScrollToTop from '../helper/ScrollToTop.tsx';
import Navbar from '../Navbar.tsx';
import SiteFooter from '../SiteFooter.tsx';
import ProductColumn from '../helper/ProductColumn.tsx';
import PageTopperPhoto from '../helper/PageTopperPhoto.tsx';

import { PhotoGrid, PhotoPCBQuarter } from '../../assets/photos/index.js';
import { ModelVData } from '../../scripts/consoleOfferingData.ts';

function ProductsSite(){
    return(
        <div className="container-fluid m-0 p-0 d-flex flex-column min-vh-100">
            <ScrollToTop/>
            <Navbar/>
            <PageTopperPhoto photoSrc={PhotoGrid} />
            <div className="container text-center flex-grow-1">
                <PageTopperHeading title="Products" />
                <div className='row'>
                    <ProductColumn title={ModelVData.name} price={ModelVData.price} previousPrice={ModelVData.previousPrice} imageSrc={ModelVData.thumbnail} productLink={ModelVData.kitsPagePath} isWorkInProgress={false}/>
                    <ProductColumn title="" price={0} previousPrice={0} imageSrc={PhotoPCBQuarter} productLink="" isWorkInProgress={true}/>
                </div>
            </div>
            <SiteFooter/>
            <script src="js/specsScript.js"></script>
        </div>
    )
}

export default ProductsSite;