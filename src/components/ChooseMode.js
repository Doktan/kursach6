import { React } from 'react';

const ChooseMode = (props) => {

    const onItemSelect = (e) => {
        props.setMode(e.target.value);
    };

    return (
        <div>
            <p>Выберите систему счисления</p>
            <select onChange={onItemSelect}>
                <option value='OCT'>OCT</option>
                <option value='HEX'>HEX</option>
            </select>
        </div>
    );
};

export default ChooseMode;
