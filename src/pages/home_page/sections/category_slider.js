import { useEffect, useState } from "react";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HomeSlider } from "../../../components/home_slider";
import api from "../../../utils/api";

const CategoryCard = (props) => {
    return (
        <Link style={{ height: 160 }} to={props.obj.cateName + "/viewall"}>
            <div className="category-card">
                <Image className="cat-image" src={props.obj.catImage} height={160} />
                <div className="overlay-category align-self-center d-flex">
                    <span className="align-middle">{props.obj.cateName}</span>
                </div>
            </div>
        </Link>
    );
}

export const CategorySilder = (props) => {

    const [categories, setCaetgories] = useState([]);


    useEffect(() => {
        api.get(`api/categories/`)
            .then(resu => {
                var result = resu.data;
                var list = [];
                for (const i in result) {
                    let res = result[i]
                    list.push({
                        cateName: res.name,
                        catImage: res.image,
                    })
                }
                setCaetgories(list)
            })
    }, []);

    return <HomeSlider
        title="Categories"
        itemCounts={categories.length}
        goto="/categories"
        builder={(index) => <CategoryCard obj={categories[index]} />}
    />

}