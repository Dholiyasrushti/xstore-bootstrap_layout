import { Container,Row,Col,Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function Ourshop(){
    return(
        <>
            <div className="sec_3">
                <Container>
                    <div className='text-center mt-5'>
                        <div className='title'>Our Shop</div>
                    </div>
                    <Row className="my-4">
                        <Col lg={4} sm={6} className="my-3">
                       <Link>
                            <Card>
                                    <Card.Body>
                                        <Card.Title>CHARMING  STREET</Card.Title>
                                        <Card.Img variant="top" className='mb-2' src={require(`./../image/sec2-7.jpg`)} />
                                        <Card.Text className='text-center'>
                                            <div className='text-center'><p className=' price'>$350</p></div>
                                            <div ><p>Malesuada nunc vel risus commodo viverra accumsan.......</p></div>
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
                                    <Card.Title>VIEw</Card.Title>
                                    <Card.Img variant="top" className='mb-2' src={require(`./../image/sec2-2.jpg`)} />
                                    <Card.Text className='text-center'>
                                        <div className='text-center'><p className=' price'>$500</p></div>
                                        <div ><p>Malesuada nunc vel risus commodo viverra accumsan.......</p></div>
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
                                <Card.Img variant="top" className='mb-2' src={require(`./../image/sec2-1.jpg`)} />
                                <Card.Text className='text-center'>
                                    <div className='text-center'><p className=' price'>$600</p></div>
                                    <div ><p>Malesuada nunc vel risus commodo viverra accumsan.......</p></div>
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
                                <Card.Title>BEAUTIFULSEA</Card.Title>
                                <Card.Img variant="top" className='mb-2' src={require(`./../image/sec2-4.jpg`)} />
                                <Card.Text className='text-center'>
                                    <div className='text-center'><p className=' price '>$750</p></div>
                                    <div ><p>Malesuada nunc vel risus commodo viverra accumsan.......</p></div>
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
                                <Card.Img variant="top" className='mb-2' src={require(`./../image/sec2-5.jpg`)} />
                                <Card.Text className='text-center'>
                                    <div className='text-center'><p className=' price'>$500</p></div>
                                    <div ><p>Malesuada nunc vel risus commodo viverra accumsan.......</p></div>
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
                                <Card.Title>FLOWERS3</Card.Title>
                                <Card.Img variant="top" className='mb-2' src={require(`./../image/sec2-6.jpg`)} />
                                <Card.Text className='text-center'>
                                    <div className='text-center'><p className=' price'>$450</p></div>
                                    <div ><p>Malesuada nunc vel risus commodo viverra accumsan.......</p></div>
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
        </>
    );

}
export default Ourshop;