// describe('template spec', () => {
//   it('passes', () => {
//     cy.visit('https://example.cypress.io')
//   })
// })

describe('saved locations section', () => {
  beforeEach(()=>{
    // visit localhost
    cy.intercept('GET', 'https://api.weatherapi.com/v1/forecast.json?key=46ac1049aa534aed954140046231907&q=&days=3&aqi=yes&alerts=no', {
      statusCode: 200,
    })
    .intercept('GET', 'https://api.weatherapi.com/v1/forecast.json?key=46ac1049aa534aed954140046231907&q=D&days=3&aqi=yes&alerts=no', {
      statusCode: 200,
    })
    .intercept('GET', 'https://api.weatherapi.com/v1/forecast.json?key=46ac1049aa534aed954140046231907&q=De&days=3&aqi=yes&alerts=no', {
      statusCode: 200,
    })
    .intercept('GET', 'https://api.weatherapi.com/v1/forecast.json?key=46ac1049aa534aed954140046231907&q=Den&days=3&aqi=yes&alerts=no', {
      statusCode: 200,
    })
    .intercept('GET', 'https://api.weatherapi.com/v1/forecast.json?key=46ac1049aa534aed954140046231907&q=Denv&days=3&aqi=yes&alerts=no', {
      statusCode: 200,
    })
    .intercept('GET', 'https://api.weatherapi.com/v1/forecast.json?key=46ac1049aa534aed954140046231907&q=Denve&days=3&aqi=yes&alerts=no', {
      statusCode: 200,
    })
    .intercept('GET', 'https://api.weatherapi.com/v1/forecast.json?key=46ac1049aa534aed954140046231907&q=Denver&days=3&aqi=yes&alerts=no', {
      statusCode: 200,
      fixture: "Denver"
    })
    .visit('http://localhost:3000')
  })

  it('should allow the user to save a location and view the saved location', () => {
    cy.get('input').type('Denver')
    .get('.card').should('be.visible')
    .get('.view-location-button').click()
    .get('.save-button').click()
    .get('.view-saved-button').click()
    .get('.saved-card').should('be.visible')
  })
})