import { useState } from "react";
import { Image } from "react-bootstrap";
import { HomeSlider } from "../../../components/home_slider";

const CategoryCard = (props) => {
    return (
        <a style={{ height: 160 }} href="#">
            <div className="category-card">
                <Image className="cat-image" src={props.obj.catImage} height={160} />
                <div className="overlay-category align-self-center d-flex">
                    <span className="align-middle">{props.obj.cateName}</span>
                </div>
            </div>
        </a >
    );
}

export const CategorySilder = (props) => {

    const [categories, setCaetgories] = useState([
        {
            catImage: "https://cdn.redshift.autodesk.com/2018/08/future-of-buildings-header.jpg",
            cateName: "Apartments & Housing"
        }, {
            catImage: "https://i.guim.co.uk/img/media/ac01822e1237b350779e9e41ab69c8bcc8d292ea/0_0_6016_3611/master/6016.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=e8ed1dcb5b915acb79446d4bf5202eac",
            cateName: "Rental"
        }, {
            catImage: "https://uni-span.com.au/wp-content/uploads/2018/02/2_Blog_UniSpan.jpeg",
            cateName: "Land"
        }, {
            catImage: "https://media.istockphoto.com/photos/empty-road-at-building-exterior-picture-id479842074?k=20&m=479842074&s=612x612&w=0&h=HS6lsU1f9W21IkotS3cxdvU5KeEO-gLMUa6xrIBbR6k=",
            cateName: "Society"
        }, {
            catImage: "https://assets.weforum.org/article/image/v2gQQH6Qq5EAJSemo1Yqie27aYBOHE4pSwA6jSkFHKg.jpg",
            cateName: "Community"
        }, {
            catImage: "https://assets.nrdc.org/sites/default/files/styles/header_background/public/seattle_buildings_flickr_mariano_mantel.jpg?itok=JU5BdQjc",
            cateName: "Cam"
        }, {
            catImage: "https://acropolis-wp-content-uploads.s3.us-west-1.amazonaws.com/2019/02/hero.gif",
            cateName: "Campus"
        }, {
            catImage: "https://static.toiimg.com/thumb/msid-91006932,width-748,height-499,resizemode=4,imgsize-165776/.jpg",
            cateName: "Park"
        },
    ]);

    return <HomeSlider
        title="Categories"
        itemCounts={categories.length}
        goto="/categories"
        builder={(index) => <CategoryCard obj={categories[index]} />}
    />

}