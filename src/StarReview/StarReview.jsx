// import React from 'react';
import { useState } from "react";
import { CiStar } from "react-icons/ci";

const StarReview = () => {
    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)

    const handleClick =(getCurrentID) =>{

    }

    const handleOnMouseEnter = (getCurrentID) =>{

    }

    const handleOnMouseLeave = (getCurrentID) =>[

    ]
    const stars = Array.from({ length: 10 });
    return (
        <div className="min-h-screen w-full flex items-center justify-center">
            {
                stars.map((_, index) => (
                        // index = index +1;
                        <CiStar key={index} className="h-[40px] w-[40px]" onClick={handleClick(index+1)} onMouseMove={handleOnMouseEnter(index+1)} onMouseLeave={handleOnMouseLeave(index+1)}/>
                  
                    
                ))
            }
            
        </div>
    );
};

export default StarReview;