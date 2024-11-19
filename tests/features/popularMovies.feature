Feature: popular movies site

  Background:
    Given User navigate to https://www.themoviedb.org/movie

  Scenario: Main componenets are static
    Then page to have title Popular Movies — The Movie Database (TMDB)
    Given User click on sortTap
    Then page element sortLable text is sortLabelText
    Then page element header text is headerText
    Given user hover on movieMenuButton
    Then check container movieMenuContainer childrens
      | Popular     |
      | Now Playing |
      | Upcoming    |
      | Top Rated   |
    Given user hover on tvShowButton
    Then check container tvShowContainer childrens
      | Popular      |
      | Airing Today |
      | On TV        |
      | Top Rated    |
    Then check container genersContainer childrens
      | Action          |
      | Adventure       |
      | Animation       |
      | Comedy          |
      | Crime           |
      | Documentary     |
      | Drama           |
      | Family          |
      | Fantasy         |
      | History         |
      | Horror          |
      | Music           |
      | Mystery         |
      | Romance         |
      | Science Fiction |
      | TV Movie        |
      | Thriller        |
      | War             |
      | Western         |
    Given User click on searchButton
    Then User waits for firstElementTrending to be visible
    Given User click on searchTextBox
    Given User fill searchTextBox by searchKeyExample
    Given User press Enter key
    Then User to wait for url searchUrl
    Then page element firstSearchResultTitle text is searchKeyExample
    
