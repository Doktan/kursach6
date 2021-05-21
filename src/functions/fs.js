export const convertModeIntoDigit = (mode) => {
    switch (mode) {
        case 'OCT': return '8';
        case 'HEX': return '16';
        default: return 'Такого не может быть';
    };
};

export const tryInput = (text) => {
    text = parseInt(text, 10).toString()
    return text.match(/-?\d*/)[0]; // TODO нужно поправить регуялрку
};

export const convertNum = (num, chosenMode) => {
    // switch (chosenMode) {
    //     case 'OCT':
    //         return parseInt(num,8);
    //         break;
    //     case 'HEX':
    //         return parseInt(num,16);
    //         break;
    //     default: return 'There is no such a mode!';
    // }
    
};


