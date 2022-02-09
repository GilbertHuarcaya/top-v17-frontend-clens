/* eslint-disable no-undef */
/// <reference types="Cypress" />

describe('render e2e test', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('successfuly renders the page header', () => {
    cy.contains('El mejor servicio de limpieza del hogar, al mejor precio');
  });
  it('successfuly renders the Home content', () => {
    cy.contains('Como funciona');
    cy.contains('Qué obtienes con los servicios Clens');
    cy.contains('Reseñas');
    cy.contains('Vamos');
  });

  it('successfuly renders navbar', () => {
    cy.contains('Servicios');
    cy.contains('Personal');
    cy.contains('Cotiza');
    cy.contains('Postula');
  });

  it('successfuly renders Login button', () => {
    cy.contains('Ingresa');
  });
});

describe('login logout e2e test', () => {
  beforeEach(() => {
    cy.visit('/login');
  });
  it('successfuly renders the page header', () => {
    cy.contains('El mejor servicio, al mejor precio');
  });
  it('successfuly executes login and logout', () => {
    cy.get(`[data-cy='login-input_email']`).type('cytest@gmail.com');
    cy.get(`[data-cy='login-input_password']`).type('123456');
    cy.get(`[data-cy='login-btn_login']`).click();
    cy.get(`[data-cy='navbar__user-logo']`).click();
    cy.get(`[data-cy='navbar__user-menu__logout']`).click();
  });
});
