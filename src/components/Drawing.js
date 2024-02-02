import { Container,Row,Col } from 'react-bootstrap';
import Header from './header';
import Logo from './Logo';
import Footer from './Footer';
function Drawing(){
    return(
        <>
            <Header></Header>
            <div className='page'>
                <Container>
                    <div className='text-center py-5'>
                        <div className='title'>
                            <p>HOME</p>
                            Process Of Drawing
                        </div>
                    </div>
                    <Row className='align-items-center justify-content-center text-center'>
                        <Col md={3} className='position-relative'>
                            <div>
                                <img src={require(`./../image/page2-3.webp`)} >
                                </img>
                                <p className='position-absolute page2_text text-center fs-2'>Color Section</p>
                            </div>
                        </Col>
                        <Col md={9}>
                            <div className='bg-white py-3 px-4'>
                                <p className='text-body-tertiary'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                </p>
                            </div>
                        </Col>
                    </Row>
                    <Row className='align-items-center justify-content-center text-center'>
                        <Col md={4}>
                             <div className='bg-white py-3 px-4'>
                                <p className='text-body-tertiary'>
                                Lorem ipsum dolor sit amet, consectet
                                </p>
                            </div>
                        </Col>
                        <Col md={4} className='position-relative'>
                            <div>
                                <img src={require(`./../image/page2-2.webp`)} >
                                </img>
                                <p className='position-absolute page2_text text-center fs-2'>Choice of canvas</p>
                            </div>
                        </Col>
                        <Col md={4}>
                             <div className='bg-white py-3 px-4'>
                                <p className='text-body-tertiary'>
                                Adipisicing elit, sed do eiusmod tempor incididunt ut laboret dolore
                                </p>
                            </div>
                        </Col>
                    </Row>
                    <Row className='align-items-center justify-content-center text-center'>
                        <Col md={9}>
                            <div className='bg-white py-3 px-4'>
                                <p className='text-body-tertiary'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                </p>
                            </div>
                        </Col>
                        <Col md={3} className='position-relative'>
                            <div>
                                <img src={require(`./../image/page2-1.webp`)} >
                                </img>
                                <p className='position-absolute page2_text text-center fs-2'>Covering up</p>
                            </div>
                        </Col>
                    </Row>
                    <Row className='align-items-center justify-content-center text-center'>
                        <Col md={4}>
                             <div className='bg-white py-3 px-4'>
                                <p className='text-body-tertiary'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit seddo
                                </p>
                            </div>
                        </Col>
                        <Col md={4} className='position-relative'>
                            <div>
                                <img src={require(`./../image/page2-4.webp`)} >
                                </img>
                                <p className='position-absolute page2_text text-center fs-2'>Selection of frame</p>
                            </div>
                        </Col>
                        <Col md={4}>
                             <div className='bg-white py-3 px-4'>
                                <p className='text-body-tertiary'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                </p>
                            </div>
                        </Col>
                    </Row>
                    <Row className='align-items-center justify-content-center text-center'>
                        <Col md={3} className='position-relative'>
                            <div>
                                <img src={require(`./../image/page2-5.webp`)} >
                                </img>
                                <p className='position-absolute page2_text text-center fs-2'>Exhibition</p>
                            </div>
                        </Col>
                        <Col md={9}>
                            <div className='bg-white py-3 px-4'>
                                <p className='text-body-tertiary'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Logo></Logo>
            <Footer></Footer>
        </>
    );
}
export default Drawing;