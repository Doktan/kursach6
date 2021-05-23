describe('Проверка состояния интерфейсов их взаимодействия', () => {
    it('Входим на сайт и проверяем наличие всех элементов', () => {
        cy.visit('/')
        cy.get('div.selector_block').should('exist')
        cy.get('div.input_block').should('exist')
        cy.get('div.output_block').should('exist')
        cy.get('div.error_block').should('not.exist')

    })
    it('Проверка состояния поля ввода', () => {
        cy.get('label.input_label').children('input')
            .type('1').should('have.value', '1').clear()
    })
    it('Проверяем cостояние поля вывода', () => {
        cy.get('label.output_label').children('input')
            .type('1', { force: true }).should('have.value', '')
    })
    it('Проверка взаимодействия двух компонент (Выбор режима и вывод данных)', () => {
        cy.get('div.selector_block').children('select')
            .select('HEX').should('have.value', 'HEX')
        cy.get('div.output_block').children('label')
            .should('have.text', '16 C.C.')
    })
    it('Взаимодействие ввода и вывода', () => {
        cy.get('label.input_label').children('input').type('100')

        cy.get('label.output_label').children('input')
            .should('have.value', '64')
    })
    it('Взаимодействие смены режима и поля вывода', () => {
        cy.get('select.selector').select('OCT')
            .should('have.value', 'OCT')
        cy.get('label.output_label').children('input')
            .should('have.value', '144')
        cy.get('label.input_label').children('input').clear()
    })
    it('Имитируем неправильный ввод', () => {
        cy.get('label.input_label').children('input').type('--')
            .should('have.value','-')
        cy.get('label.output_label').children('input')
            .should('have.value','-')
        cy.get('div.error_block').should('exist')
    })
    it('Ошибка должна пропасть после правильного ввода', () => {
        cy.get('label.input_label').children('input').type('123')
        cy.get('div.error_block').should('not.exist')
    })
})