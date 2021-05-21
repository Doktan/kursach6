import React from 'react';
import { convertModeIntoDigit } from '../functions/fs';

const Output = (props) => {

    return (
        <div>
            <p>Вывод</p>
            <label>
                <input type='text' readOnly='true' value={props.text} />
                {convertModeIntoDigit(props.chosenMode) + ' C.C.'}
            </label>
        </div>
    );
};

export default Output;
