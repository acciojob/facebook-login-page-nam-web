//your JS code here. If required.
cy.get('#signup').click(); // This will simulate a click on the element with id 'signup'
cy.url().should('include', '/reg/'); // This checks if the current URL includes '/reg/'