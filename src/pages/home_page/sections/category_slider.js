import { useState } from "react";
import { Card, Container } from "react-bootstrap";
import { SwiperSlide } from "swiper/react";
import { HomeSlider } from "../../../components/home_slider";

const CategoryCard = (props) => {
    return <SwiperSlide className="mx-3" >
        <Card>
            <div style={{ width: 300, height: 200 }}>
                <img src={props.obj.catImage} height={200} width={300} />
                {props.obj.cateName}
            </div>
        </Card>
    </SwiperSlide>
}

export const CategorySilder = (props) => {

    const [categories, setCaetgories] = useState([
        {
            catImage: "https://static.toiimg.com/thumb/msid-91006932,width-748,height-499,resizemode=4,imgsize-165776/.jpg",
            cateName: "Apartments & Housing"
        }, {
            catImage: "https://static.toiimg.com/thumb/msid-91006932,width-748,height-499,resizemode=4,imgsize-165776/.jpg",
            cateName: "Rental"
        }, {
            catImage: "https://static.toiimg.com/thumb/msid-91006932,width-748,height-499,resizemode=4,imgsize-165776/.jpg",
            cateName: "Land"
        }, {
            catImage: "https://static.toiimg.com/thumb/msid-91006932,width-748,height-499,resizemode=4,imgsize-165776/.jpg",
            cateName: "Society"
        }, {
            catImage: "https://static.toiimg.com/thumb/msid-91006932,width-748,height-499,resizemode=4,imgsize-165776/.jpg",
            cateName: "Community"
        }, {
            catImage: "https://static.toiimg.com/thumb/msid-91006932,width-748,height-499,resizemode=4,imgsize-165776/.jpg",
            cateName: "Cam"
        }, {
            catImage: "https://static.toiimg.com/thumb/msid-91006932,width-748,height-499,resizemode=4,imgsize-165776/.jpg",
            cateName: "Campus"
        }, {
            catImage: "https://static.toiimg.com/thumb/msid-91006932,width-748,height-499,resizemode=4,imgsize-165776/.jpg",
            cateName: "Park"
        },
    ]);

    return <HomeSlider title="Categories"
        objects={categories}
        child={(obj) =>
            <CategoryCard obj={obj} />
        }
    />

}