import { defineConfig } from "@playwright/test";
import { defineBddConfig } from "playwright-bdd";

const testDir = defineBddConfig({
  disableWarnings: { importTestFrom: true },
  features: "tests/features/*.feature",
  steps: "tests/steps/*.ts",
  importTestFrom: "tests/fixtures.ts",
});

export default defineConfig({
  disableWarnings: { importTestFrom: true },
  testDir,
  reporter: "html",
  use:{
    baseURL:'https://www.themoviedb.org/',
    ignoreHTTPSErrors:true,
    navigationTimeout:3*60*1000,
    video:{
      mode:'retain-on-failure',
      size:{width:640,height:480}
    }
  }
});
