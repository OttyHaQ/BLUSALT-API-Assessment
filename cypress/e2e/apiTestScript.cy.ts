describe('API Test for User Login', () => {
  
  const baseUrl = Cypress.env("baseUrl")
  const apiKey = Cypress.env("apiKey")

  it('should successfully log in using valid credentials', () => {
  
    cy.request({
      method: 'POST',
      url: `${baseUrl}/login`,
      headers: {
        'X-Oc-Session': 'voluptate',
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `API Key ${apiKey}`,
        'X-Oc-Merchant-Id': apiKey,
      },
      body: {
        email: 'demo@test.com',
        password: 'demo',
      },
    }).then((response) => {
      expect(response.status).to.eq(200);  
    });
  });

  it('should successfully register', () => {
   
    cy.request({
      method: 'POST',
      url: `${baseUrl}/register`,
      headers: {
        'X-Oc-Session': 'voluptate',
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `API Key ${apiKey}`,
        'X-Oc-Merchant-Id': apiKey,
      },
      body: {
        firstname:'demo',
        lastname: 'user',
        email: 'demo@test.com',
        password: 'demo',
      },
    }).then((response) => {
      expect(response.status).to.eq(200); 
    });
  });
});
