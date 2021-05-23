import React from 'react';

const ErrorHandler = (props) => {
    return (
        <div className='error_block'>
            Ошибка! Был введен некорректный символ<br/>
            Допустимы:
            <ul className='error_list'>
                <li>Числа [0-9]</li>
                <li>Минус, только в начале числа</li>
                <li>Точка, как разделитель целой и дробной части числа</li>
            </ul>
        </div>
    )
}

export default ErrorHandler;
