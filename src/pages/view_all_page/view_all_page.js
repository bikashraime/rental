import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import ReactPaginate from 'react-paginate';
import { RentalCard } from '../rental_card/rental_card';
import './view_all_page.css'

export default function ViewAll(props) {
    //for grid view
    let items = []
    for (let i = 0; i < 30; i++) {
        items.push(<RentalCard  />)
    }

    function Items({ currentItems }) {
        return (
            <div className="container">
                <div className="viewall-header">
                    <span className='viewall-title'>{props.title ? props.title : 'No title'}</span>
                    <div className="viewall-detail">
                        Showing 100 properties
                    </div>
                </div>
                <div style={{ borderBottom: '1px solid black', margin: '0.5rem 0' }}></div>
                <div className="viewall-grid">
                    {currentItems}
                </div>
            </div>
        );
    }

    function PaginatedItems({ itemsPerPage }) {
        const [currentItems, setCurrentItems] = useState(null);
        const [pageCount, setPageCount] = useState(0);
        const [itemOffset, setItemOffset] = useState(0);

        useEffect(() => {
            const endOffset = itemOffset + itemsPerPage;
            setCurrentItems(items.slice(itemOffset, endOffset));
            setPageCount(Math.ceil(items.length / itemsPerPage));
        }, [itemOffset, itemsPerPage]);

        const handlePageClick = (event) => {
            const newOffset = (event.selected * itemsPerPage) % items.length;
            setItemOffset(newOffset);
        };

        return (
            <div className='fadeIn slideUp'>
                <Items currentItems={currentItems} />
                <ReactPaginate
                    breakLabel="..."
                    nextLabel="next >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    previousLabel="< previous"
                    renderOnZeroPageCount={null}

                    pageClassName="page-item"
                    pageLinkClassName="page-link"
                    previousClassName="page-item"
                    previousLinkClassName="page-link"
                    nextClassName="page-item"
                    nextLinkClassName="page-link"
                    breakClassName="page-item"
                    breakLinkClassName="page-link"
                    containerClassName="pagination"
                    activeClassName="active"
                    className='pagination'
                />
            </div>
        );
    }




    return (
        <>
            <PaginatedItems itemsPerPage={12} />
        </>
    )
}
