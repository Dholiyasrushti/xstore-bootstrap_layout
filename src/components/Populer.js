import 'bootstrap/dist/css/bootstrap.min.css';
import './../App.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css'
import { Container, Row, Col, Button,Card  } from 'react-bootstrap';
function Populer(){
    const slider1 ={
        dotsEach:true,
        responsive:{
          0:{
            items:1,
          },
          400:{
            items:1,
          },
          800:{
            items:2,
          },
          1000:{
            items:3,
          }

        }
      };
    return(
      
        <>
            <div className='sec_2 pb-5 pt-5'>
                    <div className='text-center'>
                        <div className='title'>Popular items</div>
                    </div>
                <Container>
                <OwlCarousel className='owl-theme ' loop  {...slider1} >
                        <div class='item'>
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
                        </div>
                        <div class='item'>
                            <Card >
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
                        </div>
                        <div class='item'>
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

                        </div>
                        <div class='item'>
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
                        </div>
                        <div class='item'>
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
                        </div>
                        <div class='item'>
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
                        </div>
               
                    </OwlCarousel>
                </Container>
            </div>
        </>
    );

}
export default Populer;