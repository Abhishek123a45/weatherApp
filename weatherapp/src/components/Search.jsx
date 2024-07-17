import React, { useState } from 'react';



export default function Search({OnClick}){

    const [inputValue, setInputValue] = useState('');

    function handleOnChange(e){
        setInputValue(e.target.value)
    }   

    function handleOnClick(){
        OnClick(inputValue)
    }

    return(
        <div className='px-2'>
          <input type="text" 
           value={inputValue}
           className='w-3/5 py-2 pl-2'
           onChange={(e)=>{handleOnChange(e)
          }}
          />
          <button
          className = 'w-1/5 ml-6 py-2 bg-blue-500 text-white hover:bg-blue-700 active:bg-blue-500' 
          onClick={handleOnClick}
          >
            Search
          </button>
        </div>
);
}