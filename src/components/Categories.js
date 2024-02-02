import 'bootstrap/dist/css/bootstrap.min.css';
import './../App.css';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
function Categories(){
    return(
        <>
            <div className='sec-1 py-5'>
                <Container >
                    <div className='text-center'>
                        <div className='title'>Categories</div>
                    </div>
                    <Row className='mx-auto'>
                        <Col lg={4} md={6} className='justify-centent-center'>
                            <div className='justify-content-center'>
                                <img src={require(`./../image/sec1-1.jpg`)} className='w-md-50 w-lg-100 text-center cate_img'></img>
                                <div className='bg-white text-center p-3 my-2 p-xs-0  m-xs-0'><span className='px-5 py-2'><Link to='/' className='text-black'>IMPRESSIONISM</Link></span></div>
                            </div>
                        </Col>
                        <Col lg={4} md={6} >
                            <div>
                                <img src={require(`./../image/sec1-2.jpg`)} className='w-lg-100 w-md-50 cate_img'></img>
                                <div className='bg-white text-center p-3 my-2 p-xs-0  m-xs-0'><span className='px-5 py-2'><Link to='/' className='text-black'>PASTEL</Link></span></div>
                            </div>
                        </Col>
                        <Col lg={4} md={6}>
                            <div>
                                <img src={require(`./../image/sec1-3.jpg`)} className='w-lg-100 w-md-50 cate_img'></img>
                                <div className='bg-white text-center p-3 my-2 p-xs-0  m-xs-0'><span className='px-5 py-2'><Link to='/' className='text-black'>WATERCOLOR</Link></span></div>
                            </div>
                        </Col>
                    </Row>
                    <Row className='m-auto'>
                        <Col lg={4} md={6}>
                            <div>
                                <img src={require(`./../image/sec1-4.jpg`)} className='w-lg-100 w-md-50 cate_img'></img>
                                <div className='bg-white text-center p-3 my-2 p-xs-0  m-xs-0'><span className='px-5 py-2'><Link to='/' className='text-black'></Link></span></div>
                            </div>
                        </Col>
                        <Col lg={4} md={6}>
                            <div>
                                <img src={require(`./../image/sec1-5.jpg`)} className='w-lg-100 w-md-50 cate_img'></img>
                                <div className='bg-white text-center p-3 my-2 p-xs-0  m-xs-0'><span className='px-5 py-2'><Link to='/' className='text-black'>PASTEL</Link></span></div>
                            </div>
                        </Col>
                        <Col lg={4} md={6}>
                            <div>
                                <img src={require(`./../image/sec1-6.jpg`)} className='w-lg-100 w-md accordion-50 cate_img'></img>
                                <div className='bg-white text-center p-3 my-2 p-xs-0  m-xs-0'><span className='px-5 py-2'><Link to='/' className='text-black'>WATERCOLOR</Link></span></div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
          
        </>
    );
}
export default Categories;