/**
 * ResponsiveTable — A Mithril.js component that makes HTML tables responsive.
 *
 * On mobile viewports, each <td> gets a label injected from its column header,
 * allowing the table to stack vertically while remaining readable.
 *
 * Uses the same CSS approach as the jQuery version (responsive-table.css).
 *
 * Attrs:
 *   headers   — Array of column header strings, e.g. ["Name", "Age", "Email"]
 *   rows      — Array of arrays, each inner array is one row of cell values
 *   className — Optional additional class name (default: "content-table")
 */
const ResponsiveTable = {
    view(vnode) {
        const { headers, rows, className } = vnode.attrs;
        const tableClass = className || "content-table";

        return m("table", { class: tableClass }, [
            m("thead",
                m("tr", headers.map(header => m("th", header)))
            ),
            m("tbody",
                rows.map(row =>
                    m("tr",
                        row.map((cell, colIndex) =>
                            m("td", [
                                m("span", { class: "mobile-th" }, headers[colIndex]),
                                cell
                            ])
                        )
                    )
                )
            )
        ]);
    }
};
