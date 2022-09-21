import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import testImage from '../assets/images/banner-1.jpeg'



export const RentalCard = (props) => {

    const ref = useRef(null);

    const [width, setWidth] = useState(0);

    const getSize = () => {
        if (ref.current) {
            setWidth(ref.current.offsetWidth)
        }
    }
    useEffect(() => {
        getSize();
    }, [])

    useEffect(() => {
        window.addEventListener('resize', getSize)
    })

    // For testing
    const data = {
        id: '002',
        intro: 'House for Sale',
        location: 'Dharan',
        price: '20,00,00,000'
    }
    const practice = true;

    return (
        <>
            <div ref={ref} className="rental-card m-1" style={{ minWidth: '250px' }}>
                <img className="rental-image" style={{ maxWidth: '20rem' }} src={practice ? testImage : props.obj.image} height={205} alt="Image" />
                <div className="mx-4 my-2" style={{ minWidth: '10rem' }}>
                    <span className="d-block align-middle">
                        <i class="fa-solid fa-id-badge"></i>
                        <span className="mx-2 rental-text">{practice ? data.id : props.obj.name}</span>
                    </span>
                    <span className="d-block align-middle">
                        <i class="fa-solid fa-building fa-xs"></i>
                        <span className="mx-2 rental-text">{practice ? data.intro : props.obj.name}</span>
                    </span>
                    <span className="d-block align-middle">
                        <i class="fa-solid fa-location-dot fa-xs"></i>
                        <span className="mx-2 rental-text">{practice ? data.location : props.obj.location}</span>
                    </span>
                    <span className="d-block align-middle">
                        <i class="fa-solid fa-tags fa-xs"></i>
                        <span className="mx-2 rental-text">Rs. {practice ? data.price : props.obj.price}</span>
                    </span>
                    <span className="d-block align-middle">
                        <span className="mx-2 rental-text">Width: {width}</span>
                    </span>
                </div>
            </div>
        </>
    );
}


