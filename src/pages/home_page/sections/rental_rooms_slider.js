import { useState } from "react";
import { Card, Container, Image } from "react-bootstrap";
import { SwiperSlide } from "swiper/react";
import { HomeSlider } from "../../../components/home_slider";
import { RentalCard } from "../../../components/rental_card";

import { withRouter } from 'react-router-dom';


export const RentalRoomSilder = (props) => {

    const [categories, setCaetgories] = useState([
        {
            image: "https://media.istockphoto.com/photos/bohemian-living-room-interior-3d-render-picture-id1182454657?k=20&m=1182454657&s=612x612&w=0&h=1xEsm7BqeicA8jYk9KlerUtGsAgzzo530l5Ak1HJdnc=",
            name: "Home sweet home",
            location: "Kathmandu",
            area: "1500 sq. ft",
            price: "Rs. 12000"
        }, {
            image: "https://cdn.vox-cdn.com/thumbor/F-10vz_Z0k_6PftSz1rRhzYbAJg=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/21714408/2BWFDG7.jpg",
            name: "Apartments & Housing",
            location: "Kathmandu",
            area: "1500 sq. ft",
            price: "Rs. 1200"
        },
        {
            image: "https://media.istockphoto.com/photos/bohemian-living-room-interior-3d-render-picture-id1182454657?k=20&m=1182454657&s=612x612&w=0&h=1xEsm7BqeicA8jYk9KlerUtGsAgzzo530l5Ak1HJdnc=",
            name: "Home sweet home",
            location: "Kathmandu",
            area: "1500 sq. ft",
            price: "Rs. 12000"
        }, {
            image: "https://cdn.vox-cdn.com/thumbor/F-10vz_Z0k_6PftSz1rRhzYbAJg=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/21714408/2BWFDG7.jpg",
            name: "Apartments & Housing",
            location: "Kathmandu",
            area: "1500 sq. ft",
            price: "Rs. 1200"
        },
        {
            image: "https://media.istockphoto.com/photos/bohemian-living-room-interior-3d-render-picture-id1182454657?k=20&m=1182454657&s=612x612&w=0&h=1xEsm7BqeicA8jYk9KlerUtGsAgzzo530l5Ak1HJdnc=",
            name: "Home sweet home",
            location: "Kathmandu",
            area: "1500 sq. ft",
            price: "Rs. 12000"
        }, {
            image: "https://cdn.vox-cdn.com/thumbor/F-10vz_Z0k_6PftSz1rRhzYbAJg=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/21714408/2BWFDG7.jpg",
            name: "Apartments & Housing",
            location: "Kathmandu",
            area: "1500 sq. ft",
            price: "Rs. 1200"
        },
        {
            image: "https://media.istockphoto.com/photos/bohemian-living-room-interior-3d-render-picture-id1182454657?k=20&m=1182454657&s=612x612&w=0&h=1xEsm7BqeicA8jYk9KlerUtGsAgzzo530l5Ak1HJdnc=",
            name: "Home sweet home",
            location: "Kathmandu",
            area: "1500 sq. ft",
            price: "Rs. 12000"
        }, {
            image: "https://cdn.vox-cdn.com/thumbor/F-10vz_Z0k_6PftSz1rRhzYbAJg=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/21714408/2BWFDG7.jpg",
            name: "Apartments & Housing",
            location: "Kathmandu",
            area: "1500 sq. ft",
            price: "Rs. 1200"
        },
    ]);

    return <HomeSlider title="Rental rooms"
        itemCounts={categories.length}
        builder={(index) =>
            <RentalCard obj={categories[index]} />
        }
    />

}