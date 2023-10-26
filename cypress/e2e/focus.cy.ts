describe('Focus Page', () => {
 
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

    it('should return to home page when back button is clicked', () => {
      cy.get('input').type('Denver').should('have.value', 'Denver')
        .get('.view-location-button').click()
        .url().should('include', '/Denver/Colorado')
        .get(".back-button").click()
        .url().should('include', '/')
        .get("input").should('be.visible')
    });

    it('should display the selected location information', () => {
      cy.get('input').type('Denver').should('have.value', 'Denver')
        .get('.view-location-button').click()
        .get(".location-section").should('be.visible')
        .get(".location-view").first().contains("h1","Denver, Colorado, United States" )
        .get(".location-view").contains("h1","72.5 °F" )
        .get(".location-view").contains("h1","Partly cloudy")
        .get(".save-button").should('be.visible')
    });
})