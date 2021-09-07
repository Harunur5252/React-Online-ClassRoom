import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Menu from '../components/Menu/Menu'

export default class MessagesPage extends Component {
    render() {
        return (
            <Fragment>
                <title>Messages</title>
                <Menu>
                    <Container className='mt-5'>
                        <Row>
                            <Col lg={10} md={6} sm={12}>
                                 <ul typeof='circle'>
                                     <li>
                                         <p className='text-justify'>
                                              আপডেট পেতে , প্রশ্ন কিংবা আলোচনার জন্যে ফেছবুক গ্রুপে জয়েন করুন। আপনি যে কোনো বিষয়ে প্রশ্ন করতে পারেন। তবে প্রতি সপ্তাহের শুক্র-শনিবার সারাদিন আমাকে ONLINE এ পাবেন। এছাড়া সপ্তাহের বাকি দিনে রাত ১০টার পরে ONLINE এ পাবেন।
                                         </p>
                                     </li>
                                 </ul>
                            </Col>
                        </Row>
                    </Container>
                </Menu>
            </Fragment>
        )
    }
}
