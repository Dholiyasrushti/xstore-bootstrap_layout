import Header from './header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import Slider from './Slider';
import Categories from './Categories';
import Populer from './Populer';
import Ourshop from './Ourshop';
import Blog from './Blog';
import Logo from './Logo';
import Footer from './Footer';
function Home() {
    return (
        <>
            <Header></Header> 
            <Slider></Slider>
            <Categories></Categories>
            <Populer></Populer>
            <Ourshop></Ourshop>
            <Blog></Blog>
            <Logo></Logo>
            <Footer></Footer>
        </>
    );
}
export default Home;