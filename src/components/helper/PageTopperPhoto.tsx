interface PageTopperPhotoProps {
    photoSrc: string;
}

function PageTopperPhoto({photoSrc}: PageTopperPhotoProps){
    return (
        <div className="container-fluid">
            <div className="mainPhotoDiv mainPhotoAboutDiv" style={{
                backgroundImage: `url(${photoSrc})`
            }}/>
        </div>
    )
}

export default PageTopperPhoto;