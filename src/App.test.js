import {convertModeIntoDigit, tryInput, convertNum} from './functions/fs'

describe('Проверка функции выбора конвертации режима игры в число', () => {
  test('Выбрана OCT', () => {
    expect(convertModeIntoDigit('OCT')).toBe('8');
  })

  test('Выбрана HEX', () => {
    expect(convertModeIntoDigit('HEX')).toBe('16');
  })

  test('Если в основание функции что-то другое', () => {
    expect(convertModeIntoDigit('hello world')).toBe('10');
  })

})

describe('Проверка попытки ввода числа в поле ввода', () => {
  test('Ввод двух минусов подряд', () => {
    expect(tryInput('--')).toBe('Ошибка!');
  })
  test('Ввод . в начале числа', () => {
    expect(tryInput('.')).toBe('Ошибка!');
  })
  test('Ввод числа, где две точки', () => {
    expect(tryInput('123.123.123')).toBe(123.123);
  })
  test('Отрицательное число с двумя минусами', () => {
    expect(tryInput('--123')).toBe('Ошибка!');
  })
  test('Ввод точки в конце числа', () => {
    expect(tryInput('-123.')).toBe(-123);
  })
  test('Ввод положительного числа', () => {
    expect(tryInput('123123')).toBe(123123);
  })
  test('Ввод отрицательного числа', () => {
    expect(tryInput('-123123')).toBe(-123123);
  })
  test('Ввод символа в середине числа', () => {
    expect(tryInput('123f123')).toBe(123);
  })
  test('Ввод символа в начале числа', () => {
    expect(tryInput('f123123')).toBe('Ошибка!');
  })
  test('Ввод символа в середине числа', () => {
    expect(tryInput('123123f')).toBe(123123);
  })
})

describe('Проверка работы функции конвертации числа в другую систему счисления', () => {
  test('Введено ничего, или ситуация, когда нажимается backspace, а в input 1 символ', () => {
    expect(convertNum('', 'HEX')).toBe('');
  })
  test('Введен знак -, чтобы не было ошибки перевода вернем - ', () => {
    expect(convertNum('-', 'OCT')).toBe('-');
  })
  test('Введено число 8 в 8 С.С.', () => {
    expect(convertNum('8', 'OCT')).toBe('10');
  })
  test('Введено число 10 в 16 С.С.', () => {
    expect(convertNum('10', 'HEX')).toBe('A');
  })
  test('Введено дробное число 5.5 в OCT', () => {
    expect(convertNum('5.5', 'OCT')).toBe('5.4');
  })
  test('Перевод дробное число 10.5 в HEX', () => {
    expect(convertNum('10.5', 'HEX')).toBe('A.8');
  })
  test('Введено отрицательное число -5 в OCT', () => {
    expect(convertNum('-5', 'OCT')).toBe('-5');
  })
  test('Введено отрицательное число -15 в HEX', () => {
    expect(convertNum('-15', 'HEX')).toBe('-F');
  })
})
