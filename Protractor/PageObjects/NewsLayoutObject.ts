import{ElementFinder,element,by,ExpectedConditions as EC, browser} from 'protractor'


export class NewsLayout
{

    private ECard:ElementFinder;
    private ETagSelector:ElementFinder;
    private ETagValue:ElementFinder;

    constructor()
    {
        this.ECard=element(by.xpath("(//div/div/div[1]/a)[6]"));
        this.ETagSelector=element(by.xpath("(//li[1]/app-select/div/div)[1]"));
        this.ETagValue=element(by.xpath("//li[1]/app-select/div/ul/li[3]"));
    }

    async ClickCard()
    {
        return await browser.wait(EC.presenceOf(this.ECard),5000).then(()=>{
            
            return this.ECard.click();        
        })
    }

    async ClickTag()
    {
        return await browser.wait(EC.elementToBeClickable(this.ETagSelector),6000).then(()=>{

            return this.ETagSelector.click();
        })
    }

    async ClickValue()
    {
        return await browser.wait(EC.elementToBeClickable(this.ETagValue),8000).then(()=>{

            return this.ETagValue.click();
        })
    }

}

