import React, { useState, useEffect } from 'react'
import css from './detail.module.css'

import location from './pictures/location.svg'
import closeicon from './pictures/closeicon.svg'
import house from './pictures/house.jpg'
import b2 from './pictures/b2.jpg'
import b3 from './pictures/b3.jpg'
import background from './pictures/background.jpg'
// import api, { mediaUrl } from '../../utils/api'

import Lottie from "lottie-react";
import loadingAnimation from "../../assets/animations/loading.json";
import { useParams } from "react-router-dom";

function DetailPage(props) {

    const [lightbox, setLightbox] = useState(false);
    const [currentImg, setCurrentImg] = useState('');

    const [detail, setDetail] = useState();


    const [loading, setLoading] = useState(true);

    const giveImg = (img) => {
        setCurrentImg(img);
        setLightbox(true);
    }

    let { id } = useParams();

    // useEffect(() => {
    //     api.get(`api/product/detail/${id}/`)
    //         .then(resu => {
    //             setLoading(false);
    //             var res = resu.data;
    //             let imgs = [];
    //             for(let index in  res.images){
    //                 imgs.push(mediaUrl+ res.images[index])
    //             }
    //             setDetail({
    //                 id: res.id,
    //                 image: mediaUrl +res.image,
    //                 name: res.name ?? "N/A",
    //                 location: res.location ?? "N/A",
    //                 area: res.area ?? "N/A",
    //                 price: "Rs. " + (res.price ?? "N/A"),
    //                 images: imgs,
    //                 overview: res.overviews,
    //             })
    //         })
    // }, [id]);


    if (loading) {
        return (<Lottie animationData={loadingAnimation} loop />)
    }
    console.log(detail)

    return (
        <div className='animated slideUp'>
            <div className={lightbox ? css.lightbox : css.lightbox2}>
                <div className='animated fadeIn'>
                    <img src={currentImg} alt='current image' />
                    <div className='closeBtn' onClick={() => setLightbox(false)} >
                        <img src={closeicon} className={css.closeSymbol} />
                    </div>
                </div>
            </div>
            <div className={css.main}>
                <div className={css.insideMain}>
                    <div className={css.titleArea}>
                        <div className={css.title}>
                            <span>House on sale</span>
                        </div>
                        <div className={css.location}>
                            <div>
                                <img src={location} alt="location" />
                                <span>{detail.location}</span>
                            </div>
                            <span>Price: {detail.price}</span>
                        </div>
                    </div>
                    <div className={css.imageArea}>
                        {
                            detail.images.map((img, index) => {
                                if (index == 0)
                                    return <div className={css.grid1}>
                                        <img src={img} alt="house" onClick={() => giveImg(img)} />
                                    </div>
                                else if (index == 1) return <div><img src={b2} onClick={() => giveImg(b2)} /></div>
                                else if (index == 2) return <div><img src={b3} onClick={() => giveImg(b2)} /></div>
                                else if (index == 3) return <div><img src={background} onClick={() => giveImg(b2)} /></div>
                            })
                        }
                    </div>
                    <div className={css.overview}>
                        <span className={css.overviewTitle}>Overview</span>
                        <div className={css.overviewContainer}>
                            {
                                detail.overview.map((over) => <div>
                                    <span id={css['parameter']}>{over.name}: </span>
                                    <span>{over.value}</span>
                                </div>)
                            }

                        </div>
                    </div>
                    <div className={css.propertyDetail}>
                        <span className={css.propertyDetailTitle}>
                            Property Detail
                        </span>
                        <div className={css.propertyDetailContainer}>
                            <span>
                                {/* {detail} */}
                            </span>
                        </div>
                    </div>
                    <div className={css.ownerInfo}>
                        <span className={css.ownerInfoTitle}>
                            Owner Detail
                        </span>
                        <div className={css.ownerInfoContainer}>
                            <div>
                                <span id={css['ownerParameter']}>Name: </span>
                                <span>John Deep</span>
                            </div>
                            <div>
                                <span id={css['ownerParameter']}>Contact no: </span>
                                <span>123456789</span>
                            </div>
                            <div>
                                <span id={css['ownerParameter']}>Email</span>
                                <span>abcdef@gmail.com</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default DetailPage