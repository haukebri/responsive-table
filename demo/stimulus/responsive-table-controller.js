import { Controller } from "@hotwired/stimulus";

/**
 * ResponsiveTableController — A Stimulus controller that makes HTML tables responsive.
 *
 * On mobile viewports, each <td> gets a <span class="mobile-th"> label injected
 * from its column header, allowing the table to stack vertically while remaining readable.
 *
 * Uses the same CSS approach as the jQuery version (responsive-table.css).
 *
 * Usage:
 *   <table data-controller="responsive-table" class="content-table">
 *     <thead>...</thead>
 *     <tbody>...</tbody>
 *   </table>
 */
export default class extends Controller {
    connect() {
        this.addMobileHeaders();
    }

    addMobileHeaders() {
        const headers = Array.from(this.element.querySelectorAll("thead th"));
        const cells = this.element.querySelectorAll("tbody td");
        const columnCount = headers.length;

        cells.forEach((td, index) => {
            const headerText = headers[index % columnCount]?.textContent || "";
            const span = document.createElement("span");
            span.className = "mobile-th";
            span.textContent = headerText;
            td.prepend(span);
        });
    }
}
