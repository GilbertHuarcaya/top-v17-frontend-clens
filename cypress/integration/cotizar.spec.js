/* eslint-disable no-undef */
/// <reference types="Cypress" />

describe('cotiza e2e test', () => {
  it('successfuly completes a order and payment', () => {
    cy.visit('/login');
    cy.get(`[data-cy='login-input_email']`).type('cytest@gmail.com');
    cy.get(`[data-cy='login-input_password']`).type('123456');
    cy.wait(1000);
    cy.get(`[data-cy='login-btn_login']`).click();
    cy.wait(1000);
    cy.get(`[data-cy='navbar-btn-cotiza']`).click();
    cy.wait(1000);
    cy.get(`[data-cy='order-input-distrito']`).type('Distrito');
    cy.wait(1000);
    cy.get(`[data-cy='order-select-habitacion']`).select(7);
    cy.wait(1000);
    cy.get(`[data-cy='order-select-cocina']`).select(7);
    cy.wait(1000);
    cy.get(`[data-cy='order-btn-submit']`).click();
    cy.wait(1000);
    cy.get(`[data-cy='order-check-day']`).click();
    cy.wait(1000);
    cy.get(`[data-cy='order-check-hour']`).click();
    cy.wait(1500);
    cy.get(`[data-cy='order-btn-submit']`).click();
    cy.wait(2000);
    cy.get(`[data-cy='order-btn-submit']`).click();
    cy.wait(1000);
    cy.get(`[data-cy='order-btn-nueva-tarjeta']`).click();
    cy.wait(1000);
    cy.get(`[data-cy='order-input-tarjeta']`).type('4575623182290326');
    cy.get(`[data-cy='order-input-month']`).type('12');
    cy.get(`[data-cy='order-input-year']`).type('2025');
    cy.get(`[data-cy='order-input-cvc']`).type('123');
    cy.wait(1000);
    cy.get(`[data-cy='order-check-accept']`).click();
    cy.wait(1000);
    cy.get(`[data-cy='order-btn-submit']`).click();
    cy.wait(20000);
    cy.contains('Servicios de limpieza en proceso');
  });
});
