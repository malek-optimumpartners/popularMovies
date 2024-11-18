Feature: popular movies site

  Background:
    Given User navigate to "https://www.themoviedb.org/movie"

  Scenario: Main componenets are static
    Then page to have title "Popular Movies — The Movie Database (TMDB)"
    Given User click on "sortTap"
    Then page element "sortLable" text is "Sort Results By"
    Then page element "header" text is "Popular Movies"
    Given user hover on "movieMenuButton"
    Then check container "movieMenuContainer" childrens
    |Popular|
    |Now Playing|
    |Upcoming|
    |Top Rated|
    Given user hover on "tvShowButton"
    Then check container "tvShowContainer" childrens
    |Popular|
    |Airing Today|
    |On TV|
    |Top Rated|
    Given User click on "searchButton"
    Given User wait for "firstElementTrending" to be visible
    Given User click on "firstElementTrending"
