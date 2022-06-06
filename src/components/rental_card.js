import { Image } from "react-bootstrap";
import building from '../assets/icons/building.png';
import location from '../assets/icons/location.png';
import area from '../assets/icons/area.png';
import price from '../assets/icons/price.png';

export const RentalCard = (props) => {
    return (
        <a className="text-decoration-none" href="#">
            <div className="rental-card">
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
        </a >
    );
}