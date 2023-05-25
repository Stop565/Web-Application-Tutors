import React from 'react';

import './css/footer.css'
import { Form, ModalFooter } from 'react-bootstrap';


const FooterComponent = () => {
    return (
        <ModalFooter className="footer ">
            <Form className="footerDiv">
                <h4>2023</h4>
            </Form>

        </ModalFooter>
    )
}

export default FooterComponent;