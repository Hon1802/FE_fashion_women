import React, { useState, useEffect } from 'react';
import { slider1, slider2 } from "../../assets/home";
const Banner = () => {
    const [slideIndex, setSlideIndex] = useState(1);
    React.useEffect(() => {

        const intervalId = setInterval(() => {
            plusDivs(1);
          }, 3000);

        showDivs(slideIndex);
        
        return () => {
        clearInterval(intervalId);
        };
    }, [slideIndex]);

    const plusDivs = (n)=>{
        // setSlideIndex(slideIndex + n);
        const slides = document.getElementsByClassName("mySlides");
        let newIndex = slideIndex + n;
        if (newIndex > slides.length) {
            setSlideIndex(1);
        } else if (newIndex < 1) {
            setSlideIndex(slides.length);
        } else {
            setSlideIndex(newIndex);
        }
    }
    const showDivsBtn = (n)=>{
        // setSlideIndex(slideIndex + n);
        setSlideIndex(n);
    }


    const showDivs = (n)=>{
        const slides = document.getElementsByClassName("mySlides");

        const dots = document.getElementsByClassName("dot");
        if (n > slides.length) {
            setSlideIndex(1);
        } if (n < 1) {
            setSlideIndex(slides.length - 1);
        } 
        for (let i = 0; i < slides.length; i++) {
           slides[i].style.display = "none";
        }

        for (let i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
          }


        // slides[slideIndex - 1].style.display = "block";
        const currentSlide = slides[slideIndex - 1];
        if (currentSlide) {
            currentSlide.style.display = "block";
            dots[slideIndex-1].className += " active";
        }
    }

    return (
        <div className="home-banner-wrapper">
            <img alt='slider' className="mySlides" src={slider1} ></img>
            <img alt='slider' className="mySlides" src={slider2} ></img>
            <button className='btn-prev' onClick={() => plusDivs(-1)}>&#10094;</button>
            <button className='btn-next' onClick={() => plusDivs(1)}>&#10095;</button>
            <div class="dot_slide" >
                    <div >
                        <span class="dot" onClick={() => showDivsBtn(1)}></span>
                    </div>
                    <div >
                        <span class="dot" onClick={() => showDivsBtn(2)}></span>
                    </div>
            </div>
        </div>
    );
}
export default Banner;