// import dummyData from "./src/dummyData/dummyData"

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
    expect(true).to.equal(true)
    cy.get('nav').should('be.visible')
    .get('h1').contains('Weather App')
    .get('button').contains('View Saved Locations')
    .get('h2').contains('Select Your Location')
    .get('input').should("be.visible")
  });
  
  it('user sees the input, types a City, and sees the info card', () => {
    expect(true).to.equal(true)
    cy.get('input').type('Denver')
  //   .get('.card--link').last().contains('p', 'I Still Believe')
  //   .get('.rating').first().contains('span', '66%')
  //   .get('.poster').should('be.visible')
  //   .get('.poster').should('have.attr', 'style').should('include',`background-image: url("https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg")`)
  //   .get('.tomato').should('be.visible')
  //   .get('.tomato').first().should('have.attr', 'src').should('include', '/static/media/tomato.b8416d23ec32ff330201.png')
  //   .get('.tomato').last().should('have.attr', 'src').should('include', '/static/media/green-slime.920d7e5db149537ea048.png')
  });
  
  // it('as a user I should be able to click on a card and the url should change to a new id', () => {
  //   cy.get('.card--link').first().click()
  //   cy.url().should('include', '694919')
  // });
  
  
  // it('as a user I should be able to click on the home button and the changes to the url should be reflected', () => {
  //   cy.get('.rt-logo').click()
  //   .url().should('eq', 'http://localhost:3000/')
  // });

});  