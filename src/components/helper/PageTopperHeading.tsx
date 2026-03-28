interface PageTopperHeadingProps {
    title: string;
}

function PageTopperHeading({title}: PageTopperHeadingProps){
    return (
        <div className="row blogRow">
            <div className="col-lg-12">
                <h1 className="blogHeading text-font-alt"><b>{title}</b></h1>
            </div>
        </div>
    )
}

export default PageTopperHeading;