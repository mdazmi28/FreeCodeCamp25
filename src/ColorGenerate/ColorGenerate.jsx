// import React from 'react';

import { useState } from "react";

const ColorGenerate = () => {
    const [typeOfColor, setTypeOfColor] = useState('hex')
    const [color, setColor] = useState('#000000')

    const handleCreateHEXColor = () =>{
        const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
        let hexCode = '#'

        for (let i = 0 ; i < 6 ; i++){
            
        }
    }

    const handleCreateRGBColor = () =>{

    }

    return (
        <>
            <div className="h-screen flex items-center justify-center" style={{
                background: color
            }}>
                <button className="h-auto w-auto bg-purple-500 p-3 rounded-2xl m-4 hover:text-white" onClick={()=>setTypeOfColor('hex')}>Generate HEX Color</button>
                <button className="h-auto w-auto bg-green-500 p-3 rounded-2xl m-4 hover:text-white" onClick={()=>setTypeOfColor('rgb')}>Generate RGB Color</button>
                <button className="h-auto w-auto bg-orange-500 p-3 rounded-2xl m-4 hover:text-white" onClick={typeOfColor === 'hex' ? handleCreateHEXColor : handleCreateRGBColor}>Generate Random Color</button>
            </div>
            

        </>
    );
};

export default ColorGenerate;