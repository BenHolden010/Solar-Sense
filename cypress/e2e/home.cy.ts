

describe('Home Page', () => {
  beforeEach(()=>{
    // visit localhost
    cy.visit('http://localhost:3000')
    .intercept('GET', 'https://api.weatherapi.com/v1/forecast.json?key=46ac1049aa534aed954140046231907&q=&days=3&aqi=yes&alerts=no', {
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
  })
  
  it('user sees a Form with an input field on the home page', () => {
    cy.get('nav').should('be.visible')
      .get('.title').contains("h1",'Solar Sense')
      .get('.view-saved-button')
      .get('h2').contains('Select Your Location')
      .get('input').should("be.visible")
  });
  
  it('user sees the input, types a City, and sees the info card', () => {
    expect(true).to.equal(true)
    cy.get('input').type('Denver')
      .get(".card").contains("h1", "Denver, Colorado, United States")
  });

});  