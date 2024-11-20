Feature: popular movies site

  Scenario: Main componenets are static
    Given User navigate to <url>
    Then page to have title Popular Movies — The Movie Database (TMDB)
    When User click on sortTap
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
    When User click on searchButton
    Then User waits for firstElementTrending to be visible
    When User click on searchTextBox
    Given User fill searchTextBox by searchKeyExample
    When User press Enter key
    Then User to wait for url searchUrl
    Then page element firstSearchResultTitle text is searchKeyExample
    When User click on joinTheCommunity
    Then User to wait for url signUpUrl
    Given User fill signUpUserName by userName
    Given User fill signUpPassWord by passWord
    Given User fill signUpPassWordConfirmation by passWord
    Given User fill signUpEmail by email
    When User click on signUpButton
    Then page element humanConfirmationTextElement text is humanConfirmationText
    

    Examples:
      | page | url    |
      | main | movie/ |
