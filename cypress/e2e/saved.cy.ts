describe('saved locations section', () => {
  beforeEach(()=>{
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
    .intercept('GET', 'https://api.weatherapi.com/v1/forecast.json?key=46ac1049aa534aed954140046231907&q=Denver,Colorado&days=3&aqi=yes&alerts=no', {
      statusCode: 200,
      fixture: "Denver"
    })
    .visit('http://localhost:3000')
  })

  it('should allow the user to save a location and view the saved location', () => {
    cy.get('input').type('Denver')
    .get('.location-select').should('be.visible')
    .get('.view-location-button').click()
    .url().should('include', '/Denver')
    .get('.save-button').click()
    .get('.view-saved-button').click()
    .url().should('include', '/saved-locations')
    .get('.saved-card').should('be.visible')
    .get('.saved-card').contains('h1', 'Denver, Colorado, United States')
    .get('.saved-temp').contains('h1', '72.5 °F')
    .get('img').last().should('have.attr', 'src').should('include', '//cdn.weatherapi.com/weather/64x64/day/116.png')
    .get('.saved-card').contains('h1', 'Partly cloudy')
    .get('#Denver').click()
    .get('.no-saved').contains('p', 'No Saved Locations')
    .get('.saved-card').should('not.exist')
  })
})