Feature: popular movies site

  Background:
    Given User navigate to "https://www.themoviedb.org/movie"

  Scenario: Main componenets are static
    Given User click on "sortTap"
    Then page element "sortLable" text is "Sort Results By"
    Then page element "header" text is "Popular Movies"
