import { Locator } from "@playwright/test";

export default class GlobalFunctions {
  /**
   * getElementChildrensTexts
   */
  static getElementChildrensTexts(parentElement: Locator): string[] {
    return [];
    // Select the parent element

    // if (parentElement) {
    //   // Get all child elements
    //   const children = parentElement.allInnerTexts();

    //   // Convert HTMLCollection to Array and extract text content
    //   const childrenTexts: string[] = Array.from(children).map(
    //     (child) => child.textContent?.trim() || ""
    //   );

    //   return childrenTexts;
    // } else {
    //   return ["Parent element not found."];
    // }
  }
}
