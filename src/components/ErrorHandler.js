import React from 'react';

const ErrorHandler = (props) => {
    return (
        <div>
            Ошибка! Был введен некорректный символ<br/>
            Допустимы:
            <ul>
                <li>Числа [0-9]</li>
                <li>Минус, только в начале числа</li>
                <li>Точка, как разделитель целой и дробной части числа</li>
            </ul>
        </div>
    )
}

export default ErrorHandler;
