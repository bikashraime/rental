import React from 'react'
import { useState } from "react";
import './category_page.css'
import { Image, Card, Button, Container, Row, Col } from "react-bootstrap";

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
    return (
        <div className='category-page animated fadeIn'>
            <Container className="category-page-container">
                <CategoryCard obj={categories[0]} />
                <CategoryCard obj={categories[1]} />
                <CategoryCard obj={categories[2]} />
                <CategoryCard obj={categories[3]} />
                <CategoryCard obj={categories[4]} />
            </Container>

        </div>
    )
}

export default CategoryPage