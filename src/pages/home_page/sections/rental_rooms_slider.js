import { useState, useEffect } from "react";
import { Card, Container, Image } from "react-bootstrap";
import { SwiperSlide } from "swiper/react";
import { HomeSlider } from "../../../components/home_slider";
import { RentalCard } from "../../../components/rental_card";

import { withRouter } from 'react-router-dom';
import api, { mediaUrl } from "../../../utils/api";
import bannerGif from "../../../assets/animations/middlebanner.gif";


export const RentalRoomSilder = (props) => {


    const [categories, setCaetgories] = useState([]);


    useEffect(() => {
        api.get(`api/product/featured/`)
            .then(resu => {
                let result = resu.data;
                let list = [];
                console.log(result);
                for (const index in result) {
                    console.log(result[index]);
                    let rents = []
                    for (const j in result[index].rents) {
                        console.log({
                            id: result[index].rents[j].id,
                            image: result[index].rents[j].image,
                            name: result[index].rents[j].name,
                            location: result[index].rents[j].location,
                            area: "1500 sq. ft",
                            price: "Rs. " + result[index].rents[j].price
                        });
                        rents.push({
                            id: result[index].rents[j].id,
                            image: mediaUrl + result[index].rents[j].image,
                            name: result[index].rents[j].name,
                            location: result[index].rents[j].location,
                            area: "1500 sq. ft",
                            price: "Rs. " + result[index].rents[j].price
                        });
                    }
                    list.push({
                        name: result[index].category,
                        rents: rents
                    });
                }
                console.log(list)
                setCaetgories(list)
            })
    }, []);


    let render = [];
    console.log(categories);
    for (const index in categories) {
        if (index % 4 == 0) {
            render.push(
                <div className='text-center' style={{ backgroundColor: "#BEDFE0", marginTop: 80 }}>
                    <img src={bannerGif} height={400} />
                </div>);
        }
        render.push(<HomeSlider title={categories[index].name}
            itemCounts={categories[index].rents.length}
            goto={categories[index].name + '/viewall/'}
            builder={(ind) => {
                console.log(categories[index].rents[ind])
                return <RentalCard obj={categories[index].rents[ind]} />
            }}
            going='*'
        />
        );
    }

    return render;



}