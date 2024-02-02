import 'bootstrap/dist/css/bootstrap.min.css';
import './../App.css';
import { Link } from 'react-router-dom';

import { Container, Row, Col , Offcanvas ,Button} from 'react-bootstrap';
import { FaSearch, FaRegHeart } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import { useState } from 'react';
import { LuList } from "react-icons/lu";

// import Button from 'react-bootstrap/Button';
// importfrom 'react-bootstrap/Offcanvas';

function Header(){
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return(
        <>
            <header className='py-4'>
            <Container>
                <Row className='justify-content-between'>
                    <Col lg={3} md={4} xs={3} className='order-2 order-lg-1'>
                        <img src={require(`./../image/logo.png`)}></img>
                    </Col>
                    <Col lg={'auto'} md={'auto'} className='d-none d-lg-block order-2'>
                        <Link to="/" className='text-white px-3 fs-6'>HOME </Link>
                        <Link to="/Drawing" className='text-white px-3 fs-6'>DRAWING</Link>
                        <Link to="/Shop" className='text-white px-3 fs-6'>SHOP</Link>
                        <Link to="/Blog" className='text-white px-3 fs-6'>BLOG</Link>
                        <Link to="/Aboutus" className='text-white px-3 fs-6'>ABOUT US</Link>
                        <Link to="/Contact" className='text-white px-3 fs-6'>CONTACT US</Link>
                        </Col>
                      <Col xs={3} className='d-block d-lg-none order-1'>
                             <Button onClick={handleShow}>
                                <div><LuList></LuList></div>
                            </Button>
    
                            <Offcanvas show={show} onHide={handleClose} className='d-block d-lg-none text-white bg-color'>
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title></Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <ul>
                                    <li>
                                        <Link to="/" className='text-white px-3 fs-6'>HOME </Link>
                                    </li>
                                    <li>
                                        <Link to="/Drawing" className='text-white px-3 fs-6'>DRAWING</Link>

                                    </li>
                                    <li>
                                        <Link to="/Shop" className='text-white px-3 fs-6'>Shop</Link>

                                    </li>
                                    <li>
                                        <Link to="/Aboutus" className='text-white px-3 fs-6'>AboutUs</Link>

                                    </li>
                                </ul>
                            </Offcanvas.Body>
                        </Offcanvas>
                      </Col>
                    
                    <Col lg={3} md={4} xs={3} className='d-xl-flex d-xs-flex justify-content-end order-3 d-xl-block  d-lg-none'>
                        <div className='text-white ps-3 fs-4'><FaSearch></FaSearch></div>
                        <div className='text-white ps-3 fs-4'><FaRegHeart></FaRegHeart></div>
                        <div className='text-white ps-3 fs-4'><BsCart3></BsCart3></div>
                    </Col>
                   
                </Row>
            </Container>  
            </header>
        </>
    );

}
export default Header;