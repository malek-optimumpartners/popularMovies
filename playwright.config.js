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
});
