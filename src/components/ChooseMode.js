import { React } from 'react';

const ChooseMode = (props) => {

    const onItemSelect = (e) => {
        props.setMode(e.target.value);
    };

    return (
        <div className='selector_block'>
            <p>Выберите систему счисления</p>
            <select onChange={onItemSelect} className='selector'>
                <option value='OCT'>OCT</option>
                <option value='HEX'>HEX</option>
            </select>
        </div>
    );
};

export default ChooseMode;
