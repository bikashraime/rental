import { useState, useEffect } from "react";
import testImage from '../../assets/images/banner-1.jpeg'
import './rental_card.css'

export const RentalCard = (props) => {

    const [trash, setTrash] = useState(false)



    useEffect(() => {
        // console.log("useEffect is runing")
        if (props.trash) {
            setTrash(true)
        }
        // console.log("Props is checked")
    }, [])



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
            <div className="rental-card">
                <img className="rental-image" src={practice ? testImage : props.obj.image} height={205} alt="Image" />
                <div className="rental-card-detail">
                    <div className="rental-text-id">
                        <span>
                            ID: {practice ? data.id : props.obj.name}
                        </span>
                        <span style={trash ? { display: 'block' } : { display: 'none' }} >
                            <i id="rental-card-delete" class="fa-solid fa-trash"></i>
                        </span>
                    </div>
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


