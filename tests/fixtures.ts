//import { test as baseTest } from '@playwright/test';
import PopularMoviesSteps from './steps/popularMoviesSteps';
import { test as baseTest } from "playwright-bdd";

type Fixtures = {
  popularMoviesSteps: PopularMoviesSteps;
};

export const test = baseTest.extend<Fixtures>({
    popularMoviesSteps: async ({ page }, use) => {
    const popularMoviesSteps = new PopularMoviesSteps(page);
    await use(popularMoviesSteps);
  },
});

export const expect = test.expect;
