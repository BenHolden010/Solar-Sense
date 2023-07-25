describe('Focus Page', () => {
 
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

    it('should return to home page when back button is clicked', () => {
      cy.get('input').type('Denver')
        .get('.view-location-button').click()
        .get(".back-button").click()
        .get("input")
    });

    it('should display the selected location information', () => {
      cy.get('input').type('Denver')
        .get('.view-location-button').click()
        .get(".focus-section")
        .get(".focus-card").first().contains("h1","Denver, Colorado, United States" )
        .get(".focus-card").contains("p","72.5 °F" )
        .get(".focus-card").contains("h1","Partly cloudy")
        .get(".save-button")
    });
})