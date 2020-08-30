
Feature: NewsLayout Page Validation

@NewsRanking

Scenario Outline: News Ranking

Given Click on the News Link
When Switch Over to the Main Page
When Click on the Rank Tag - "<tag>"
Then Click on the Value - "<number>"

Examples:
    | tag        | number | 
    | Competency | 1      | 

