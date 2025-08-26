// Main suite for Weather Application 
describe('Weather Application Tests', () => { 
  
  beforeEach(() => { 
    cy.visit('https://x-weather-app-kohl-three.vercel.app/') 
  }); 
  
  // Suite for testing search functionality 
  it('Search Functionality Tests - Enter City and Search', () => { 
    cy.get('input[type="text"]').type('Paris'); 
    cy.get('button').click(); 
    cy.get('.weather-cards').should('be.visible'); 
  }); 
  
  it('Search Functionality Tests - Handle Invalid City Search', () => { 
    cy.get('input[type="text"]').type('InvalidCity123'); 
    cy.get('button').click(); 
    cy.on('window:alert', (str) => { 
      expect(str).to.equal('Failed to fetch weather data'); 
    }); 
  }); 
  
  // Suite for testing UI states 
  it('UI State Tests - Display Loading State During Data Fetch', () => { 
    cy.get('input[type="text"]').type('New York'); 
    cy.get('button').click(); 
    cy.get('p').contains('Loading data...').should('be.visible'); 
  }); 
  
  it('UI State Tests - Display Weather Data After Fetch', () => { 
    cy.get('input[type="text"]').type('London'); 
    cy.get('button').click(); 
    cy.get('.weather-card').should('have.length', 4); 
  }); 
});