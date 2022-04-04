import React from 'react'

const FullBodyImages = () => {
    let links = {
        left: 'http://img.omdbapi.com/?i=tt2560140&h=800&apikey=4bd7c529',
        right: 'http://img.omdbapi.com/?i=tt0468569&h=800&apikey=4bd7c529'
    };

    let image2 = { backgroundImage: `url(${links.left})` };
    let image1 = { backgroundImage: `url(${links.right})` };
    return (
    <div className="p-0 d-flex h-100 container-fluid justify-content-evenly z-1">
        <div className={'full-cover bg-blur'}></div>  
        <div className={'flex-fill bg-img'} style={image1}></div>
        <div className={'flex-fill bg-img d-none d-lg-flex'} style={image2}></div>
        
    </div>
  )
}

export default FullBodyImages