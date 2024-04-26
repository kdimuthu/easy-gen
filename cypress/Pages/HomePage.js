/// <reference types="cypress" />

class Home {
    /** object locators for home page */
  
    btnHome = "button[class='btn btn-primary']";
    ddDropdown = "#dropdown-class-example";
    btnChooseFile = "input[name='img']";
    btnOpenTab = "#opentab";
    txtEnterYourName = "#name";
    btnAlert = "#alertbtn";
    btnHide = "#hide-textbox";
    btnShow = "#show-textbox";
    txtHideShow = "#displayed-text";
    btnMouseHover = "button[class='btn btn-primary hover-btn']";
    btnTop = "a";
    btnReload = "a";
    ifiFrame = "#courses-iframe";
    ddiFrame = "a";
  
    //Select an option from Dropdown & verify the value of selected option
    selectOption(option, val) {
      cy.get(this.ddDropdown).select(option).should("have.value", val);
    }
  
    //Upload a file
  
    uploadFile(fileName) {
      cy.get(this.btnChooseFile).selectFile(fileName);
    }
  
    //Click on OpenTab button
  
    ClickOnOpenTab() {
      cy.get(this.btnOpenTab).invoke("removeAttr", "target").click();
    }
  
    readFile() {
      cy.readFile("cypress/fixtures/alert-text.txt")
        .should("contain", "Hello from Easygenerator")
        .then(($fileContent) => {
          const txtContent = $fileContent;
          cy.log(txtContent);
        });
    }
  
    //Enter name
  
    enterYourName(name) {
      cy.get(this.txtEnterYourName).type(name);
    }
  
    //Click on alert button
  
    clickAlert() {
      cy.get(this.btnAlert).click();
    }
  
    //Verify the message in Alert
  
    VerifyAlertMessage(name) {
      cy.on("window:alert", (str) => {
        expect(str).to.equal(
          "Hello " + name + ", share this practice page and share your knowledge"
        );
      });
    }
  
    //Click on hide button
  
    clickHide() {
      cy.get(this.btnHide).click();
    }
  
    //Click on show button
  
    clickShow() {
      cy.get(this.btnShow).click();
    }
  
    //Verify hide show field is hidden
  
    verifyHideShowFieldIsNotVisible() {
      cy.get(this.txtHideShow).should("not.be.visible");
    }
  
    //Verify hide show field is visible
  
    verifyHideShowFieldIsVisible() {
      cy.get(this.txtHideShow).should("be.visible");
    }
  
    //Mouse Hover
    mouseHover() {
      cy.get(this.btnMouseHover).trigger("mouseover");
    }
  
    //Verify button top is visible when hovering mouse
    verifyButtonTopIsVisible() {
      cy.get(this.btnTop).contains("Top").should("be.visible");
    }
  
    //Verify button reload is visible when hovering mouse
    verifyButtonReloadIsVisible() {
      cy.get(this.btnTop).contains("Reload").should("be.visible");
    }
  
    //Select an option from Iframe
    selectOptionFromIframe() {
      const iframe = cy
        .get("#courses-iframe")
        .its("0.contentDocument.body")
        .should("be.visible")
        .then(cy.wrap);
      iframe.click();
    }
  }
  
  export default Home;
  