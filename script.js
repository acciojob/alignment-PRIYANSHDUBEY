() => {
  cy.get('td') // Selects all <td> elements on the page
    .should('have.css', 'padding', '1px') // Asserts that the selected elements have a CSS property 'padding' with a value of '1px'
    .should('have.css', 'border', '1px solid rgb(0, 0, 0)'); // Asserts that the selected elements have a CSS property 'border' with a value of '1px solid rgb(0, 0, 0)'
}
