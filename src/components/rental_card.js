import { Link } from "react-router-dom";
import testImage from '../assets/images/banner-1.jpeg'



export const RentalCard = (props) => {

    // For testing
    const data = {
        id:'002',
        intro: 'House for Sale',
        location: 'Dharan',
        area: '2500 sq.feet',
        price: '20,00,00,000'
    }

    const practice = true;

    return (
        <>
            <div className="rental-card m-1" style={{ minWidth: '250px' }}>
                <img className="rental-image" src={practice ? testImage : props.obj.image} height={205} alt="Image" />
                <div className="mx-4 my-2">
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
                        <i class="fa-solid fa-vector-square fa-xs"></i>
                        <span className="mx-2 rental-text">{practice ? data.area : props.obj.area}</span>
                    </span>
                    <span className="d-block align-middle">
                        <i class="fa-solid fa-tags fa-xs"></i>
                        <span className="mx-2 rental-text">{practice ? data.price : props.obj.price}</span>
                    </span>
                </div>

            </div>

        </>
    );
}



{/* <Link className="text-decoration-none" to={"/detail/" + props.obj.id} >
    <div className="rental-card m-1">
        <Image className="rental-image" src={props.obj.image} height={130} />
        <div className="mx-2 my-2">
            <span className="d-block align-middle">
                <img src={building} width={10} height={10} />
                <span className="mx-2 rental-text">{props.obj.name}</span>
            </span>
            <span className="d-block align-middle">
                <img src={location} width={10} height={10} />
                <span className="mx-2 rental-text">{props.obj.location}</span>
            </span>
            <span className="d-block align-middle">
                <img src={area} width={10} height={10} />
                <span className="mx-2 rental-text">{props.obj.area}</span>
            </span>
            <span className="d-block align-middle">
                <img src={price} width={10} height={10} />
                <span className="mx-2 rental-text">{props.obj.price}</span>
            </span>
        </div>

    </div>
</Link> */}
