import {Given,Then,When} from 'cucumber';
import {browser,ExpectedConditions as EC} from 'protractor';
import { NewsLayout } from '../PageObjects/NewsLayoutObject';
import chai from 'chai';

let nl = new NewsLayout();
var expect = chai.expect;

        Given('Click on the News Link', async () =>{

          await nl.ClickCard();
           
         });

         When('Switch Over to the Main Page',async()=>{

          await  browser.getAllWindowHandles().then(function (handles) {
            browser.switchTo().window(handles[0]);
            });

            await  browser.sleep(5000);
         });

          
         When('Click on the Rank Tag - {string}', async (string)=> {
          await  browser.sleep(8000);
          await nl.ClickTag();
          
         });

 
         Then('Click on the Value {float} {string}', async (float, string)=> {

        await  browser.sleep(5000);
        await nl.ClickValue();  
          
         });