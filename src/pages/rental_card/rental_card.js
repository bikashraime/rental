import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import testImage from '../../assets/images/banner-1.jpeg'
import './rental_card.css'

export const RentalCard = (props) => {

    const ref = useRef(null);

    // const [width, setWidth] = useState(0);

    // const getSize = () => {
    //     if (ref.current) {
    //         setWidth(ref.current.offsetWidth)
    //     }
    // }
    // useEffect(() => {
    //     getSize();
    // }, [])

    // useEffect(() => {
    //     window.addEventListener('resize', getSize)
    // })

    // For testing
    const data = {
        id: '002',
        intro: 'House for Sale and we will be happy to welcome you',
        location: 'Dharan',
        price: '20,00,00,000'
    }
    const practice = true;

    return (
        <>
            <div ref={ref} className="rental-card">
                <img className="rental-image" src={practice ? testImage : props.obj.image} height={205} alt="Image" />
                <div className="rental-card-detail">
                    <div className="rental-text-id">ID: {practice ? data.id : props.obj.name}</div>
                    <div className="rental-text-title">{practice ? data.intro : props.obj.name}</div>
                    <div className="rental-text-address">
                        <i class="fa-solid fa-location-dot fa-lg"></i>
                        <span className="mx-2">{practice ? data.location : props.obj.location}</span>
                    </div>
                    <div className="rental-text-price">Rs. {practice ? data.price : props.obj.price}</div>

                    {/* <div>Width: {width}</div> */}
                </div>
            </div>
        </>
    );
}


