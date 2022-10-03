import React, { useState } from 'react'
import Modal from 'react-modal'
import './delete_modal.css'



function DeletePopup1({ setShowModal }) {

    const [confirm, setConfirm] = useState(false)

    function handleDelete() {
        setConfirm(true)
        setTimeout(() => {
            setShowModal(false)
        }, 700);
    }
    function handleCancel() {
        setShowModal(false)
    }

    return (
        <>
            <div className='delete-confirmation' style={!confirm ? { display: 'block' } : { display: 'none' }}>
                <div>
                    <i style={{ color: 'red' }} class="fa-regular fa-circle-xmark fa-5x"></i>
                </div>
                <div>
                    <p className='delete-confirmation-q1'>Are you sure?</p>
                </div>
                <div>
                    <p className='delete-confirmation-q2'>Do you really want to delete this Ad?</p>
                </div>
                <div className='delete-confimation-btn' style={{ justifyContent: 'space-around' }}>
                    <button onClick={()=>handleCancel()} className='delete-confimation-btn1'>Cancel</button>
                    <button onClick={()=>handleDelete()} className='delete-confimation-btn2'>Delete</button>
                </div>
            </div>

            <div className="delete-confirmed" style={confirm ? { display: 'block' } : { display: 'none' }}>
                <div>
                    <i style={{ color: 'green' }} class="fa-regular fa-circle-check fa-5x"></i>
                </div>
                <div>
                    <p className='delete-confirmation-q1' style={{ marginTop: '2rem' }}>Deleted</p>
                </div>
            </div>
        </>
    )
}



Modal.setAppElement('#root')
export default function DeleteModal({ showModal, setShowModal }) {

    return (
        <div>
            {/* <button onClick={() => setShowModal(true)}>Trigger Modal</button> */}
            <Modal
                style={{
                    content: {
                        left: '0',
                        right: '0',
                        top: '0',
                        bottom: '0',
                        margin: 'auto',
                        padding: '0',
                        zIndex: '10',
                        borderRadius:'15px',

                        width: 'fit-content',
                        height: 'fit-content'
                    },
                    overlay: {
                        zIndex: '10'
                    }
                }}

                isOpen={(showModal)}
                onRequestClose={() => setShowModal(false)}
                shouldCloseOnOverlayClick={true}
                contentLabel="Minimal Modal Example"
            >
                <DeletePopup1 setShowModal={setShowModal} />
                {/* <button onClick={() => setShowModal(false)}>Close Modal</button> */}
            </Modal>
        </div>
    )
}
