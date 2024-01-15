import testData from '../../fixtures/testData.json'
import { careerPageHelper } from '../../helpers/careerPageHelper';
import { careerPageAssertion } from '../../assertion/careerPageAssertion';

describe('Xray Demo', () => {

  beforeEach(() => {
    cy.viewport(1280, 800);
    cy.visit('/');
  });

  it("Test1", () => {
    // Test data
    const searchJobTitle = 'Test'
    const refineCountryName = 'Netherlands'

    // Test Actions
    careerPageHelper.enterJobTitle(searchJobTitle);
    careerPageHelper.clickSearchButton();

    // Test Verification
    careerPageAssertion.verifyUrlWithSearchTitle(searchJobTitle);
    careerPageAssertion.verifySearchResultFromMultipleLocations(searchJobTitle);
    careerPageHelper.refineSearchResultWithCountry(refineCountryName);
    careerPageAssertion.verifySearchResultWithSingleLocation(refineCountryName);
  });

});
