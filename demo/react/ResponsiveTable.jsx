import React from "react";

/**
 * ResponsiveTable — A React component that makes HTML tables responsive.
 *
 * On mobile viewports, each <td> gets a label injected from its column header,
 * allowing the table to stack vertically while remaining readable.
 *
 * Uses the same CSS approach as the jQuery version (responsive-table.css).
 *
 * Props:
 *   headers  — Array of column header strings, e.g. ["Name", "Age", "Email"]
 *   rows     — Array of arrays, each inner array is one row of cell values
 *   className — Optional additional class name (default: "content-table")
 */
function ResponsiveTable({ headers, rows, className = "content-table" }) {
  return (
    <table className={className}>
      <thead>
        <tr>
          {headers.map((header, i) => (
            <th key={i}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, colIndex) => (
              <td key={colIndex}>
                <span className="mobile-th">{headers[colIndex]}</span>
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ResponsiveTable;
