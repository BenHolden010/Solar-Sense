

describe('Home Page', () => {
  beforeEach(()=>{

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
    .intercept('GET', 'https://api.weatherapi.com/v1/forecast.json?key=46ac1049aa534aed954140046231907&q=???&days=3&aqi=yes&alerts=no', {
      statusCode: 500,
      body: '{error}'
    })
  })
  
  it('user sees a Form with an input field on the home page', () => {
    cy.get('nav').should('be.visible')
    .url().should('include', '/')
    .get('.title').contains("h1",'Solar+')
    .get('.black').contains("p",'=Sense')
    .get('.view-saved-button')
    .get('h2').contains('Select Your Location')
    .get('input').should("be.visible")
  });
  
  it('user sees the input, types a City, and sees the info card', () => {
    cy.get('input').type('Denver')
    .get(".location-select").contains("h1", "Denver, Colorado, United States")
  });

  // it('should display 404 error message when route is not recognized', () => {
  //   cy.visit('http://localhost:3000/denverweather;lkjfd;aopsdfpofj')
  //   .get('.error-page').contains('h1', '404 page not found')
  //   .get('.error-to-home').contains('p', 'Please try again')
  //   .get('.try-again').click()
  //   .url().should('include', '/')
  // })

  it('should display error message when a non valid location is typed', () => {
    cy.get('input').type('???').should('have.value', '???')
    .get('div').contains('p', 'Please enter a valid location.')
  })
});  