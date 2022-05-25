import { Image } from "react-bootstrap";
import building from '../assets/icons/building.png';
import location from '../assets/icons/location.png';
import area from '../assets/icons/area.png';
import price from '../assets/icons/price.png';

export const RentalCard = (props) => {
    return (
        <a style={{ height: 160 }} href="#">
            <div className="rental-card">
                <Image className="cat-image" src={props.obj.image} height={160} />
                <div className=" ">
                    <span className="d-flex">
                        <img src={building} width={10} />
                        {props.obj.name}
                    </span>
                    <span className="d-flex">
                        <img src={location} width={10} />
                        {props.obj.location}
                    </span>
                    <span className="d-flex">
                        <img src={area} width={10} />
                        {props.obj.area}
                    </span>
                    <span className="d-flex">
                        <img src={price} width={10} />
                        {props.obj.price}
                    </span>
                </div>

            </div>
        </a >
    );
}
