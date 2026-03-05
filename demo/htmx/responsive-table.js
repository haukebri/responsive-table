/**
 * ResponsiveTable — An htmx-compatible helper that makes HTML tables responsive.
 *
 * htmx embraces server-rendered HTML, so the table is written directly in the
 * markup. This script reads <thead> labels and injects <span class="mobile-th">
 * elements into each <td> — the same approach as the original jQuery version,
 * but using vanilla JS.
 *
 * htmx can then swap fresh table HTML from a server endpoint while this script
 * re-processes the table after every htmx swap via the htmx:afterSwap event.
 *
 * Usage:
 *   makeResponsive(tableElement)          — process a single table
 *   makeResponsive(tableElement, headers) — use explicit headers instead of <thead>
 */
function makeResponsive(table, explicitHeaders) {
    const headers = explicitHeaders ||
        Array.from(table.querySelectorAll("thead th")).map(function (th) {
            return th.textContent.trim();
        });

    table.querySelectorAll("tbody td").forEach(function (td) {
        if (td.querySelector(".mobile-th")) return;

        var colIndex = Array.from(td.parentElement.children).indexOf(td);
        var span = document.createElement("span");
        span.className = "mobile-th";
        span.textContent = headers[colIndex] || "";
        td.insertBefore(span, td.firstChild);
    });
}

// Auto-process all .content-table elements on load
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("table.content-table").forEach(function (table) {
        makeResponsive(table);
    });
});

// Re-process after htmx swaps new HTML into the page
document.addEventListener("htmx:afterSwap", function (event) {
    var tables = event.detail.target.querySelectorAll
        ? event.detail.target.querySelectorAll("table.content-table")
        : [];

    // If the swapped target itself is a table
    if (event.detail.target.matches && event.detail.target.matches("table.content-table")) {
        makeResponsive(event.detail.target);
    }

    tables.forEach(function (table) {
        makeResponsive(table);
    });
});
