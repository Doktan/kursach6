import { React, useRef, useEffect, Component } from 'react';
import { tryInput } from '../functions/fs';

const DecInput = (props) => {

    const OnValueChange = (e) => {

       let inputInfo = tryInput(e.target.value);
       if(inputInfo === 'Ошибка!')
            props.showError(true);
        else{
            props.setText(inputInfo);
            props.showError(false);
        }

    };

    return (
        <div className='input_block'>
            <p>Введите число</p>
            <div>
                <label className='input_label'>
                    <input type='text' value={props.text} onChange={OnValueChange} maxLength='15' className='input_text' />
                    10 C.C.
                </label>
            </div>
        </div>
    );
};

export default DecInput;
