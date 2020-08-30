import{ElementFinder,element,by,ExpectedConditions as EC, browser} from 'protractor'


export class SendToEditor
{

    private ENewsCardCheckBox:ElementFinder;
    private ESelectedOnlySlider:ElementFinder;
    private ESendButton:ElementFinder;
    private ESentToEditorMsg:ElementFinder;

    constructor()
    {
        this.ENewsCardCheckBox=element(by.id("defaultCheck1"));
        this.ESelectedOnlySlider=element(by.xpath("//span[@class='slider']"));
        this.ESendButton=element(by.xpath("//a[@class='actionButton']"));
        this.ESentToEditorMsg=element(by.xpath("//p[contains(text(),'sent to Editor ')]"));
    }
 
    async ClickNewsCardCheckBox()
     {
         return await browser.wait(EC.elementToBeClickable(this.ENewsCardCheckBox),5000).then(()=>{

            return this.ENewsCardCheckBox.click();

         })
     }
    
     async ClickSelectedOnlySlider()
     {
         return await browser.wait(EC.elementToBeClickable(this.ESelectedOnlySlider),5000).then(()=>{

            return this.ESelectedOnlySlider.click();

         })
     }

     async ClickSendButton()
     {
         return await browser.wait(EC.elementToBeClickable(this.ESendButton),5000).then(()=>{

            return this.ESendButton.click();

         })
     }

     SentToEditorMsg():ElementFinder
     {
         return this.ESentToEditorMsg;
     }
}