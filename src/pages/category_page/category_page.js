import React, { useEffect } from 'react'
import { useState } from "react";
import './category_page.css'
import { Image, Card, Button, Container, Row, Col } from "react-bootstrap";
// import api, { mediaUrl } from '../../utils/api';

const CategoryCard = (props) => {
    const styles = {
        card: {
            borderRadius: '10px',
            width: '18rem',
            overflow: 'hidden',
            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)'
        },
        image: {
            height: "250px",
        },
        title: {
            marginTop: '1rem'
        }
    }

    return (
        <Card className='category-page-card'>
            <Card.Img variant="top" src={props.obj.catImage} style={styles.image} />
            <Card.Body>
                <Card.Title>{props.obj.cateName}</Card.Title>
                <Button variant="primary" style={styles.title}>View All</Button>
            </Card.Body>
        </Card>
    )
}

const CategoryPage = () => {

    const [categories, setCaetgories] = useState([]);


    // useEffect(() => {
    //     api.get(`api/categories/`)
    //         .then(resu => {
    //             var result = resu.data;
    //             var list = [];
    //             for (const i in result) {
    //                 console.log(i)
    //                 let res = result[i]
    //                 list.push({
    //                     cateName: res.name,
    //                     catImage: mediaUrl + res.image,
    //                 })
    //             }
    //             setCaetgories(list)
    //         })
    // }, []);

    return (
        <div className='category-page animated fadeIn'>
            <Container className="category-page-container">
                {categories.map((category) => <CategoryCard obj={category} />)}
            </Container>

        </div>
    )
}

export default CategoryPage