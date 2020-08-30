import {Given,Then,When} from 'cucumber';
import {browser,ExpectedConditions as EC} from 'protractor';
import chai from 'chai';
import { SendToEditor } from '../PageObjects/SendToEditorObject';

let se = new SendToEditor();
var expect = chai.expect;


Given('Click on the News Card Check Box After Review', async () =>{

    await se.ClickNewsCardCheckBox();
     
   });

   When ('Click on the Selected Items only Slider', async () =>{

    await se.ClickSelectedOnlySlider();

   });

   When ('Click on Send to Editor Button', async () =>{

    await se.ClickSendButton();

});


   Then ('Verify if the Sent Message is displayed on the LightBox', async () =>{

    await browser.wait(EC.visibilityOf(se.SentToEditorMsg()),8000);
    await browser.sleep(4000);
});
