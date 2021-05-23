import React from 'react';
import { convertModeIntoDigit } from '../functions/fs';

const Output = (props) => {

    return (
        <div className='output_block'>
            <p>Вывод</p>
            <label className='output_label'>
                <input type='text' readOnly='true' value={props.text} maxLength='15' className='output_text'/>
                {convertModeIntoDigit(props.chosenMode) + ' C.C.'}
            </label>
        </div>
    );
};

export default Output;
