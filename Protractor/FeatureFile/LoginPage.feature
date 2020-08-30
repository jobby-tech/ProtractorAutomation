
Feature: Login Page Validation

@Login
Scenario Outline:  Valid Login

Given Navigate to the "http://stage-newstuck.onemindindia.com/#/login" Login Page
Given Enter the "<userid>" on the User ID Input Box
Given Enter the "<password>" on the Password Input Box
When Click on the Sign in Button as User Role Curator
Then Verify if the Title "<title>" of the Page and Heading "<heading>" are displayed

Examples:
    | userid        | password              |  title     | heading   |
    | StageCurator  | $tageN3w5tuckCu6ato6  | Newstuck   | NEWSTUCK  |
