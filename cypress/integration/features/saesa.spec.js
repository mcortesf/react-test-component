describe('Vista Principal', function () {

   it('Formulario 1', function () {

      cy.viewport(1440, 764)

      cy.visit('http://localhost:3000/').screenshot("Sitio POC")

      cy.get('.Home_home_container__1l9L8 > .Home_main__16Znb > form > .Input_container__zo7M0 > #rut').type('166097142')

      cy.get('.Home_home_container__1l9L8 > .Home_main__16Znb > form > .Input_container__zo7M0 > #email').click()

      cy.get('.Home_home_container__1l9L8 > .Home_main__16Znb > form > .Input_container__zo7M0 > #email').type('flor88.a@gmail.com')

      cy.get('.Home_home_container__1l9L8 > .Home_main__16Znb > form > .Input_container__zo7M0 > #password').click()

      cy.get('.Home_home_container__1l9L8 > .Home_main__16Znb > form > .Input_container__zo7M0 > #password').type('tata2020')

      cy.get('.Home_home_container__1l9L8 > .Home_main__16Znb > form > .Input_container__zo7M0 > #passwordConfirmation').click()

      cy.get('.Home_home_container__1l9L8 > .Home_main__16Znb > form > .Input_container__zo7M0 > #passwordConfirmation').type('yayayayaya')

      cy.get('#root > .App > .Home_home_container__1l9L8 > .Home_main__16Znb > form').click()

      cy.get('.Home_main__16Znb > form > .ExampleForm_fieldset__lkRQU > .Checkbox_container__20jlM:nth-child(2) > .Checkbox_label__2R9H7').click()

      cy.get('.Home_main__16Znb > form > .ExampleForm_fieldset__lkRQU > .Checkbox_container__20jlM > #example-checkbox-green').check('green')

      cy.get('.Home_main__16Znb > form > .ExampleForm_fieldset__lkRQU > .Checkbox_container__20jlM:nth-child(2) > .Checkbox_label__2R9H7').click()

      cy.get('.Home_main__16Znb > form > .ExampleForm_fieldset__lkRQU > .Checkbox_container__20jlM > #example-checkbox-green').check('green')

      cy.get('.Home_main__16Znb > form > .ExampleForm_fieldset__lkRQU > .Checkbox_container__20jlM:nth-child(4) > .Checkbox_label__2R9H7').click()

      cy.get('.Home_main__16Znb > form > .ExampleForm_fieldset__lkRQU > .Checkbox_container__20jlM > #example-checkbox-blue').check('blue')

      cy.get('.Home_main__16Znb > form > .ExampleForm_fieldset__lkRQU > .Checkbox_container__20jlM:nth-child(2) > .Checkbox_label__2R9H7').click()

      cy.get('.Home_main__16Znb > form > .ExampleForm_fieldset__lkRQU > .Checkbox_container__20jlM > #example-checkbox-green').check('green')

      cy.get('.Home_main__16Znb > form > .ExampleForm_fieldset__lkRQU > .Radio_container__1g17x:nth-child(2) > .Radio_label__3vCql').click()

      cy.get('.ComboBox_box__2ZPSW').click()


   })

   it('Assertions', function () {

      cy.viewport(1440, 764)

      cy.visit('http://localhost:3000/').screenshot("Sitio POC")

      cy.get('#username').should('be.disabled').screenshot("Campo Usuario, deshabilitado")

      cy.get('#rut').click()
      cy.get('#email').click()
      cy.get('.Input_error__2VO4D').should('have.text', 'Ingrese un RUT válido')
      cy.screenshot("Mensaje sin rut")

      cy.get('#email').type('flor.audicio@tinet.cl')
      cy.get('#email').should('have.value', 'flor.audicio@tinet.cl')



   })

   it('Responsividad', function () {

      cy.viewport('iphone-xr')
      cy.screenshot("Tamaño iphone XR")


      cy.get('.NavItem_header_link__3eR7I').should('be.visible');
      cy.get('.Header_button_spacer__3e4yL:nth-child(3)').should('be.visible');
      cy.get('.Header_button_spacer__3e4yL:nth-child(4)').should('be.visible');
      cy.get('.Button_button__3QF_k:nth-child(5)').should('be.visible');

      cy.wait(6000)

      cy.viewport(1280, 720)
      cy.screenshot("Vista de 1280x720")

      cy.wait(6000)

      cy.viewport('samsung-s10')
      cy.screenshot("Samsung S10")


   })

})
