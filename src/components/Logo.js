import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Container } from 'react-bootstrap';
function Logo(){
    const slider2 ={
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
            items:6,
          }

        }
      };
    return(
        <>
           <div className='sec_1 my-5'>
           <Container>
           <OwlCarousel className='owl-theme py-5' loop margin={20} nav {...slider2}>
                <div class='item'>
                    <img src={require(`./../image/logo-1.webp`)}></img>
                </div>
                <div class='item'>
                    <img src={require(`./../image/logo-2.png`)}></img>
                </div>
                <div class='item'>
                    <img src={require(`./../image/logo-3.webp`)}></img>
                </div>
                <div class='item'>
                    <img src={require(`./../image/logo-4.webp`)}></img>
                </div>
                <div class='item'>
                <img src={require(`./../image/logo-5.webp`)}></img>
                </div>
                <div class='item'>
                <img src={require(`./../image/logo-6.webp`)}></img>
                </div>
 
            </OwlCarousel>
            </Container>
           </div>
        </>
    );
}
export default Logo;