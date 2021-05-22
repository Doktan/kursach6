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
        <div>
            <p>Введите число</p>
            <div>
                <label>
                    <input type='text' value={props.text} onChange={OnValueChange} maxLength='15' />
                    10 C.C.
                </label>
            </div>
        </div>
    );
};

export default DecInput;
