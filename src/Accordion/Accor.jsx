// import React from 'react';
import { useState } from 'react';
import data from './data';

const Accor = () => {

    const [selected, setSelected] = useState(null)
    const [enableMultiSelection, setEnableMultiSelection] = useState(false)
    const [multiple, setMultiple] = useState([])


    const handleSingleClick = (id) => {
        setSelected(id === selected ? null : id)
    }

    const handleMultiSelection = (id) => {
        // console.log(id)
        let copyOfMultiple = [...multiple]
        const findCurrentIndex = copyOfMultiple.indexOf(id)
        // console.log(findCurrentIndex) 
        if (findCurrentIndex === -1) {
            copyOfMultiple.push(id)
        } else {
            copyOfMultiple.splice(id, 1)
        }

        setMultiple(copyOfMultiple)
    }

    console.log(selected, multiple)

    return (
        <div className='flex justify-center'>
            <div className=''>
                <button onClick={() => setEnableMultiSelection(!enableMultiSelection)} className='h-auto w-auto bg-purple-500 from-neutral-700 rounded'>Enable Multi Selection</button>
                {data && data.length > 0 ? (
                    data.map(listItem => (
                        <div className='' onClick={enableMultiSelection ? () => handleMultiSelection(listItem.id) : () => handleSingleClick(listItem.id)} key={listItem.id} >
                            <div className='flex'>
                                <h3>{listItem.question}</h3>
                                {
                                    selected === listItem.id && enableMultiSelection ? (<span>-</span>) : (<span>+</span>)
                                }
                                {/* {
                                    enableMultiSelection ? (enableMultiSelection ? multiple.findIndex(listItem.id) !== -1 && (
                                        <span>-</span>
                                    ) : selected === listItem.id && (<span>-</span>)) : <span>+</span>
                                } */}

                            </div>
                            {
                                enableMultiSelection ? multiple.indexOf(listItem.id) !== -1 && (
                                    <div className='h-40 w-[500px] bg-red-400 overflow-auto'>
                                        {listItem.answer}

                                    </div>
                                ) : selected === listItem.id && (
                                    <div className='h-40 w-[500px] bg-red-400 overflow-auto'>
                                        {listItem.answer}

                                    </div>
                                )
                            }
                            {/* {
                            selected === listItem.id || enableMultiSelection.indexOf(listItem.id) !== -1 ? (
                                <div className='h-40 w-[500px] bg-red-400 overflow-auto'>
                                    {listItem.answer}
                                    
                                </div>
                            ):null
                        } */}
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
