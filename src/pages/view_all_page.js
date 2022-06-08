import { useState } from "react";
import { Row, Col, Container } from "react-bootstrap"
import { useParams } from "react-router-dom";
import { RentalCard } from "../components/rental_card"
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export const ViewAllPage = (props) => {

    const { pagename } = useParams();
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

    return (
        <>
            <Container className="my-3 py-3">
                <div className="d-flex flex-row justify-content-between align-items-center">
                    <h2 className='d-inline'>{capitalizeFirstLetter(pagename).replace("&", " & ")}</h2>
                </div>
                <div style={{ height: 20 }} />
                <Row>
                    {categories.map((obj) =>
                        <Col className="p-2" xs={12} sm={6} md={4} lg={3}>
                            <RentalCard obj={obj} />
                        </Col>
                    )}
                </Row>
            </Container>
        </>
    )
} 