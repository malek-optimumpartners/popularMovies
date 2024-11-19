/** Generated from: tests\features\popularMovies.feature */
import { test } from "../../../tests/fixtures.ts";

test.describe("popular movies site", () => {

  test.beforeEach(async ({ Given, popularMoviesSteps }) => {
    await Given("User navigate to https://www.themoviedb.org/movie", null, { popularMoviesSteps });
  });

  test("Main componenets are static", async ({ Then, Given, popularMoviesSteps }) => {
    await Then("page to have title Popular Movies — The Movie Database (TMDB)", null, { popularMoviesSteps });
    await Given("User click on sortTap", null, { popularMoviesSteps });
    await Then("page element sortLable text is sortLabelText", null, { popularMoviesSteps });
    await Then("page element header text is headerText", null, { popularMoviesSteps });
    await Given("user hover on movieMenuButton", null, { popularMoviesSteps });
    await Then("check container movieMenuContainer childrens", {"dataTable":{"rows":[{"cells":[{"value":"Popular"}]},{"cells":[{"value":"Now Playing"}]},{"cells":[{"value":"Upcoming"}]},{"cells":[{"value":"Top Rated"}]}]}}, { popularMoviesSteps });
    await Given("user hover on tvShowButton", null, { popularMoviesSteps });
    await Then("check container tvShowContainer childrens", {"dataTable":{"rows":[{"cells":[{"value":"Popular"}]},{"cells":[{"value":"Airing Today"}]},{"cells":[{"value":"On TV"}]},{"cells":[{"value":"Top Rated"}]}]}}, { popularMoviesSteps });
    await Then("check container genersContainer childrens", {"dataTable":{"rows":[{"cells":[{"value":"Action"}]},{"cells":[{"value":"Adventure"}]},{"cells":[{"value":"Animation"}]},{"cells":[{"value":"Comedy"}]},{"cells":[{"value":"Crime"}]},{"cells":[{"value":"Documentary"}]},{"cells":[{"value":"Drama"}]},{"cells":[{"value":"Family"}]},{"cells":[{"value":"Fantasy"}]},{"cells":[{"value":"History"}]},{"cells":[{"value":"Horror"}]},{"cells":[{"value":"Music"}]},{"cells":[{"value":"Mystery"}]},{"cells":[{"value":"Romance"}]},{"cells":[{"value":"Science Fiction"}]},{"cells":[{"value":"TV Movie"}]},{"cells":[{"value":"Thriller"}]},{"cells":[{"value":"War"}]},{"cells":[{"value":"Western"}]}]}}, { popularMoviesSteps });
    await Given("User click on searchButton", null, { popularMoviesSteps });
    await Then("User waits for firstElementTrending to be visible", null, { popularMoviesSteps });
    await Given("User click on searchTextBox", null, { popularMoviesSteps });
    await Given("User fill searchTextBox by searchKeyExample", null, { popularMoviesSteps });
    await Given("User press Enter key", null, { popularMoviesSteps });
    await Then("User to wait for url searchUrl", null, { popularMoviesSteps });
    await Then("page element firstSearchResultTitle text is searchKeyExample", null, { popularMoviesSteps });
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("tests\\features\\popularMovies.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "Main componenets are static": {"pickleLocation":"6:3"},
};