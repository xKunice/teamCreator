import "./TextCamp.css"
import { useState } from "react";

const TextCamp =(data) => {

    const changeManage = (event) =>{
        data.setValor(event.target.value);
    }

    return <div className="text-camp">
        <label>{data.title}</label>
        <input type="text" 
            placeholder={data.placeholder} 
            required={data.required} 
            value={data.valor}
            onChange={changeManage}
        />
    </div>
};

export default TextCamp;