/** Generated from: tests\features\popularMovies.feature */
import { test } from "playwright-bdd";

test.describe("popular movies site", () => {

  test.beforeEach(async ({ Given }) => {
    await Given("User navigate to \"https://www.themoviedb.org/movie\"");
  });

  test("Main componenets are static", async ({ Given, Then }) => {
    await Given("User click on \"sortTap\"");
    await Then("page element \"sortLable\" text is \"Sort Results By\"");
    await Then("page element \"header\" text is \"Popular Movies\"");
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