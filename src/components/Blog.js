import './../App.css';
import { Container, Card ,Button} from "react-bootstrap";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Link } from 'react-router-dom';

function Blog(){
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
            <div className="sec_4 py-5">
                 <div className='text-center'>
                        <div className='title'>Our Blog</div>
                    </div>
                <Container>
                <OwlCarousel className='owl-theme py-2 ' loop  {...slider1} >
                        <div class='item'>
                        <Link>
                        <Card>
                            <Card.Body>
                                <Card.Img variant="top" className='mb-2' src={require(`./../image/sec4_1.jpg`)} />
                                <Card.Title>Insects Pencil Drawings</Card.Title>
                                <Card.Text className='text-center fs-6 text-body-secondary'>
                                    <div className='text-center'><p className=' price'>Posted By Rose Tyler </p></div>
                                    <div ><p>Diam maecenas ultricies mi eget mauris pharetra et ultrices neque ornare aenean euismod elementum nisi... </p></div>
                                    <Button variant="light" className='text-primary-emphasis mb-4'>Continue reading</Button>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        </Link>
                        </div>
                        <div class='item'>
                           <Link>
                           <Card >
                            <Card.Body>
                                <Card.Img variant="top" className='mb-2' src={require(`./../image/sec4_2.jpg`)} />
                                <Card.Title>Technical Pens Review</Card.Title>
                                <Card.Text className='text-center fs-6 text-body-secondary'>
                                    <div className='text-center'><p className=' price'>Posted By Rose Tyler </p></div>
                                    <div ><p>Vulputate ut pharetra sit amet aliquam id diam maecenas ultricies mi eget mauris pharetra et...  </p></div>
                                    <Button variant="light" className='text-primary-emphasis mb-4'>Continue reading</Button>
                                </Card.Text>
                            </Card.Body>
                            </Card>
                           </Link>
                        </div>
                        <div class='item'>
                        <Link>
                        <Card>
                        <Card.Body>
                                <Card.Img variant="top" className='mb-2' src={require(`./../image/sec4_3.jpg`)} />
                                <Card.Title>Pencial Drawing Supply review</Card.Title>
                                <Card.Text className='text-cente fs-6 text-body-secondaryr'>
                                    <div className='text-center'><p className=' price'>Posted By Rose Tyler </p></div>
                                    <div ><p> Ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in... </p></div>
                                    <Button variant="light" className='text-primary-emphasis mb-4'>Continue reading</Button>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        </Link>

                        </div>
                        <div class='item'>
                        <Link>
                        <Card>
                        <Card.Body>
                                <Card.Img variant="top" className='mb-2' src={require(`./../image/sec4_4.jpg`)} />
                                <Card.Title>How To Create....</Card.Title>
                                <Card.Text className='text-center fs-6 text-body-secondary'>
                                    <div className='text-center'><p className=' price'>Posted By Rose Tyler </p></div>
                                    <div ><p>Neque volutpat ac tincidunt vitae semper quis lectus nulla at volutpat diam ut venenatis tellus...  </p></div>
                                    <Button variant="light" className='text-primary-emphasis mb-5'>Continue reading</Button>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        </Link>
                        </div>
                        <div class='item'>
                        <Link>
                        <Card>
                        <Card.Body>
                                <Card.Img variant="top" className='mb-2' src={require(`./../image/sec4_5.webp`)} />
                                <Card.Title>Oli Painting Supplies</Card.Title>
                                <Card.Text className='text-center fs-6 text-body-secondary'>
                                    <div className='text-center'><p className=' price'>Posted By Rose Tyler </p></div>
                                    <div ><p>Aliquam etiam erat velit scelerisque in dictum non consectetur a erat nam at lectus urna...  </p></div>
                                    <Button variant="light" className='text-primary-emphasis mb-5'>Continue reading</Button>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        </Link>
                        </div>
                        <div class='item'>
                        <Link>
                        <Card>
                        <Card.Body>
                                <Card.Img variant="top" className='mb-2' src={require(`./../image/sec4_6.jpg`)} />
                                <Card.Title>Insects Pencil Drawings</Card.Title>
                                <Card.Text className='text-center fs-6 text-body-secondary'>
                                    <div className='text-center'><p className=' price'>Posted By Rose Tyler </p></div>
                                    <div ><p>Ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim sit amet venenatis urna...  </p></div>
                                    <Button variant="light" className='text-primary-emphasis mb-4'>Continue reading</Button>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        </Link>
                        </div>
               
                    </OwlCarousel>
                </Container>
            </div>
        </>
    );
}
export default Blog;