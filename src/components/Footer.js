import 'bootstrap/dist/css/bootstrap.min.css';
import './../App.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaFacebookF } from "react-icons/fa";
function Footer(){
    return(
        <>
           <footer className='py-3'>
           <Container>
                <Row className='justify-content-between my-3'>
                    <Col lg={3} className='text-center py-4'>
                        <img src={require(`./../image/logo.png`)}></img>
                    </Col>
                    <Col lg={'auto'} className='mt-xs-4 text-center'>
                        <Link to="/Home" className='text-white px-3 py-xs-2 fs-6'>HOME </Link>
                        <Link to="/Drawing" className='text-white px-3 py-xs-2 fs-6'>DRAWING</Link>
                        <Link to="/Shop" className='text-white px-3 py-xs-2 fs-6'>SHOP</Link>
                        <Link to="/Blog" className='text-white px-3  py-xs-2 fs-6'>BLOG</Link>
                        <Link to="/AboutUs" className='text-white px-3 py-xs-2 fs-6'>ABOUT </Link>
                        <Link to="/Contact" className='text-white px-3 py-xs-2 fs-6'>CONTACT US</Link>

                    </Col>
                    <Col lg={3} className='d-flex justify-content-end'>
                        <div className='text-white ps-3 fs-4'></div>
                        <div className='text-white ps-3 fs-4'></div>
                        <div className='text-white ps-3 fs-4'></div>
                    </Col>
                </Row>
            </Container>  
            <div className='border-top border-secondary text-white text-center'>
                    <p className='mt-2'>Copyright © 2023 XStore theme. Created by 8theme - WordPress WooCommerce themes.</p>
            </div>
           </footer>
        </>
    );
}
export default Footer;