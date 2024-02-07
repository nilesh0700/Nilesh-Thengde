import { GitHub, Instagram, LinkedIn, X } from "@mui/icons-material";
import "../Style/Home.css";
import { ReactTyped } from "react-typed";
// import { Helmet } from "react-helmet";
// import { useState, useEffect } from "react";

// const fadeIntervalMs = 1750;
// const wordChangeIntervalMs = fadeIntervalMs * 2;

// const wordsToAnimate = ["Web Developer", "Frontend Developer", "Research Analytics"];

// const FadeProp = {fade: 'fade-in' | 'fade-out'};
export default function Home(){
    // const [fadeProp, setFadeProp] = useState({ fade: 'fade-in' });
    // const [wordOrder, setWordOrder] = useState(0)

    // useEffect(() => {
    //     const fadeTimeout = setInterval(() => {
    //       fadeProp.fade === 'fade-in' ? setFadeProp({ fade: 'fade-out' }) : setFadeProp({ fade: 'fade-in' })
    //     }, fadeIntervalMs)
    
    //     return () => clearInterval(fadeTimeout)
    //   }, [fadeProp])
    
    //   useEffect(() => {
    //     const wordTimeout = setInterval(() => {
    //       setWordOrder((prevWordOrder) => (prevWordOrder + 1) % wordsToAnimate.length)
    //     }, wordChangeIntervalMs)
    
    //     return () => clearInterval(wordTimeout)
    //   }, [])
    
    return(
    <>    
    <section className="home">
        <div className="home-content">
            <h1>Hi! I'm Nilesh Thengde</h1>
            <div className="change-text">
                <h3>And I'm a {" "}</h3>
                <h3>
                    <ReactTyped 
                        strings = {["Web Developer", "Frontend Developer", "Research Analytics"]}
                        typeSpeed={100}
                        loop
                        backSpeed={20}
                        cursorChar="/"
                        showCursor={true}
                    />
                        
                    {/* <span id="changing-word" className={fadeProp.fade}>{wordsToAnimate[wordOrder]}</span> */}
                    
                </h3>   
            </div> 
                    
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis tempore velit consectetur doloremque est voluptas optio culpa, ducimus eos dolores.</p>

            <div className="info-box">
                <div className="email-info">
                    <h5>Email:</h5>
                    <span>nileshthengde@gmail.com</span>
                </div>
                <div className="contact-info">
                    <h5>Contact:</h5>
                    <span>+91 9764623344</span>
                </div>
                <div className="btn-box">
                    <a href="#" className="btn">Resume</a>
                    <a href="#" className="btn">Hire Me!</a>
                </div>

                <div className="social-icons">
                    <a href="#"><i><Instagram/></i></a>
                    <a href="#"><i><LinkedIn/></i></a>
                    <a href="#"><i><GitHub/></i></a>
                    <a href="#"><i><X/></i></a>
                </div>
            </div>
        </div>

            <div className="home-image">
                <div className="img-box">
                    <img className="home-img" src="../src/assets/mor-image.png" alt="" />    
                    
                    
                </div>    
            </div>    
            
        
    </section>
   
    </>
    )
}