import { useState } from "react";
import { Card, Container, Image } from "react-bootstrap";
import { SwiperSlide } from "swiper/react";
import { HomeSlider } from "../../../components/home_slider";
import { RentalCard } from "../../../components/rental_card";


export const RentalRoomSilder = (props) => {

    const [categories, setCaetgories] = useState([
        {
            image: "https://cdn.redshift.autodesk.com/2018/08/future-of-buildings-header.jpg",
            name: "Apartments & Housing",
            location: "Kathmandu",
            area: "1500 sq. ft",
            price: "Rs. 12000"
        }, {
            image: "https://cdn.redshift.autodesk.com/2018/08/future-of-buildings-header.jpg",
            name: "Apartments & Housing",
            location: "Kathmandu",
            area: "1500 sq. ft",
            price: "Rs. 1200"
        },
    ]);

    return <HomeSlider title="Rental rooms"
        itemCounts={categories.length}
        builder={(index) => <RentalCard obj={categories[index]} />}
    />

}