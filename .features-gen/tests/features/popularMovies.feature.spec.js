/** Generated from: tests\features\popularMovies.feature */
import { test } from "../../../tests/fixtures.ts";

test.describe("popular movies site", () => {

  test("Main componenets are static", async ({ Given, Then, When, popularMoviesSteps }) => {
    await Given("User navigate to movie/", null, { popularMoviesSteps });
    await Then("page to have title Popular Movies — The Movie Database (TMDB)", null, { popularMoviesSteps });
    await When("User click on sortTap", null, { popularMoviesSteps });
    await Then("page element sortLable text is sortLabelText", null, { popularMoviesSteps });
    await Then("page element header text is headerText", null, { popularMoviesSteps });
    await Given("user hover on movieMenuButton", null, { popularMoviesSteps });
    await Then("check container movieMenuContainer childrens", {"dataTable":{"rows":[{"cells":[{"value":"Popular"}]},{"cells":[{"value":"Now Playing"}]},{"cells":[{"value":"Upcoming"}]},{"cells":[{"value":"Top Rated"}]}]}}, { popularMoviesSteps });
    await Given("user hover on tvShowButton", null, { popularMoviesSteps });
    await Then("check container tvShowContainer childrens", {"dataTable":{"rows":[{"cells":[{"value":"Popular"}]},{"cells":[{"value":"Airing Today"}]},{"cells":[{"value":"On TV"}]},{"cells":[{"value":"Top Rated"}]}]}}, { popularMoviesSteps });
    await Then("check container genersContainer childrens", {"dataTable":{"rows":[{"cells":[{"value":"Action"}]},{"cells":[{"value":"Adventure"}]},{"cells":[{"value":"Animation"}]},{"cells":[{"value":"Comedy"}]},{"cells":[{"value":"Crime"}]},{"cells":[{"value":"Documentary"}]},{"cells":[{"value":"Drama"}]},{"cells":[{"value":"Family"}]},{"cells":[{"value":"Fantasy"}]},{"cells":[{"value":"History"}]},{"cells":[{"value":"Horror"}]},{"cells":[{"value":"Music"}]},{"cells":[{"value":"Mystery"}]},{"cells":[{"value":"Romance"}]},{"cells":[{"value":"Science Fiction"}]},{"cells":[{"value":"TV Movie"}]},{"cells":[{"value":"Thriller"}]},{"cells":[{"value":"War"}]},{"cells":[{"value":"Western"}]}]}}, { popularMoviesSteps });
    await When("User click on searchButton", null, { popularMoviesSteps });
    await Then("User waits for firstElementTrending to be visible", null, { popularMoviesSteps });
    await When("User click on searchTextBox", null, { popularMoviesSteps });
    await Given("User fill searchTextBox by searchKeyExample", null, { popularMoviesSteps });
    await When("User press Enter key", null, { popularMoviesSteps });
    await Then("User to wait for url searchUrl", null, { popularMoviesSteps });
    await Then("page element firstSearchResultTitle text is searchKeyExample", null, { popularMoviesSteps });
    await When("User click on joinTheCommunity", null, { popularMoviesSteps });
    await Then("User to wait for url signUpUrl", null, { popularMoviesSteps });
    await Given("User fill signUpUserName by userName", null, { popularMoviesSteps });
    await Given("User fill signUpPassWord by passWord", null, { popularMoviesSteps });
    await Given("User fill signUpPassWordConfirmation by passWord", null, { popularMoviesSteps });
    await Given("User fill signUpEmail by email", null, { popularMoviesSteps });
    await When("User click on signUpButton", null, { popularMoviesSteps });
    await Then("page element humanConfirmationTextElement text is humanConfirmationText", null, { popularMoviesSteps });
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("tests\\features\\popularMovies.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "Main componenets are static": {"pickleLocation":"60:7"},
};