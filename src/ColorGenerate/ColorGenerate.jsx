// import React from 'react';

import { useEffect, useState } from "react";

const ColorGenerate = () => {
    const [typeOfColor, setTypeOfColor] = useState('hex')
    const [color, setColor] = useState('#000000')

    useEffect(() => {
        if (typeOfColor === 'hex') {
            handleCreateHEXColor()
        } else {
            handleCreateRGBColor()
        }
    }, typeOfColor)

    const randomColorUtility = (length) => {
        // console.log(Math.floor(Math.random()*length))
        return Math.floor(Math.random() * length)
    }

    const handleCreateHEXColor = () => {
        // console.log("Yes")
        const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']
        let hexCode = '#'

        for (let i = 0; i < 6; i++) {
            hexCode = hexCode + hex[randomColorUtility(hex.length)]
        }
        setColor(hexCode)
        // console.log(hexCode)
    }

    const handleCreateRGBColor = () => {
        let red = randomColorUtility(256);
        let green = randomColorUtility(256);
        let blue = randomColorUtility(256);
        // console.log(`rgb(${red}, ${green}, ${blue})`)
        let rgb = `rgb(${red}, ${green}, ${blue})`;
        setColor(rgb)
    }

    return (
        <div className="min-h-screen w-full flex flex-col items-center justify-center" style={{ background: color }}>
            <div className="">
                <button className="h-auto w-auto bg-purple-500 p-3 rounded-2xl m-4 hover:text-white" onClick={() => setTypeOfColor('hex')}>
                    Generate HEX Color
                </button>
                <button className="h-auto w-auto bg-green-500 p-3 rounded-2xl m-4 hover:text-white" onClick={() => setTypeOfColor('rgb')}>
                    Generate RGB Color
                </button>
                <button className="h-auto w-auto bg-orange-500 p-3 rounded-2xl m-4 hover:text-white" onClick={typeOfColor === 'hex' ? handleCreateHEXColor : handleCreateRGBColor}>
                    Generate Random Color
                </button>
            </div>
            <div>
                {/* <h1 className="text-9xl text-white">{typeOfColor === 'hex' ? "HEX" : "RGB"}</h1> */}
                <h1 className="text-5xl text-white">{typeOfColor === 'hex' ? "HEX" : "RGB"}: {color}</h1>
            </div>
        </div>

    );
};

export default ColorGenerate;