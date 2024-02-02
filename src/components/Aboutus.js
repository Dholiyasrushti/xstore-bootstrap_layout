import { Container, Row, Col } from "react-bootstrap";
import Header from "./header";
import Logo from './Logo';
import Footer from './Footer';
import { FaAngleRight } from "react-icons/fa6";
import './../App.css';
function Aboutus() {
    return (
        <>
            <Header></Header>
            <div className="page about">
                <Container>
                    <div className='text-center py-5'>
                        <div className='title'>
                            <p>HOME<span><FaAngleRight></FaAngleRight></span></p>
                            AboutUs
                        </div>
                    </div>
                    <Row className="justify-content-between">

                        <Col lg={6}>
                            <div className="bg-white text-center py-4 px-5">
                                <div className="h1">Our gallery</div>
                                <div className="text-body-tertiary"><p>Lelit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim minim veniam, quis nostru exercitation ullamco laboris, etsed do eiusmod tempor</p></div>
                                <div className="text-body-tertiary"><p>Lelit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim minim veniam, quis nostru exercitation ullamco aboris, etsed do eiusmodm minim veniam, quis nostru exercitatiom minim veniam, quis nostru exercitatio</p></div>
                            </div>
                        </Col>
                        <Col lg={6}className="text-end">
                            <div className="about_img"><img src={require(`./../image/page5-1.png`)}></img></div>
                        </Col>
                    </Row>
                    <Row className="position-reletive justify-content-start  info2 mb-5">
                    <Col lg={6}className="text-end">
                            <div className="about_img"><img src={require(`./../image/page5-2.png`)}></img></div>
                        </Col>
                    <Col lg={6}>
                            <div className="bg-white text-center py-4 px-5">
                                <div className="h1">Our gallery</div>
                                <div className="text-body-tertiary"><p>Lelit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim minim veniam, quis nostru exercitation ullamco laboris, etsed do eiusmod tempor</p></div>
                                <div className="text-body-tertiary"><p>Lelit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim minim veniam, quis nostru exercitation ullamco aboris, etsed do eiusmodm minim veniam, quis nostru exercitatiom minim veniam, quis nostru exercitatio</p></div>
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
export default Aboutus;