// import React, { useState } from 'react'
// import Modal from 'react-modal'
// import Signup from '../signup_page/signup'


// Modal.setAppElement('#root')
// export default function DeleteModal({ showModal , setShowModal}) {

//     return (
//         <div>
//             {/* <button onClick={() => setShowModal(true)}>Trigger Modal</button> */}
//             <Modal
//                 style={{
//                     content: {
//                         left: '0',
//                         right: '0',
//                         top: '0',
//                         bottom: '0',
//                         margin: 'auto',
//                         padding: '0',
//                         zIndex: '10',

//                         width: 'fit-content',
//                         height: 'fit-content'
//                     },
//                     overlay:{
//                         zIndex:'10'
//                     }
//                 }}

//                 isOpen={(showModal)}
//                 onRequestClose={() => setShowModal(false)}
//                 shouldCloseOnOverlayClick={true}
//                 contentLabel="Minimal Modal Example"
//             >
//                 <Signup style={{ margin: '0' }} />
//                 {/* <button onClick={() => setShowModal(false)}>Close Modal</button> */}
//             </Modal>
//         </div>
//     )
// }
