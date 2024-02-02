import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './../App.css';
function Slider(){
    const slider ={
        responsive:{
          0:{
            item:1,
          },
          400:{
            item:1,
          },
          600:{
            item:1,
          },
          1000:{
            item:1,
          }
        }
      }
    return(
    <>
        <OwlCarousel className='owl-theme' loop margin={10} items={1} dots={false}{...slider}>
            <div class='item '>
               <div className='single_item text-center position-relative'>
                    <img src={require(`./../image/home-slide-1.jpg`)} ></img>
                    <div className='slider_text position-absolute text-white right- text-center'>
                       <div className='fs-1 '><p>Passion  of the Emptiness</p></div>
                       <div><p>Eye Catching at consectetur metus dolor ac lacinia ultrices class dis consequat mi felis malesuada fames maecenas enim scelerisque sollicitudin</p></div> 
                    </div>
                </div>
            </div>
            <div class='item'>
            <div className='single_item text-center position-relative'>
                    <img src={require(`./../image/home-slide-1.jpg`)} ></img>
                    <div className='slider_text position-absolute text-white right- text-center'>
                       <div className='fs-1 '><p>Passion  of the Emptiness</p></div>
                       <div><p>Eye Catching at consectetur metus dolor ac lacinia ultrices class dis consequat mi felis malesuada fames maecenas enim scelerisque sollicitudin</p></div> 
                    </div>
                </div>
            </div>
            <div class='item'>
            <div className='single_item text-center position-relative'>
                    <img src={require(`./../image/home-slide-1.jpg`)} ></img>
                    <div className='slider_text position-absolute text-white right- text-center'>
                       <div className='fs-1 '><p>Passion  of the Emptiness</p></div>
                       <div><p>Eye Catching at consectetur metus dolor ac lacinia ultrices class dis consequat mi felis malesuada fames maecenas enim scelerisque sollicitudin</p></div> 
                    </div>
                </div>
            </div>
        
        </OwlCarousel>
        </>
    );
}
export default Slider;