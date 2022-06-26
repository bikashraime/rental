import { useState, useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap"
import { useParams } from "react-router-dom";
import { RentalCard } from "../../components/rental_card";

import Pagination from "react-js-pagination";
import api from "../../utils/api";
import Lottie from "lottie-react";
import loadingAnimation from "../../assets/animations/loading.json";

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
export const SearchPage = (props) => {
    const { pagename } = useParams();
    const [page, setPage] = useState(5);
    const [loading, setLoading] = useState(true);
    const [totalResults, setTotalResults] = useState("-");
    const [categories, setCaetgories] = useState([]);

    useEffect(() => {
        setLoading(true);
        api.get(`products/`)
            .then(resu => {
                setLoading(false);
                var result = resu.data.results;
                var list = [];
                for (var i = 0; i < result.length; i++) {
                    let res = result[i]
                    list.push({
                        id: res.id,
                        image: res.image,
                        name: res.name,
                        location: res.location,
                        area: "1500 sq. ft",
                        price: "Rs. " + res.price
                    })
                }
                setCaetgories(list)
            })
    }, [page]);
    if (loading) {
        return (<Lottie animationData={loadingAnimation} loop />)
    }

    return (
        <Container className="my-3 py-3">
            <div className="d-flex flex-row justify-content-between align-items-center">
                <h2 className='d-inline'>Search Result</h2>
            </div>
            <div style={{ height: 20 }} />
            <Row className="flex-fill">
                {categories.map((obj) =>
                    <Col className="p-2" xs={12} sm={6} md={4} lg={3}>
                        <RentalCard obj={obj} />
                    </Col>
                )}
            </Row>
            <Pagination
                itemClass="page-item"
                linkClass="page-link"
                activePage={page}
                itemsCountPerPage={10}
                totalItemsCount={20}
                pageRangeDisplayed={1}
                onChange={(value) => { alert(page); setPage(value) }}
            />
        </Container>

    )
}