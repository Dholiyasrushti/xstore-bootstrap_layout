import { Container, Row,Col,Card } from "react-bootstrap";
import Header from "./header";
import { FaAngleRight } from "react-icons/fa6";
import './../App.css';
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Logo from "./Logo";
function Shop(){
    return(
        <>
            <Header></Header>
            <div className="page">
                <Container>
                    <div className='text-center py-5'>
                        <div className='title'>
                            <p>HOME<span><FaAngleRight></FaAngleRight></span></p>
                            Shop
                        </div>
                    </div>
                    <Row>
                        <Col lg={4} sm={6} className="my-3">
                        <Link>
                            <Card>
                                    <Card.Body>
                                        <Card.Title>SPRING</Card.Title>
                                        <Card.Img variant="top" className='mb-2' src={require(`./../image/page3-1.jpg`)} />
                                        <Card.Text className='text-center text-body-tertiary'>
                                            <div className='text-center'><p className=' price'>$350</p></div>
                                            <div ><p>Lorem ipsum dolor sit amet, consectetur adipiscing...</p></div>
                                            <div className='border-top border-bottom pt-3'><p className='text-start'>Painter:<span className='text-end'>Sandro Botti</span></p></div>
                                            <div className='pt-3'><p className='text-start'>Size:<span className='text-end'>2cmx70cmx50cm</span></p></div>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                       </Link>
                        </Col>
                        <Col lg={4} sm={6} className="my-3">
                        <Link>
                            <Card>
                                    <Card.Body>
                                        <Card.Title>SPRING</Card.Title>
                                        <Card.Img variant="top" className='mb-2' src={require(`./../image/page3-2.jpg`)} />
                                        <Card.Text className='text-center text-body-tertiary'>
                                            <div className='text-center'><p className=' price'>$450</p></div>
                                            <div ><p>Lorem ipsum dolor sit amet, consectetur adipiscing...</p></div>
                                            <div className='border-top border-bottom pt-3'><p className='text-start'>Painter:<span className='text-end'>Jamie Lloyd</span></p></div>
                                            <div className='pt-3'><p className='text-start'>Size:<span className='text-end'>2cmx70cmx50cm</span></p></div>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                       </Link>
                        </Col>
                        <Col lg={4} sm={6} className="my-3">
                        <Link>
                            <Card>
                                    <Card.Body>
                                        <Card.Title>FLOWERS</Card.Title>
                                        <Card.Img variant="top" className='mb-2' src={require(`./../image/page3-3.webp`)} />
                                        <Card.Text className='text-center text-body-tertiary'>
                                            <div className='text-center'><p className=' price'>$700</p></div>
                                            <div ><p>Lorem ipsum dolor sit amet, consectetur adipiscing...</p></div>
                                            <div className='border-top border-bottom pt-3'><p className='text-start'>Painter:<span className='text-end'>Jamie Lloyd</span></p></div>
                                            <div className='pt-3'><p className='text-start'>Size:<span className='text-end'>2cmx70cmx50cm</span></p></div>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                       </Link>
                        </Col>
                        <Col lg={4} sm={6} className="my-3">
                        <Link>
                            <Card>
                                    <Card.Body>
                                        <Card.Title>FLOWERS 6</Card.Title>
                                        <Card.Img variant="top" className='mb-2' src={require(`./../image/page3-4.jpg`)} />
                                        <Card.Text className='text-center text-body-tertiary'>
                                            <div className='text-center'><p className=' price'>$650</p></div>
                                            <div ><p>Lorem ipsum dolor sit amet, consectetur adipiscing...</p></div>
                                            <div className='border-top border-bottom pt-3'><p className='text-start'>Painter:<span className='text-end'>Jamie Lloyd</span></p></div>
                                            <div className='pt-3'><p className='text-start'>Size:<span className='text-end'>2cmx70cmx50cm</span></p></div>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                       </Link>
                        </Col>
                        <Col lg={4} sm={6} className="my-3">
                        <Link>
                            <Card>
                                    <Card.Body>
                                        <Card.Title>FLOWERS 5</Card.Title>
                                        <Card.Img variant="top" className='mb-2' src={require(`./../image/page3-5.jpg`)} />
                                        <Card.Text className='text-center text-body-tertiary'>
                                            <div className='text-center'><p className=' price'>$350</p></div>
                                            <div ><p>Lorem ipsum dolor sit amet, consectetur adipiscing...</p></div>
                                            <div className='border-top border-bottom pt-3'><p className='text-start'>Painter:<span className='text-end'>Laurence Rodri</span></p></div>
                                            <div className='pt-3'><p className='text-start'>Size:<span className='text-end'>2cmx70cmx50cm</span></p></div>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                       </Link>
                        </Col>
                        <Col lg={4} sm={6} className="my-3">
                        <Link>
                            <Card>
                                    <Card.Body>
                                        <Card.Title>NOISE OF THE SOUL</Card.Title>
                                        <Card.Img variant="top" className='mb-2' src={require(`./../image/page3-6.jpg`)} />
                                        <Card.Text className='text-center text-body-tertiary'>
                                            <div className='text-center'><p className=' price'>$800</p></div>
                                            <div ><p>Lorem ipsum dolor sit amet, consectetur adipiscing...</p></div>
                                            <div className='border-top border-bottom pt-3'><p className='text-start'>Painter:<span className='text-end'>Laurence Rodri</span></p></div>
                                            <div className='pt-3'><p className='text-start'>Size:<span className='text-end'>2cmx70cmx50cm</span></p></div>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                       </Link>
                        </Col>
                        <Col lg={4} sm={6} className="my-3">
                        <Link>
                            <Card>
                                    <Card.Body>
                                        <Card.Title>CHARMING  STREET</Card.Title>
                                        <Card.Img variant="top" className='mb-2' src={require(`./../image/page3-7.jpg`)} />
                                        <Card.Text className='text-center text-body-tertiary'>
                                            <div className='text-center'><p className=' price'>$950</p></div>
                                            <div ><p>Lorem ipsum dolor sit amet, consectetur adipiscing...</p></div>
                                            <div className='border-top border-bottom pt-3'><p className='text-start'>Painter:<span className='text-end'>Kim Gonz</span></p></div>
                                            <div className='pt-3'><p className='text-start'>Size:<span className='text-end'>2cmx70cmx50cm</span></p></div>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                       </Link>
                        </Col>
                        <Col lg={4} sm={6} className="my-3">
                        <Link>
                            <Card>
                                    <Card.Body>
                                        <Card.Title>FOREST</Card.Title>
                                        <Card.Img variant="top" className='mb-2' src={require(`./../image/page4-8.jpg`)} />
                                        <Card.Text className='text-center text-body-tertiary'>
                                            <div className='text-center '><p className=' price'>$250</p></div>
                                            <div ><p>Lorem ipsum dolor sit amet, consectetur adipiscing...</p></div>
                                            <div className='border-top border-bottom pt-3'><p className='text-start'>Painter:<span className='text-end'>Sandro Botti</span></p></div>
                                            <div className='pt-3'><p className='text-start'>Size:<span className='text-end'>2cmx70cmx50cm</span></p></div>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                       </Link>
                        </Col>
                        <Col lg={4} sm={6} className="my-3">
                        <Link>
                            <Card>
                                    <Card.Body>
                                        <Card.Title>COZY CORNER</Card.Title>
                                        <Card.Img variant="top" className='mb-2' src={require(`./../image/page3-9.jpg`)} />
                                        <Card.Text className='text-center text-body-tertiary'>
                                            <div className='text-center'><p className=' price'>$550</p></div>
                                            <div ><p>Lorem ipsum dolor sit amet, consectetur adipiscing...</p></div>
                                            <div className='border-top border-bottom pt-3'><p className='text-start'>Painter:<span className='text-end'>Sandro Botti</span></p></div>
                                            <div className='pt-3'><p className='text-start'>Size:<span className='text-end'>2cmx70cmx50cm</span></p></div>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                       </Link>
                        </Col>
                  
                    </Row>
                </Container>
            </div>
            <Logo></Logo>
            <Footer></Footer>
        </>
    );
}
export default Shop;