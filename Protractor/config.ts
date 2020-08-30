import {Config,browser} from 'protractor';
import * as reporter from 'cucumber-html-reporter';

var today = new Date(),
timestamp = today.getDate() + '-' + (today.getMonth() + 1 )+ '-' + today.getFullYear() + '-' + today.getHours()  + 'h-' + today.getMinutes() +'m'; 

export let config : Config ={

    directConnect:true,
    //seleniumAddress: 'http://localhost:4444/wd/hub/',
    framework:'custom',
    frameworkPath:require.resolve('protractor-cucumber-framework'),
    capabilities:{
        browserName:'chrome'
    },
    specs:['../FeatureFile/*.feature'],
    cucumberOpts:{
        tags:"",
        require:['../JSFiles/StepDefinitions/*.js'],
        format:'json:./cucumberreporter.json'
    },

    onPrepare:()=>{
        browser.driver.manage().window().maximize();
    },

    onComplete:()=>{

        var options={
            theme:"bootstrap",
            jsonFile:'./cucumberreporter.json',
            output:'./OutputHTMLreport/Automation_Report-' +timestamp+'.html',
            reportSuiteAsScenarios:true,
            scenarioTimestamp:true,
            launchReport:true,
            metadata:{
                "App Version":"Ajin Automation 1.0",
                "Test Environment":"UAT",
                "Browser":"Chrome",
                "Platform":"",
                "Executed":""
            }
        };
        reporter.generate(options);
    }
};