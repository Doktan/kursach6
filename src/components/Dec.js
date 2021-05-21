import React from 'react';
import { tryInput } from '../functions/fs';

const DecInput = (props) => {

    const OnValueChange = (e) => {
        props.setText(tryInput(e.target.value));
    };

    return (
        <div>
            <p>Введите число</p>
            <div>
                <label>
                    <input type='text' value={props.text} onChange={OnValueChange} />
                    10 C.C.
                </label>
            </div>
        </div>
    );
};

export default DecInput;
