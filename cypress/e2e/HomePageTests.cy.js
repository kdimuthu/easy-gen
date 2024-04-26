//const cypress = require("cypress")

/// <reference types="cypress" />

//import Home from "../PageObjects/HomePage";
import Home from "../Pages/HomePage"

describe("EasyGenAssignment", () => {
  let userInput;
  beforeEach(() => {
    //Open the browser
    cy.visit(Cypress.env("baseUrl"));
    //Read data from fixture file
    cy.fixture("testData.json").then((data) => {
      userInput = data;
    });
  });

  //Select an option from dropdown & Verify the selected option
  it("SelectAnOptionFromDropdown", () => {
    const _Home = new Home();
    //Select an option from dropdown
    _Home.selectOption(userInput.optionName, userInput.optionValue);
  });

  //Upload A File
  it("Upload A File", () => {
    const _Home = new Home();
    //Upload a file
    _Home.uploadFile(userInput.fileName);
  });

  //Click on a open tab & verify that new window is opened
  it("ClickOpenTabAndVerifyThatANewWindowIsOpened", () => {
    const _Home = new Home();
    //Click on open tab
    _Home.ClickOnOpenTab();
  });

  //Invoke an alert & Click Ok from Alert
  it("VerifyAlertWindow", () => {
    const _Home = new Home();
    _Home.readFile();
    //Enter name
    _Home.enterYourName("Testing");
    //Click on Alert
    _Home.clickAlert();
    //Verify Alert message
    _Home.VerifyAlertMessage("Testing");
  });

  //Verify that hide/show button is not visible when clicking on hide button
  it("VerifyHideShowNotVisibleWhenClickingOnHide", () => {
    const _Home = new Home();
    //Click on hide
    _Home.clickHide();
    //Verify hide show button not visible
    _Home.verifyHideShowFieldIsNotVisible();
  });

  //Verify that hide/show button is visible when clicking on show button
  it("VerifyHideShowNotVisibleWhenClickingOnHide", () => {
    const _Home = new Home();
    //Click on show
    _Home.clickShow();
    //Verify hide show button visible
    _Home.verifyHideShowFieldIsVisible();
  });

  //Verify mouser hover
  it("VerifyMouseHover", () => {
    const _Home = new Home();
    //Verify mouse hover
    _Home.mouseHover();
    //Verify top button is visible
    _Home.verifyButtonTopIsVisible();
    //Verify reload button is visible
    _Home.verifyButtonReloadIsVisible();
  });

  //Verify iframe
  it("VerifyIframe", () => {
    const _Home = new Home();
    //Verify iframe
    _Home.selectOptionFromIframe();
  });
});
