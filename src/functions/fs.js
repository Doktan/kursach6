export const convertModeIntoDigit = (mode) => {
    switch (mode) {
        case 'OCT': return '8';
        case 'HEX': return '16';
        default: return '10';
    };
};

export const tryInput = (text) => {

    if (text === '' || text === '-')
        return text

    let res = parseFloat(text);
    if (isNaN(res)) {
        return 'Ошибка!'
    }
    else {
        return res;
    }

};

export const convertNum = (num, chosenMode) => {
    if (num !== '' && num !== '-') {
        let mode = convertModeIntoDigit(chosenMode)
        return parseFloat(num).toString(mode).toUpperCase();
    }
    else
        return num;

};
