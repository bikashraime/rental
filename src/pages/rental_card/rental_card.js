import { useState, useEffect } from "react";
import house from '../../assets/images/banner-1.jpeg'
import restaurent from '../../assets/images/restaurent.jpg'
import shop from '../../assets/images/clothes.jpg'
import room from '../../assets/images/room.jpg'
import apartment from '../../assets/images/apartment.jpg'
import './rental_card.css'

export const RentalCard = (props) => {

    const [admin, setAdmin] = useState(false)

    useEffect(() => {
        // console.log("useEffect is runing")
        if (props.admin) {
            setAdmin(true)
        }
        // console.log("Props is checked")
    }, [])



    // For testing
    const data_sample = [
        {
            id: '002',
            img: house,
            intro: 'House for Sale and we will be happy to welcome you',
            location: 'Dharan',
            rent: true,
            price: '20,00,00,000'
        },
        {
            id: '4353',
            img: restaurent,
            intro: 'Restaurent for Sale',
            location: 'Biratnangar',
            rent: false,
            price: '100,00,000'
        },
        {
            id: '3592',
            img: shop,
            intro: 'Clothes shop for sale. A well established shop with branded items and good customer flow ',
            location: 'Itahari',
            rent: false,
            price: '25,00,000'
        },
        {
            id: '9834',
            img: room,
            intro: 'One room for rent',
            location: 'Kathmandu',
            rent: true,
            price: '7,000'
        },
        {
            id: '5645',
            img: apartment,
            intro: 'Luxurious apartment for sale',
            location: 'Bhaktapur',
            rent: false,
            price: '35,50,000'
        }
    ]


    let data = data_sample[Math.floor(Math.random() * 5)];
    let indicator = data.rent ? <div className="rental-indicator" style={{ backgroundColor: '#5fc95f' }}>Rent</div>
        : <div className="rental-indicator" style={{ backgroundColor: '#ec6345' }}>Sell</div>

    return (
        <>
            <div className="rental-card">
                <img className="rental-image" src={data.img} height={205} alt="Image" />
                <div className="rental-card-detail">
                    <div className="rental-text-id">
                        <span>
                            ID: {data.id}
                        </span>
                        <span style={admin ? { display: 'block' } : { display: 'none' }} >
                            <i class="fa-solid fa-ellipsis-vertical" style={{ padding: '0 .5rem', marginRight: '.5rem' }} title="Edit"></i>
                            <i id="rental-card-delete" class="fa-solid fa-trash" title="Delete Ad"></i>
                        </span>
                    </div>
                    <div className="rental-text-title">{data.intro}</div>

                    <div className="rental-text-address">
                        <div>
                            <i class="fa-solid fa-location-dot fa-lg"></i>
                            <span className="mx-2">{data.location}</span>
                        </div>
                        {indicator}
                    </div>

                    <div className="rental-text-price">Rs. {data.price}</div>

                    {/* <div>Width: {width}</div> */}
                </div>
            </div>
        </>
    );
}


