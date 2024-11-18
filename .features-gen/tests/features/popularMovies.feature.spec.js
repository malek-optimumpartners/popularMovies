/** Generated from: tests\features\popularMovies.feature */
import { test } from "playwright-bdd";

test.describe("popular movies site", () => {

  test.beforeEach(async ({ Given }) => {
    await Given("User navigate to \"https://www.themoviedb.org/movie\"");
  });

  test("Main componenets are static", async ({ Then, Given }) => {
    await Then("page to have title \"Popular Movies — The Movie Database (TMDB)\"");
    await Given("User click on \"sortTap\"");
    await Then("page element \"sortLable\" text is \"Sort Results By\"");
    await Then("page element \"header\" text is \"Popular Movies\"");
    await Given("user hover on \"movieMenuButton\"");
    await Then("check container \"movieMenuContainer\" childrens", {"dataTable":{"rows":[{"cells":[{"value":"Popular"}]},{"cells":[{"value":"Now Playing"}]},{"cells":[{"value":"Upcoming"}]},{"cells":[{"value":"Top Rated"}]}]}});
    await Given("user hover on \"tvShowButton\"");
    await Then("check container \"tvShowContainer\" childrens", {"dataTable":{"rows":[{"cells":[{"value":"Popular"}]},{"cells":[{"value":"Airing Today"}]},{"cells":[{"value":"On TV"}]},{"cells":[{"value":"Top Rated"}]}]}});
    await Given("User click on \"searchButton\"");
    await Given("User wait for \"firstElementTrending\" to be visible");
    await Given("User click on \"firstElementTrending\"");
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