/**
 * ResponsiveTable — An Alpine.js component that makes HTML tables responsive.
 *
 * On mobile viewports, each <td> gets a label injected from its column header,
 * allowing the table to stack vertically while remaining readable.
 *
 * Uses the same CSS approach as the jQuery version (responsive-table.css).
 *
 * Data:
 *   headers  — Array of column header strings, e.g. ["Name", "Age", "Email"]
 *   rows     — Array of arrays, each inner array is one row of cell values
 */
document.addEventListener("alpine:init", () => {
  Alpine.data("responsiveTable", () => ({
    headers: ["table head 1", "head 2", "head 3", "head 4", "head 5"],
    rows: [
      ["content 1 1", "content 1 2", "content 1 3", "content 1 4", "content 1 5"],
      ["content 2 1", "content 2 2", "content 2 3", "content 2 4", "content 2 5"],
      ["content 2 1", "content 2 2", "content 2 3", "content 2 4", "content 2 5"],
      ["content 3 1", "content 3 2", "content 3 3", "content 3 4", "content 3 5"],
      ["content 4 1", "content 4 2", "content 4 3", "content 4 4", "content 4 5"],
    ],
  }));
});
