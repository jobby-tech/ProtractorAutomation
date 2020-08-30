
import {Given, Then,When} from 'cucumber';
import {browser,ExpectedConditions as EC} from 'protractor';
import chai from 'chai';
import { LoginPage } from '../PageObjects/LoginPageObject';


//browser.ignoreSynchronization=true;
let lp = new LoginPage();
var expect = chai.expect;



Given ('Navigate to the {string} Login Page', async(string)=>{

    await browser.get(string);
});

Given('Enter the {string} on the User ID Input Box', async (string)=> {

    await lp.EnterUsername().sendKeys(string);
    
  });

  Given('Enter the {string} on the Password Input Box', async (string)=> {

    await lp.EnterPassword().sendKeys(string);
    
  });


  When('Click on the Sign in Button as User Role Curator', async()=>{

    await lp.ClickLoginButton();
    
  });


  Then('Verify if the Title {string} of the Page and Heading {string} are displayed', async (string, string2)=> {
    

    await browser.wait(EC.presenceOf(lp.PageHeading()),5000);
    await browser.getTitle().then(function(text)
    {
        expect(text).to.equal(string);        
    })

    await lp.PageHeading().getText().then(function(text)
    {
        expect(text).to.equal(string2);
    })

    await browser.sleep(3000);

  });