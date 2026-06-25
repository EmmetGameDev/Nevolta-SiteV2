import PageTopperHeading from '../helper/PageTopperHeading.tsx';
import ScrollToTop from '../helper/ScrollToTop.tsx';
import Navbar from '../Navbar.tsx';
import SiteFooter from '../SiteFooter.tsx';
import BlogColumn from '../helper/BlogColumn.tsx';

import { ThumbnailESP32, ThumbnailNexus } from '../../assets/photos/index.js';
import { Youtube } from '../../assets/icons/index.js';

function BlogSite(){
    return(
        <div className="container-fluid m-0 p-0 d-flex flex-column min-vh-100">
            <ScrollToTop/>
            <Navbar/>
            <div className="container text-center flex-grow-1">
                <PageTopperHeading title="Nevolta Blog" />
                <div className='row blogRow'>
                    <div className="col-lg-12">
                        <p className="blogTextBlock">
                            Welcome to the our timeline! Here you'll find the latest news, updates, and uploads!
                        </p>
                    </div>
                </div>
                <div className='row'>
                    <BlogColumn title="Nexus desktop console" photoSrc={ThumbnailNexus} iconSrc={Youtube} shortDescs={["My first open-source hardware project! Available on GitHub!"]} date="04.06.2026" ButtonLinks={[{ link: "https://www.youtube.com/watch?v=XNRuj0vmZO0", text: "YouTube" }, { link: "https://github.com/EmmetGameDev/NevoltaNexusConsole", text: "GitHub" }]} />
                    <BlogColumn title="First YouTube upload!" photoSrc={ThumbnailESP32} iconSrc={Youtube} shortDescs={["I showcased my first console project, and that is how it all began!"]} date="22.02.2026" ButtonLinks={[{ link: "https://www.youtube.com/watch?v=PUARhIlPBy8", text: "YouTube" }, { link: "https://www.hackster.io/news/the-esp32-s3-meets-classic-gaming-20707cd1fdbe", text: "Hackster" }]} />
                </div>
            </div>
            <SiteFooter/>
            <script src="js/specsScript.js"></script>
        </div>
    )
}

export default BlogSite;