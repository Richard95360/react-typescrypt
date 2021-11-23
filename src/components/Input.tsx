import React from 'react';

type InputProps = {
    value:string
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}


export const Input = ({value , handleChange}:InputProps) => {

    const handleInpuChange = (e:React.ChangeEvent<HTMLInputElement>) =>{

    }
    return <input type="text" value={value}  onChange={handleChange}/>
}
