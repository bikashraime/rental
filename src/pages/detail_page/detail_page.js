import React, { useState } from 'react'
import css from './detail.module.css'

import location from './pictures/location.svg'
import closeicon from './pictures/closeicon.svg'
import house from './pictures/house.jpg'
import b2 from './pictures/b2.jpg'
import b3 from './pictures/b3.jpg'
import background from './pictures/background.jpg'


function DetailPage() {

    const [lightbox, setLightbox] = useState(false);
    const [currentImg, setCurrentImg] = useState('');

    const giveImg = (img) => {
        setCurrentImg(img);
        setLightbox(true);
    }

    return (
        <div className='animated slideUp'>
            <div className={lightbox ? css.lightbox : css.lightbox2}>
                <img src={currentImg} alt='current image' />
                <img src={closeicon} className={css.closeSymbol} onClick={() => setLightbox(false)} />
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
                                <span>Bhaktapur, Kathmandu</span>
                            </div>
                            <span>Price: 250,000,000</span>
                        </div>
                    </div>
                    <div className={css.imageArea}>
                        <div className={css.grid1}><img src={house} alt="house" onClick={() => giveImg(house)} /></div>
                        <div><img src={house} onClick={() => giveImg(house)} /></div>
                        <div><img src={b2} onClick={() => giveImg(b2)} /></div>
                        <div><img src={b3} onClick={() => giveImg(b3)} /></div>
                        <div><img src={background} onClick={() => giveImg(background)} /></div>
                    </div>
                    <div className={css.overview}>
                        <span className={css.overviewTitle}>Overview</span>
                        <div className={css.overviewContainer}>
                            <div className={css.overviewConatinerBox}>
                                <div>
                                    <span id={css['parameter']}>Property ID: </span>
                                    <span>12345</span>
                                </div>
                                <div>
                                    <span id={css['parameter']}>Price: </span>
                                    <span>Rs. 250,000,000</span>
                                </div>
                                <div>
                                    <span id={css['parameter']}>Property Type: </span>
                                    <span>Residentail</span>
                                </div>
                                <div>
                                    <span id={css['parameter']}>Property Face: </span>
                                    <span>East</span>
                                </div>
                            </div>
                            <div className={css.overviewConatinerBox}>
                                <div>
                                    <span id={css['parameter']}>Area: </span>
                                    <span>1000sq.feet</span>
                                </div>
                                <div>
                                    <span id={css['parameter']}>Road Access: </span>
                                    <span>Yes</span>
                                </div>
                                <div>
                                    <span id={css['parameter']}>Parking Area: </span>
                                    <span>5 cars</span>
                                </div>
                                <div>
                                    <span id={css['parameter']}>Posted: </span>
                                    <span>26 May 2022</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={css.propertyDetail}>
                        <span className={css.propertyDetailTitle}>
                            Property Detail
                        </span>
                        <div className={css.propertyDetailContainer}>
                            <span>No detail available
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