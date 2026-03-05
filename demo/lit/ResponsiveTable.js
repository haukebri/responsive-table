/**
 * ResponsiveTable — A Lit web component that makes HTML tables responsive.
 *
 * On mobile viewports, each <td> gets a label injected from its column header,
 * allowing the table to stack vertically while remaining readable.
 *
 * Uses the same CSS approach as the jQuery version (responsive-table.css).
 *
 * Properties:
 *   headers  — Array of column header strings, e.g. ["Name", "Age", "Email"]
 *   rows     — Array of arrays, each inner array is one row of cell values
 *   className — Optional additional class name (default: "content-table")
 */
import { LitElement, html } from "lit";

class ResponsiveTable extends LitElement {
  static properties = {
    headers: { type: Array },
    rows: { type: Array },
    className: { type: String },
  };

  constructor() {
    super();
    this.headers = [];
    this.rows = [];
    this.className = "content-table";
  }

  // Disable shadow DOM so shared CSS applies
  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <table class="${this.className}">
        <thead>
          <tr>
            ${this.headers.map((header) => html`<th>${header}</th>`)}
          </tr>
        </thead>
        <tbody>
          ${this.rows.map(
            (row) => html`
              <tr>
                ${row.map(
                  (cell, colIndex) => html`
                    <td>
                      <span class="mobile-th">${this.headers[colIndex]}</span>
                      ${cell}
                    </td>
                  `
                )}
              </tr>
            `
          )}
        </tbody>
      </table>
    `;
  }
}

customElements.define("responsive-table", ResponsiveTable);
