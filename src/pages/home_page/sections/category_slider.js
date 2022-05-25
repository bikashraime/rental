import { useState } from "react";
import { Card, Container, Image } from "react-bootstrap";
import { SwiperSlide } from "swiper/react";
import { HomeSlider } from "../../../components/home_slider";

const CategoryCard = (props) => {
    return (
        <Card class='category-card'  >
            <a href="#">
                <div >
                    <Image className="cat-image" src={props.obj.catImage} fluid />
                    <div className="overlay-category">
                        {props.obj.cateName}
                    </div>
                </div>
            </a>

        </Card>);
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
        itemCounts={categories.length}
        builder={(index) => <CategoryCard obj={categories[index]} />}
    />

}