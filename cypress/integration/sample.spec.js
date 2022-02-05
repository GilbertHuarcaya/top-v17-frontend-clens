/* eslint-disable no-undef */
/// <reference types="Cypress" />

describe('login e2e test', () => {
  beforeEach(() => {
    cy.visit('/login');
  });
  it('successfuly renders the page header', () => {
    cy.contains('El mejor servicio, al mejor precio');
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

describe('my first e2e test', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('successfuly renders the page header', () => {
    cy.contains('El mejor servicio, al mejor precio');
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
