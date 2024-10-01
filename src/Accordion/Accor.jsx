// import React from 'react';
import { useState } from 'react';
import data from './data';

const Accor = () => {

    const [selected, setSelected] = useState(null)
    const [enableMultipleSelected, setEnableMultipleSelected] = useState(true)
    const [multiple, setMultiple] = useState([])

    const handleSingleClick = (id) =>{
        // console.log("Button Found")
        console.log(id)
        setSelected(id === selected ? null : id)
    }

    const handleMultiSelected = (id) =>{
        console.log(id)
        let copyOfMultiple = [...multiple]
        const findCurrentIndex = copyOfMultiple.indexOf(id)
        console.log(findCurrentIndex)
    }
    return (
        <div className='flex justify-center'>
            <div className=''>
                <button onClick={()=>setEnableMultipleSelected(enableMultipleSelected)}>Enable Multi Selection</button>
                {data && data.length > 0 ? (
                    data.map(listItem => (
                        <div className='' onClick={()=>handleSingleClick(listItem.id)} key={listItem.id} >
                            <div className='flex'>
                                <h3>{listItem.question}</h3>
                                {
                                    selected === listItem.id ? (<span>-</span>) : (<span>+</span>)
                                }
                                
                            </div>
                            {
                            selected === listItem.id ? (
                                <div className='h-40 w-[500px] bg-red-400 overflow-auto'>
                                    {listItem.answer}
                                    
                                </div>
                            ):null
                        }
                        </div>
                    ))
                ) : (
                    <div>
                        Loading
                    </div>
                )}
            </div>
        </div>
    );
};

export default Accor;
